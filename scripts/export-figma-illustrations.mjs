#!/usr/bin/env node

/**
 * Export illustrations from Figma as PNGs.
 *
 * Usage:
 *   FIGMA_TOKEN=figd_xxx node scripts/export-figma-illustrations.mjs
 *
 * Requires a Figma personal access token:
 *   https://www.figma.com/developers/api#access-tokens
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '../public/illustrations');

const FILE_KEY = 'YsjvgnohT9Xg2A60fydc9N';
const SCALE = 2; // 2x for crisp rendering on retina

// Card ID → Figma node ID mapping
const CARD_ILLUSTRATIONS = {
  // Philosophy
  'PHI-001': '857:80017',   // 090-accessibility
  'PHI-002': '729:18569',   // 023-women sharing
  'PHI-003': '1444:336141', // 193-Roadblock
  'PHI-004': '850:79437',   // 077-usability
  'PHI-005': '1117:134263', // 156-Hands holding Earth
  'PHI-006': '986:67038',   // 138-Party people
  'PHI-007': '891:75649',   // 116-earth-winky-face
  'PHI-008': '729:18553',   // 007-design patterns
  'PHI-009': '729:18567',   // 021-reading

  // Contrast
  'CON-001': '729:18568',   // 022-painting
  'CON-002': '729:18566',   // 020-telescope
  'CON-003': '891:76135',   // 106-sun&moon
  'CON-004': '729:18562',   // 010-painting
  'CON-005': '851:79825',   // 088-unknown-error
  'CON-006': '1387:91272',  // 183-Sign posts
  'CON-007': '832:61532',   // 067-web&app-graph
  'CON-008': '850:79774',   // 084-dashboard
  'CON-009': '729:18664',   // 047-flowers
  'CON-010': '729:18675',   // 059-rocket-in-space

  // Vision
  'VIS-001': '772:30348',   // 071-40+years
  'VIS-002': '1321:74453',  // 178-Dyslexia
  'VIS-003': '899:81194',   // 107-fonts
  'VIS-004': '729:18651',   // 037-brain&rainbow
  'VIS-005': '966:63659',   // 133-Blank book

  // Motor
  'MOT-001': '729:18632',   // 036-ideas
  'MOT-002': '730:12538',   // 069-keyboard&mouse
  'MOT-003': '729:18557',   // 015-gaming
  'MOT-004': '729:18631',   // 027-folder&timer
  'MOT-005': '729:18546',   // 000-desktop&tablet
  'MOT-006': '729:18652',   // 039-rocket

  // Cognition
  'COG-001': '729:18655',   // 042-thinking-outside-the-box
  'COG-002': '729:18571',   // 025-loading bar
  'COG-003': '729:18656',   // 043-confused
  'COG-004': '891:76430',   // 105-user-journey-map
  'COG-005': '729:18657',   // 044-worried
  'COG-006': '850:79606',   // 079-jigsaw-puzzle

  // Structure
  'STR-001': '850:79647',   // 082-blueprint
  'STR-002': '947:73090',   // 123-Building blocks
  'STR-003': '729:18654',   // 041-web-design
  'STR-004': '850:79776',   // 085-roadmaps
  'STR-005': '850:79823',   // 087-photos
  'STR-006': '911:56469',   // 112-picture-frames
  'STR-007': '850:79434',   // 076-mobile screen
  'STR-008': '1123:125277', // 175-Bad design
  'STR-009': '729:18658',   // 052-mental-puzzle
  'STR-010': '729:18678',   // 062-inspired
};

async function main() {
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error('Missing FIGMA_TOKEN environment variable.');
    console.error('Get a personal access token from: https://www.figma.com/developers/api#access-tokens');
    process.exit(1);
  }

  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR, { recursive: true });
  }

  const nodeIds = [...new Set(Object.values(CARD_ILLUSTRATIONS))];
  console.log(`Exporting ${nodeIds.length} illustrations from Figma...`);

  // Batch into groups of 10 to avoid Figma render timeout
  const BATCH_SIZE = 10;
  const batches = [];
  for (let i = 0; i < nodeIds.length; i += BATCH_SIZE) {
    batches.push(nodeIds.slice(i, i + BATCH_SIZE));
  }

  const images = {};

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const idsParam = batch.join(',');
    const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${idsParam}&format=png&scale=${SCALE}`;

    console.log(`Requesting batch ${i + 1}/${batches.length} (${batch.length} nodes)...`);
    const res = await fetch(url, {
      headers: { 'X-Figma-Token': token },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Figma API error ${res.status}: ${text}`);
      process.exit(1);
    }

    const data = await res.json();
    if (data.err) {
      console.error('Figma API returned error:', data.err);
      process.exit(1);
    }

    Object.assign(images, data.images);

    // Small delay between batches to be kind to the API
    if (i < batches.length - 1) await new Promise(r => setTimeout(r, 500));
  }

  // Build a reverse map: nodeId → cardIds
  const nodeToCards = {};
  for (const [cardId, nodeId] of Object.entries(CARD_ILLUSTRATIONS)) {
    if (!nodeToCards[nodeId]) nodeToCards[nodeId] = [];
    nodeToCards[nodeId].push(cardId);
  }

  // Download each image
  let downloaded = 0;
  let failed = 0;

  const downloads = Object.entries(images).map(async ([nodeId, imgUrl]) => {
    if (!imgUrl) {
      console.warn(`  No image URL for node ${nodeId}`);
      failed++;
      return;
    }

    const cardIds = nodeToCards[nodeId] || [nodeId];

    try {
      const imgRes = await fetch(imgUrl);
      if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      // Save a copy for each card ID that uses this illustration
      for (const cardId of cardIds) {
        const filename = `${cardId.toLowerCase()}.png`;
        await writeFile(resolve(OUT_DIR, filename), buffer);
      }

      downloaded++;
      console.log(`  [${downloaded}/${nodeIds.length}] ${cardIds.join(', ')} -> OK`);
    } catch (e) {
      failed++;
      console.error(`  FAILED ${cardIds.join(', ')}: ${e.message}`);
    }
  });

  await Promise.all(downloads);

  console.log(`\nDone! ${downloaded} downloaded, ${failed} failed.`);
  console.log(`Images saved to: ${OUT_DIR}`);
}

main();
