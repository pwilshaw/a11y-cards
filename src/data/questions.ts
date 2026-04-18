import type { Question } from '../types/card';

export const questions: Question[] = [
  // ===== FUNDAMENTALS =====

  // PHI-001: #NoUserLeftBehind
  {
    id: 'Q-PHI-001a', cardId: 'PHI-001',
    question: 'Your team argues that accessibility is a nice-to-have for a future sprint. What is the strongest counter-argument?',
    answers: [
      'It will look good in the annual report',
      'It is a core principle — no user should be left behind regardless of ability',
      'It only takes a few minutes to add',
      'Competitors are doing it',
    ],
    correctIndex: 1,
    explanation: 'Accessibility is not a feature to defer. It is a foundational commitment to equal access for every user.',
    hint: 'Think about whether accessibility is optional or fundamental.',
    difficulty: 1,
  },
  {
    id: 'Q-PHI-001b', cardId: 'PHI-001',
    question: 'A product launches with no accessibility considerations. Who is most likely to be affected?',
    answers: [
      'Only users with permanent visual impairments',
      'Anyone who uses assistive technology, has a situational limitation, or a temporary injury',
      'Only users in regions with accessibility laws',
      'No one — they can request accommodations',
    ],
    correctIndex: 1,
    explanation: 'Inaccessible products exclude a wide range of people — not just those with permanent disabilities.',
    hint: 'The affected group is much wider than most teams assume.',
    difficulty: 1,
  },

  // PHI-002: Including = excluding
  {
    id: 'Q-PHI-002a', cardId: 'PHI-002',
    question: 'A designer says "we haven\'t excluded anyone — we just haven\'t thought about accessibility yet." Why is that wrong?',
    answers: [
      'They should have started sooner for budget reasons',
      'Not actively including people IS excluding them — there is no neutral ground',
      'They just need to add a screen reader plugin',
      'It only matters if users complain',
    ],
    correctIndex: 1,
    explanation: 'Every design decision either includes or excludes. Inaction is exclusion by default.',
    hint: 'Can you be neutral when it comes to inclusion?',
    difficulty: 1,
  },
  {
    id: 'Q-PHI-002b', cardId: 'PHI-002',
    question: 'Your team shipped a feature without considering accessibility. No one has complained. Does that mean it is fine?',
    answers: [
      'Yes — if users had problems they would report them',
      'No — excluded users often leave silently rather than filing complaints',
      'Yes — complaints are the best measure of accessibility',
      'No — but only because of legal risk',
    ],
    correctIndex: 1,
    explanation: 'Users who cannot access your product do not complain — they leave. Silence is not evidence of inclusion.',
    hint: 'What does an excluded user actually do?',
    difficulty: 2,
  },

  // PHI-003: It's the law
  {
    id: 'Q-PHI-003a', cardId: 'PHI-003',
    question: 'A stakeholder asks why accessibility should be prioritised this quarter. What legal fact would make the strongest case?',
    answers: [
      'There are occasional fines for inaccessible websites',
      'GDPR covers accessibility requirements',
      'There is roughly 1 accessibility lawsuit per hour in the US, and the EU\'s EAA is now law',
      'Accessibility lawsuits only happen to very large companies',
    ],
    correctIndex: 2,
    explanation: 'Accessibility is legally enforced — heavily in the US and now across the EU since the European Accessibility Act took effect in June 2025.',
    hint: 'The legal risk is bigger and more recent than most people realise.',
    difficulty: 2,
  },
  {
    id: 'Q-PHI-003b', cardId: 'PHI-003',
    question: 'Your European client says "accessibility laws don\'t apply to us yet." Are they correct?',
    answers: [
      'Yes — EU accessibility rules are still in draft',
      'No — the European Accessibility Act became enforceable in June 2025',
      'Yes — it only applies to government websites',
      'No — but enforcement does not start until 2030',
    ],
    correctIndex: 1,
    explanation: 'The EAA (Directive 2019/882) became enforceable across all EU member states in June 2025.',
    hint: 'When did the European Accessibility Act take effect?',
    difficulty: 2,
  },

  // PHI-004: Not just contrast and screen readers
  {
    id: 'Q-PHI-004a', cardId: 'PHI-004',
    question: 'Your team has fixed all colour contrast issues and tested with a screen reader. Is the product now accessible?',
    answers: [
      'Yes — contrast and screen readers are the two pillars of accessibility',
      'Almost — just add keyboard navigation and it is complete',
      'No — accessibility also covers motor, cognitive, situational, and auditory needs',
      'Yes — those are the only WCAG requirements',
    ],
    correctIndex: 2,
    explanation: 'Colour contrast and screen readers are just the starting point. Accessibility spans motor, cognitive, visual, auditory, and situational needs.',
    hint: 'There are many more categories of need beyond what you can see on screen.',
    difficulty: 1,
  },
  {
    id: 'Q-PHI-004b', cardId: 'PHI-004',
    question: 'A QA tester says "I ran the contrast checker and it passed — we are accessible." What is missing from this approach?',
    answers: [
      'They should also check the fonts',
      'Automated tools only catch a fraction of issues — manual testing for keyboard, cognitive, and motor needs is essential',
      'They need to run the check in dark mode too',
      'Nothing — automated tools are comprehensive',
    ],
    correctIndex: 1,
    explanation: 'Automated tools catch roughly 30% of accessibility issues. The rest require human testing across multiple needs.',
    hint: 'How much can a tool really catch?',
    difficulty: 2,
  },

  // PHI-005: Not just disability
  {
    id: 'Q-PHI-005a', cardId: 'PHI-005',
    question: 'A colleague says "we don\'t have any disabled users so accessibility isn\'t relevant." What is wrong with this statement?',
    answers: [
      'They should survey users to confirm',
      'Disability is often invisible, and accessibility also helps people with temporary or situational limitations',
      'Only 1% of users have a disability so it is a fair point',
      'They are right — you should wait for user feedback first',
    ],
    correctIndex: 1,
    explanation: 'Many disabilities are invisible. And accessibility helps everyone — someone with a broken arm, a parent holding a baby, or a user in bright sunlight.',
    hint: 'Disability is not always permanent or visible.',
    difficulty: 1,
  },
  {
    id: 'Q-PHI-005b', cardId: 'PHI-005',
    question: 'Give an example of a "situational" limitation that accessibility improvements would help with.',
    answers: [
      'A user who prefers dark mode',
      'A user trying to read their phone screen in direct sunlight',
      'A user with a large monitor',
      'A user on a fast Wi-Fi connection',
    ],
    correctIndex: 1,
    explanation: 'Bright sunlight, noisy environments, holding a baby, broken glasses — situational limitations affect everyone at some point.',
    hint: 'Think about temporary circumstances that affect how you use a device.',
    difficulty: 1,
  },

  // PHI-006: Including everyone
  {
    id: 'Q-PHI-006a', cardId: 'PHI-006',
    question: 'What is the difference between "accessible design" and "inclusive design"?',
    answers: [
      'They mean the same thing',
      'Accessible design is about compliance; inclusive design considers the full range of human diversity',
      'Inclusive design is only about language translation',
      'Accessible design covers more ground than inclusive design',
    ],
    correctIndex: 1,
    explanation: 'Inclusive design goes beyond compliance — it means designing for the full spectrum of ability, language, culture, gender, age, and more.',
    hint: 'One is about meeting standards. The other is about designing for everyone.',
    difficulty: 2,
  },
  {
    id: 'Q-PHI-006b', cardId: 'PHI-006',
    question: 'Your product works perfectly for English-speaking, right-handed, young adults with fast internet. What design approach have you missed?',
    answers: [
      'Responsive design',
      'Inclusive design — considering the full range of language, culture, age, ability, and context',
      'Performance optimisation',
      'Brand consistency across markets',
    ],
    correctIndex: 1,
    explanation: 'Inclusive design means designing for the widest range of human diversity, not just the "average" user.',
    hint: 'You have optimised for one narrow group. Who is left out?',
    difficulty: 2,
  },

  // PHI-007: 15% of world population
  {
    id: 'Q-PHI-007a', cardId: 'PHI-007',
    question: 'Your PM says the addressable market for accessibility features is too small to justify the investment. How do you respond?',
    answers: [
      'Agree — focus on the majority first',
      'Over 1 billion people worldwide have some form of disability — that is not a niche market',
      'Suggest adding it as an optional paid add-on',
      'Propose a separate "accessible version" of the product',
    ],
    correctIndex: 1,
    explanation: '15% of the global population have a disability. Combined with temporary and situational needs, accessibility affects a huge proportion of your users.',
    hint: 'The number is much larger than most business cases assume.',
    difficulty: 2,
  },
  {
    id: 'Q-PHI-007b', cardId: 'PHI-007',
    question: 'You are building a business case for accessibility investment. Which statement about market size is accurate?',
    answers: [
      'Disability affects roughly 2-3% of the global population',
      'About 1 in 7 people worldwide has some form of disability',
      'Disability primarily affects elderly users in developed countries',
      'The number is too small to measure reliably',
    ],
    correctIndex: 1,
    explanation: 'About 1 in 7 (15%) of the world population lives with some form of disability — over a billion people.',
    hint: 'Think in billions, not percentages.',
    difficulty: 2,
  },

  // PHI-008: Affordance
  {
    id: 'Q-PHI-008a', cardId: 'PHI-008',
    question: 'A user stares at a button but cannot tell if it is clickable. What design principle has been violated?',
    answers: [
      'Brand consistency',
      'Affordance — the element does not look interactive',
      'Progressive disclosure',
      'Visual hierarchy',
    ],
    correctIndex: 1,
    explanation: 'Affordance means making interactive elements look interactive. If a user has to guess, the design has failed.',
    hint: 'The element should communicate what it does through its appearance.',
    difficulty: 2,
  },
  {
    id: 'Q-PHI-008b', cardId: 'PHI-008',
    question: 'Your flat-design links look identical to body text. Users are not clicking them. What needs to change?',
    answers: [
      'Make the links a different font size',
      'Add visual cues (underline, colour, cursor change) so links look interactive',
      'Add tooltips explaining they are clickable',
      'Move the links to a separate navigation section',
    ],
    correctIndex: 1,
    explanation: 'If interactive elements do not look interactive, users will miss them. Affordance requires clear visual cues.',
    hint: 'How does a user know something is clickable just by looking at it?',
    difficulty: 1,
  },

  // PHI-009: Only 20% read
  {
    id: 'Q-PHI-009a', cardId: 'PHI-009',
    question: 'You have written detailed product copy but users are missing key information. What is the most likely cause?',
    answers: [
      'The font is too small',
      'Users are scanning, not reading — your key information is buried in paragraphs',
      'Users need a tutorial first',
      'The copy is too short',
    ],
    correctIndex: 1,
    explanation: 'Most users scan rather than read. Structure content with clear headings, bullet points, and key info upfront.',
    hint: 'Think about how people actually consume web content.',
    difficulty: 2,
  },
  {
    id: 'Q-PHI-009b', cardId: 'PHI-009',
    question: 'Your analytics show users spend an average of 8 seconds on your feature explanation page. What content strategy should you adopt?',
    answers: [
      'Make the page longer with more detail to increase time on page',
      'Put the most important information first — users scan, and most will not read past the opening',
      'Add an auto-playing video to hold attention',
      'Remove the text and use only images',
    ],
    correctIndex: 1,
    explanation: 'Most users scan. Front-load the key message. Use headings, bullets, and progressive disclosure for the detail.',
    hint: 'If they only read the first sentence, would they get the point?',
    difficulty: 2,
  },

  // ===== COLOUR =====

  // CON-001: Using colour
  {
    id: 'Q-CON-001a', cardId: 'CON-001',
    question: 'Your dashboard uses green for "healthy" and red for "critical" with no other indicator. What should you add?',
    answers: [
      'Brighter colours so they stand out more',
      'Text labels and/or icons alongside the colours',
      'Tooltips explaining the colour code',
      'A colour legend in the footer',
    ],
    correctIndex: 1,
    explanation: 'Colour should never be the only indicator. Always pair it with text, icons, or patterns so colour-blind users get the same information.',
    hint: 'What would a colour-blind user see?',
    difficulty: 1,
  },
  {
    id: 'Q-CON-001b', cardId: 'CON-001',
    question: 'A designer proposes a heatmap where intensity is the only way to distinguish values. What is the accessibility risk?',
    answers: [
      'Heatmaps are too complex for mobile',
      'Users with colour vision deficiency or low vision cannot interpret colour-only encoding',
      'Heatmaps use too much GPU rendering',
      'The colours might not match the brand palette',
    ],
    correctIndex: 1,
    explanation: 'Colour should always be paired with another channel — labels, patterns, or size — to convey meaning.',
    hint: 'What happens if the user cannot perceive colour differences?',
    difficulty: 2,
  },

  // CON-002: 1 in 6 visual impairment
  {
    id: 'Q-CON-002a', cardId: 'CON-002',
    question: 'You are designing a product used by 600 people. Roughly how many of them likely have some form of visual impairment?',
    answers: [ 'About 5', 'About 30', 'About 100', 'About 200' ],
    correctIndex: 2,
    explanation: '1 in 6 people have visual impairment — that is 100 out of 600. Design for them and you design better for everyone.',
    hint: 'The ratio is higher than most teams estimate.',
    difficulty: 2,
  },
  {
    id: 'Q-CON-002b', cardId: 'CON-002',
    question: 'Your team says visual impairment is "rare" and not worth testing for. What data challenges this?',
    answers: [
      'About 1 in 100 people are affected',
      'About 1 in 6 people have some form of visual impairment',
      'It only affects users over 60',
      'It only matters for medical applications',
    ],
    correctIndex: 1,
    explanation: 'Visual impairment is far more common than most teams realise — it spans a wide spectrum from mild to severe.',
    hint: 'The number is surprisingly high.',
    difficulty: 1,
  },

  // CON-003: AA 4.5:1
  {
    id: 'Q-CON-003a', cardId: 'CON-003',
    question: 'Your designer sends a mockup with #999 grey text on a #FFF white background. What will you flag?',
    answers: [
      'The font choice is wrong',
      'The contrast ratio is too low — it likely fails the minimum requirement',
      'Grey text looks unprofessional',
      'The text should be centred',
    ],
    correctIndex: 1,
    explanation: '#999 on white has a contrast ratio of ~2.85:1, well below the 4.5:1 AA minimum.',
    hint: 'Check the numbers — light grey on white is a classic fail.',
    difficulty: 2,
  },
  {
    id: 'Q-CON-003b', cardId: 'CON-003',
    question: 'A developer asks "does our large heading text need the same contrast ratio as body text?" What is the answer?',
    answers: [
      'Yes — all text has the same requirement',
      'No — large text has a lower minimum of 3:1, while normal text requires 4.5:1',
      'No — headings have no contrast requirement',
      'Yes — but only if the heading is a link',
    ],
    correctIndex: 1,
    explanation: 'WCAG AA allows 3:1 for large text (18pt+) but requires 4.5:1 for normal-sized text.',
    hint: 'There are two thresholds — one is more lenient for bigger text.',
    difficulty: 2,
  },

  // CON-004: Don't convey with colour alone
  {
    id: 'Q-CON-004a', cardId: 'CON-004',
    question: 'Your form highlights invalid fields with a red border only. What percentage of male users might miss this?',
    answers: [ 'Less than 1%', 'About 3%', 'About 8%', 'About 20%' ],
    correctIndex: 2,
    explanation: 'About 8% of men are colour-blind. A red-only indicator means roughly 1 in 12 male users may not notice the error.',
    hint: 'Colour blindness is more common in men than most people think.',
    difficulty: 1,
  },
  {
    id: 'Q-CON-004b', cardId: 'CON-004',
    question: 'Your map uses only colour to distinguish regions. A user reports they cannot tell which is which. What is the fix?',
    answers: [
      'Use brighter, more distinct colours',
      'Add patterns, labels, or borders to distinguish regions in addition to colour',
      'Add a colour legend with larger swatches',
      'Let users choose their own colour palette',
    ],
    correctIndex: 1,
    explanation: 'Colour alone is not enough. Add a second visual channel — patterns, labels, textures, or borders.',
    hint: 'What would work if the map were printed in black and white?',
    difficulty: 1,
  },

  // CON-005: Don't use coloured text for status
  {
    id: 'Q-CON-005a', cardId: 'CON-005',
    question: 'Your toast notification shows "Success" in green text and "Error" in red text with no icons. What is the accessibility issue?',
    answers: [
      'Toast notifications should not use colour at all',
      'Users with red-green colour blindness cannot distinguish between success and error states',
      'The text should be larger',
      'Toast notifications should not auto-dismiss',
    ],
    correctIndex: 1,
    explanation: 'Red-green colour blindness is the most common type. Without icons or other indicators, these users cannot tell success from error.',
    hint: 'What is the most common type of colour blindness?',
    difficulty: 1,
  },
  {
    id: 'Q-CON-005b', cardId: 'CON-005',
    question: 'Your status badges use green for "Active", amber for "Pending", and red for "Expired". A user reports they all look the same. What should you do?',
    answers: [
      'Use more saturated colours',
      'Add text labels or icons to each badge so meaning does not depend on colour alone',
      'Make the badges larger',
      'Use different shapes instead of colours',
    ],
    correctIndex: 1,
    explanation: 'Text labels (Active, Pending, Expired) or icons give every user the information regardless of colour perception.',
    hint: 'The fix should work even if you remove all colour from the page.',
    difficulty: 1,
  },

  // CON-006: Use explicit text and icons
  {
    id: 'Q-CON-006a', cardId: 'CON-006',
    question: 'A data table uses background colours to show row status. What accessible alternative should you add?',
    answers: [
      'A separate colour legend below the table',
      'Status icons and text labels in a dedicated column',
      'Brighter, more saturated colours',
      'Hover states that reveal the status',
    ],
    correctIndex: 1,
    explanation: 'Explicit text and icons in the data itself are always more accessible than relying on colour alone.',
    hint: 'The solution should work even if all colour is removed.',
    difficulty: 1,
  },

  // CON-007: Don't use abstract graph legends
  {
    id: 'Q-CON-007a', cardId: 'CON-007',
    question: 'Your pie chart uses 6 similar hues differentiated only by a colour legend. If you printed it in greyscale, what would happen?',
    answers: [
      'Nothing — the segments are still clear',
      'All segments would look the same and the data would be unreadable',
      'Only 2 segments would merge',
      'The legend would still work fine',
    ],
    correctIndex: 1,
    explanation: 'Colour-only differentiation fails in greyscale, for colour-blind users, and on poor displays. Use patterns and direct labels.',
    hint: 'Try the greyscale test on your next chart.',
    difficulty: 1,
  },

  // CON-008: Place labels next to data
  {
    id: 'Q-CON-008a', cardId: 'CON-008',
    question: 'Your bar chart has a colour legend at the bottom. Users keep scrolling up and down to understand the data. What should you do?',
    answers: [
      'Make the legend sticky',
      'Place labels directly on or next to each bar with distinct patterns',
      'Use brighter colours so they are more memorable',
      'Add a downloadable key as a PDF',
    ],
    correctIndex: 1,
    explanation: 'Direct labels next to data eliminate the need for legend lookups and work for all users.',
    hint: 'Reduce the distance between the data and its meaning.',
    difficulty: 2,
  },

  // CON-009: Light theme colours
  {
    id: 'Q-CON-009a', cardId: 'CON-009',
    question: 'Users complain they cannot read placeholder text in your light-theme form inputs. What is the likely cause?',
    answers: [
      'The font is too small',
      'Light grey placeholder text on a white input background fails contrast requirements',
      'Placeholder text should not be used at all',
      'Users need to click the input first',
    ],
    correctIndex: 1,
    explanation: 'Light grey on white is the most common contrast failure in light themes.',
    hint: 'What colour is the text, and what colour is the background?',
    difficulty: 2,
  },

  // CON-010: Dark theme colours
  {
    id: 'Q-CON-010a', cardId: 'CON-010',
    question: 'Users report eye strain in your dark mode app at night. You are using #FFF white text. What should you change?',
    answers: [
      'Switch to a light theme at night',
      'Replace pure white with a warm off-white like #E8E6E3',
      'Reduce the font size to reduce brightness',
      'Add a blue light filter prompt',
    ],
    correctIndex: 1,
    explanation: 'Pure white text on dark backgrounds creates harsh glare. Slightly warm off-whites are easier on the eyes.',
    hint: 'The fix is subtle — just take the edge off the brightness.',
    difficulty: 2,
  },

  // ===== VISUAL =====

  // VIS-001: 35% have 20/20
  {
    id: 'Q-VIS-001a', cardId: 'VIS-001',
    question: 'Your team designs for users with "normal" vision. Why is this a flawed assumption?',
    answers: [
      'All users have different monitor sizes',
      'The majority of people do NOT have perfect uncorrected vision',
      'Normal vision varies by country',
      'Vision is not relevant to digital products',
    ],
    correctIndex: 1,
    explanation: 'Only 35% of people have 20/20 vision without correction. Designing only for perfect vision excludes the majority.',
    hint: 'What percentage actually has perfect vision? Lower than you think.',
    difficulty: 2,
  },
  {
    id: 'Q-VIS-001b', cardId: 'VIS-001',
    question: 'You are testing your app with your team — all young, tech-savvy adults. Why is this a biased accessibility sample?',
    answers: [
      'They are too familiar with the product',
      'They likely have better than average vision — most of the population needs correction',
      'They work on large monitors',
      'They are not real users',
    ],
    correctIndex: 1,
    explanation: 'Your team is not representative. The majority of the population does not have perfect uncorrected vision.',
    hint: 'Look around your team. Now think about the wider population.',
    difficulty: 2,
  },

  // VIS-002: Walls of text
  {
    id: 'Q-VIS-002a', cardId: 'VIS-002',
    question: 'A content writer submits a 2,000-word page with no headings, bullet points, or visual breaks. What is the accessibility concern?',
    answers: [
      'It will rank poorly in search engines',
      'Long unbroken text is extremely difficult for users with dyslexia, ADHD, or low vision',
      'It will slow down page load',
      'Users will not scroll that far',
    ],
    correctIndex: 1,
    explanation: 'Walls of text create barriers for users with dyslexia, cognitive differences, or low vision.',
    hint: 'Who will struggle most with an unbroken wall of text?',
    difficulty: 1,
  },

  // VIS-003: Large fonts + whitespace
  {
    id: 'Q-VIS-003a', cardId: 'VIS-003',
    question: 'Your marketing site uses 12px body text because it "looks clean." Why should you push back?',
    answers: [
      '12px renders differently on Mac and Windows',
      'Text below 16px is too small for many users and fails readability best practices',
      '12px is fine as long as the line height is generous',
      'Only users over 50 need larger text',
    ],
    correctIndex: 1,
    explanation: '16px is the recommended minimum for body text. Smaller text excludes users with low vision.',
    hint: 'There is a widely agreed minimum — and 12px is below it.',
    difficulty: 1,
  },

  // VIS-004: Rainbow fonts
  {
    id: 'Q-VIS-004a', cardId: 'VIS-004',
    question: 'A brand team wants to use a handwritten script font for all body copy. What is your accessibility concern?',
    answers: [
      'It will not render on mobile browsers',
      'Decorative fonts are extremely hard to read, especially for users with dyslexia',
      'It will increase page weight',
      'It will clash with the icon style',
    ],
    correctIndex: 1,
    explanation: 'Decorative, script, and multi-coloured fonts dramatically reduce readability for most users.',
    hint: 'Think about who will struggle to read it.',
    difficulty: 1,
  },

  // VIS-005: Approved fonts
  {
    id: 'Q-VIS-005a', cardId: 'VIS-005',
    question: 'You need to choose a body font that works well for users with low vision. Which approach is best?',
    answers: [
      'Pick whatever matches the brand closest',
      'Use a font designed for legibility, like Atkinson Hyperlegible or Inter',
      'Any sans-serif font is equally accessible',
      'Use the browser default font',
    ],
    correctIndex: 1,
    explanation: 'Fonts like Atkinson Hyperlegible are specifically designed to maximise character distinction for low-vision readers.',
    hint: 'Some fonts are specifically engineered for this purpose.',
    difficulty: 2,
  },

  // ===== INTERACTION =====

  // MOT-001: Simple as possible
  {
    id: 'Q-MOT-001a', cardId: 'MOT-001',
    question: 'Your feature has 15 settings, 8 toggles, and 3 nested menus. Users feel overwhelmed. What principle guides the redesign?',
    answers: [
      'Add a search bar so users can find settings',
      'Simplify to the minimum needed — remove what is not essential',
      'Add a tutorial video explaining each setting',
      'Group settings by colour',
    ],
    correctIndex: 1,
    explanation: 'Reduce complexity to what users actually need. Do not oversimplify — but do not add what is not essential.',
    hint: 'Less is more — but not less than necessary.',
    difficulty: 2,
  },

  // MOT-002: Not everyone uses a mouse
  {
    id: 'Q-MOT-002a', cardId: 'MOT-002',
    question: 'You are about to ship a feature that works perfectly with a mouse. What have you potentially missed?',
    answers: [
      'Touch screen support',
      'Users who navigate with keyboards, switches, voice commands, or eye tracking',
      'Right-click context menus',
      'Trackpad gestures',
    ],
    correctIndex: 1,
    explanation: 'A mouse is just one input method. Many users rely on keyboards, switches, voice, or eye tracking.',
    hint: 'A mouse is not the only way people interact with your product.',
    difficulty: 1,
  },
  {
    id: 'Q-MOT-002b', cardId: 'MOT-002',
    question: 'A user with tremors finds it impossible to click small targets accurately. What input methods should your product also support?',
    answers: [
      'Only a trackball mouse',
      'Keyboard navigation, voice control, and switch devices',
      'A stylus',
      'Eye tracking only',
    ],
    correctIndex: 1,
    explanation: 'Supporting multiple input methods (keyboard, voice, switches) ensures users with motor difficulties can navigate your product.',
    hint: 'There are several alternative input methods — not just one.',
    difficulty: 1,
  },

  // MOT-003: Keyboard-only navigation
  {
    id: 'Q-MOT-003a', cardId: 'MOT-003',
    question: 'During testing, you try to complete a purchase using only your keyboard. You get stuck on the date picker. What does this reveal?',
    answers: [
      'Date pickers are inherently inaccessible',
      'That element is not keyboard-accessible — which means some users cannot complete the purchase',
      'Keyboard testing is not realistic',
      'You should add a skip link to bypass it',
    ],
    correctIndex: 1,
    explanation: 'Every interactive element must work with a keyboard. If you get stuck, so will users who depend on it.',
    hint: 'If you cannot reach it with Tab and activate it with Enter, it is broken.',
    difficulty: 1,
  },

  // MOT-004: Time-sensitive
  {
    id: 'Q-MOT-004a', cardId: 'MOT-004',
    question: 'Your session timeout logs users out after 2 minutes. A user with motor difficulties reports losing their work. What should you do?',
    answers: [
      'Warn them 30 seconds before timeout',
      'Let users extend or disable the time limit, and auto-save their progress',
      'Increase the timeout to 5 minutes',
      'Add a "keep me logged in" checkbox',
    ],
    correctIndex: 1,
    explanation: 'Give users control over time limits and auto-save their progress.',
    hint: 'The fix is about giving users control, not just adding more time.',
    difficulty: 2,
  },

  // MOT-005: Mouse-only behaviour
  {
    id: 'Q-MOT-005a', cardId: 'MOT-005',
    question: 'Your dropdown menu opens on hover and closes when the mouse leaves. What users does this exclude?',
    answers: [
      'Mobile users only',
      'Keyboard users, switch users, and anyone with motor difficulties who cannot hold a steady hover',
      'Users with slow internet',
      'Users on small screens',
    ],
    correctIndex: 1,
    explanation: 'Hover-only interactions exclude keyboard users entirely and are difficult for users with tremors.',
    hint: 'What happens if you cannot use a mouse at all?',
    difficulty: 1,
  },

  // MOT-006: Keyboard shortcuts
  {
    id: 'Q-MOT-006a', cardId: 'MOT-006',
    question: 'A voice control user says "click submit" but nothing happens because the submit element is a styled div. Why?',
    answers: [
      'Voice control does not work with forms',
      'Voice control relies on proper element types — a div is not recognised as a button',
      'The user needs to say "click div" instead',
      'Voice control only works with links',
    ],
    correctIndex: 1,
    explanation: 'Voice control and switch devices depend on proper semantic elements. A div pretending to be a button is invisible to assistive technology.',
    hint: 'Voice control looks for real buttons, not visual look-alikes.',
    difficulty: 2,
  },

  // ===== KISS =====

  // COG-001: Hick's Law
  {
    id: 'Q-COG-001a', cardId: 'COG-001',
    question: 'Your navigation has 24 items in a single level. Users report difficulty finding what they need. What principle explains this?',
    answers: [
      'Users have short attention spans',
      'Decision time increases with the number of choices — too many options cause paralysis',
      'Users prefer search over navigation',
      'Navigation should always be hidden behind a hamburger menu',
    ],
    correctIndex: 1,
    explanation: "Hick's Law: more choices = slower decisions. Reduce, group, and prioritise options.",
    hint: 'There is a well-known law about the relationship between choices and decision speed.',
    difficulty: 2,
  },
  {
    id: 'Q-COG-001b', cardId: 'COG-001',
    question: 'Your pricing page shows 7 plans with 40+ feature rows. Conversion is low. What is the most likely cognitive barrier?',
    answers: [
      'The prices are too high',
      'Too many options and too much information is overwhelming users, slowing their decision',
      'Users want a free trial before choosing',
      'The page loads too slowly',
    ],
    correctIndex: 1,
    explanation: "Choice overload leads to decision paralysis. Simplify the comparison to help users act confidently.",
    hint: 'What happens to decision speed when you add more options?',
    difficulty: 2,
  },

  // COG-002: Clear states
  {
    id: 'Q-COG-002a', cardId: 'COG-002',
    question: 'A user submits a form and the page refreshes with no feedback. They are not sure if it worked. What is missing?',
    answers: [
      'A loading spinner',
      'A clear state change — confirmation of what happened and what to do next',
      'An email confirmation',
      'A redirect to the homepage',
    ],
    correctIndex: 1,
    explanation: 'Users should always know where they are, what just happened, and what comes next.',
    hint: 'The user needs to know: did it work? What now?',
    difficulty: 1,
  },

  // COG-003: Non-essential info
  {
    id: 'Q-COG-003a', cardId: 'COG-003',
    question: 'Your registration form asks for 8 fields. Conversion is low. What is the most likely fix?',
    answers: [
      'Add a progress bar',
      'Remove every field that is not essential for registration — collect the rest later',
      'Make the form wider so it looks shorter',
      'Add placeholder text to every field',
    ],
    correctIndex: 1,
    explanation: 'Every extra field is friction. Only ask for what you truly need at this step.',
    hint: 'How many of those fields does the user NEED to provide right now?',
    difficulty: 1,
  },

  // COG-004: Make it clear what to do
  {
    id: 'Q-COG-004a', cardId: 'COG-004',
    question: 'Users land on your pricing page but do not click any CTA. Heatmaps show they scroll up and down repeatedly. What is the problem?',
    answers: [
      'The page needs more animations',
      'The action they should take is not obvious — they cannot figure out what to do',
      'The pricing is too high',
      'They are comparing plans, which is expected',
    ],
    correctIndex: 1,
    explanation: 'If users scroll back and forth, they are lost. Clear labels, obvious CTAs, and visual hierarchy make the next step unmistakable.',
    hint: 'The page is not making the next step obvious.',
    difficulty: 1,
  },

  // COG-005: Don't question decisions
  {
    id: 'Q-COG-005a', cardId: 'COG-005',
    question: 'A user updates their profile but sees no confirmation. They make the change three times. What should you add?',
    answers: [
      'An auto-save indicator with clear "Saved" confirmation',
      'A popup asking them to confirm every change',
      'A changelog of all edits',
      'A save button that turns grey after clicking',
    ],
    correctIndex: 0,
    explanation: 'Clear, immediate feedback prevents users from second-guessing their actions.',
    hint: 'The user needs to feel confident that their action worked.',
    difficulty: 1,
  },

  // COG-006: Split up complex tasks
  {
    id: 'Q-COG-006a', cardId: 'COG-006',
    question: 'Your onboarding flow has 8 steps on a single page. Users drop off at step 4. How should you restructure it?',
    answers: [
      'Add motivational messages between steps',
      'Break it into separate pages with a progress bar and the ability to save and return',
      'Remove steps 5-8 entirely',
      'Add a skip button for the whole flow',
    ],
    correctIndex: 1,
    explanation: 'Complex tasks should be broken into clear, linear stages with progress indication.',
    hint: 'Show people where they are and how far they have to go.',
    difficulty: 1,
  },
  {
    id: 'Q-COG-006b', cardId: 'COG-006',
    question: 'A user gets halfway through a long form, accidentally closes the tab, and loses everything. What should your product have done?',
    answers: [
      'Warned them before closing',
      'Auto-saved their progress so they can return and continue where they left off',
      'Made the form shorter so it takes less time',
      'Added a timer showing estimated completion time',
    ],
    correctIndex: 1,
    explanation: 'Complex tasks need auto-save and the ability to return. Users should never lose progress.',
    hint: 'Think about what happens when real life interrupts a long task.',
    difficulty: 1,
  },

  // ===== SEQUENCE =====

  // STR-001: Logical order
  {
    id: 'Q-STR-001a', cardId: 'STR-001',
    question: 'Your CSS grid reorders elements visually, but a screen reader user reports the content makes no sense. What went wrong?',
    answers: [
      'Screen readers do not support CSS Grid',
      'The visual order does not match the reading order — screen readers follow the source, not the layout',
      'You need to add ARIA roles to grid items',
      'The grid needs more columns',
    ],
    correctIndex: 1,
    explanation: 'Screen readers follow source order. If CSS reorders elements visually, the reading experience becomes incoherent.',
    hint: 'What order does a screen reader follow — visual or source?',
    difficulty: 2,
  },

  // STR-002: Tab orders
  {
    id: 'Q-STR-002a', cardId: 'STR-002',
    question: 'A keyboard user presses Tab and focus jumps from the header to the footer, skipping the main content. What is broken?',
    answers: [
      'The footer has higher priority',
      'The tab order is not following a natural, predictable flow',
      'The main content is not focusable',
      'Tab navigation does not work on all browsers',
    ],
    correctIndex: 1,
    explanation: 'Tab order should flow naturally: left to right, top to bottom, matching the visual layout.',
    hint: 'Focus should follow the same path your eyes would.',
    difficulty: 1,
  },

  // STR-003: Semantics
  {
    id: 'Q-STR-003a', cardId: 'STR-003',
    question: 'Your developer built a clickable card using a styled container instead of a proper interactive element. A voice control user cannot activate it. Why?',
    answers: [
      'Voice control does not support cards',
      'Assistive technology does not recognise styled containers as interactive — it needs the correct element type',
      'The card needs a hover state',
      'Cards should never be interactive',
    ],
    correctIndex: 1,
    explanation: 'Using the correct semantic element gives you keyboard, focus, and screen reader support for free.',
    hint: 'Assistive technology looks for the element type, not the visual style.',
    difficulty: 1,
  },

  // STR-004: Semantic structure
  {
    id: 'Q-STR-004a', cardId: 'STR-004',
    question: 'A screen reader user says navigating your page is like "reading a book with no chapters." What are you missing?',
    answers: [
      'A table of contents at the top',
      'Clear page landmarks — navigation, main content, and footer that screen readers can jump between',
      'More headings with bold text',
      'A site search feature',
    ],
    correctIndex: 1,
    explanation: 'Semantic landmarks act as chapter markers that screen readers can jump between.',
    hint: 'Think of landmarks as the chapters of your page.',
    difficulty: 1,
  },

  // STR-005: Don't alt text everything
  {
    id: 'Q-STR-005a', cardId: 'STR-005',
    question: 'Your page has 40 images. A screen reader user says the experience is exhausting. What is wrong?',
    answers: [
      'You have too many images',
      'Decorative images should be hidden from screen readers — only meaningful images need descriptions',
      'Screen readers should be configured to ignore images',
      'You should remove all image descriptions',
    ],
    correctIndex: 1,
    explanation: 'Decorative images should be hidden. Only describe images that convey information.',
    hint: 'Not every image carries meaning. Some are just decoration.',
    difficulty: 2,
  },

  // STR-006: Empty alt for decorative
  {
    id: 'Q-STR-006a', cardId: 'STR-006',
    question: 'A screen reader announces: "image, blue wavy line divider dot png." What has the developer done wrong?',
    answers: [
      'The image filename is too long',
      'A decorative divider has a description when it should have been marked as decorative',
      'The format should be SVG, not PNG',
      'Screen readers should not read image descriptions',
    ],
    correctIndex: 1,
    explanation: 'Decorative images should be hidden from screen readers. Announcing them clutters the experience.',
    hint: 'Does a decorative divider add meaning for a blind user?',
    difficulty: 1,
  },

  // STR-007: Alt text adds value
  {
    id: 'Q-STR-007a', cardId: 'STR-007',
    question: 'An image description reads: "A blue rectangle with rounded corners, white text in Helvetica Bold." Is this good alt text?',
    answers: [
      'Yes — it is very detailed',
      'No — it describes appearance instead of purpose. "Submit your application" would be better',
      'Yes — screen reader users need visual style information',
      'No — it should also include hex colour values',
    ],
    correctIndex: 1,
    explanation: 'Alt text should describe what the image communicates, not what it looks like.',
    hint: 'If you replaced the image with text, what would the text say?',
    difficulty: 2,
  },

  // STR-008: Images with text
  {
    id: 'Q-STR-008a', cardId: 'STR-008',
    question: 'Your marketing team sends a hero banner that is a single image containing headline, subtext, and CTA. What are the problems?',
    answers: [
      'The file size will be too large',
      'The text cannot be resized, translated, selected, or read by screen readers',
      'The image will look blurry on retina',
      'Search engines cannot read text in images',
    ],
    correctIndex: 1,
    explanation: 'Text in images cannot be resized, translated, copied, or read aloud. Always use real text.',
    hint: 'What can a user NOT do with text trapped inside an image?',
    difficulty: 1,
  },

  // STR-009: Unnecessary complexity
  {
    id: 'Q-STR-009a', cardId: 'STR-009',
    question: 'Your modal has a nested dropdown, which opens a secondary panel, with tabs containing accordion sections. Users are confused. Why?',
    answers: [
      'Modals should not contain other components',
      'Every layer of nesting is a potential accessibility barrier — this is too complex',
      'The animation between layers is too slow',
      'Users need better onboarding for the pattern',
    ],
    correctIndex: 1,
    explanation: 'Each layer of complexity creates potential barriers for keyboard users, screen readers, and cognitive needs.',
    hint: 'How many layers deep is the user? Each one is a risk.',
    difficulty: 2,
  },

  // STR-010: Keep it simple
  {
    id: 'Q-STR-010a', cardId: 'STR-010',
    question: 'Your team debates between a clever animated widget and a plain form that does the same thing. Which is more accessible?',
    answers: [
      'The widget — it is more engaging',
      'The plain form — the simplest solution that meets the need is usually the most accessible',
      'Neither — they need a third option',
      'The widget, as long as it has a fallback',
    ],
    correctIndex: 1,
    explanation: 'Simplicity wins. The simplest solution is almost always the most accessible and maintainable.',
    hint: 'When in doubt, keep it simple.',
    difficulty: 1,
  },
  {
    id: 'Q-STR-010b', cardId: 'STR-010',
    question: 'A junior developer proposes a custom-built interactive component. A senior suggests using a native browser element instead. Who is right and why?',
    answers: [
      'The junior — custom components offer more control',
      'The senior — native elements have built-in accessibility that custom components must recreate from scratch',
      'It depends on the browser support requirements',
      'Neither — they should use a third-party library',
    ],
    correctIndex: 1,
    explanation: 'Native elements come with free keyboard support, focus management, and screen reader compatibility. Custom components must rebuild all of that.',
    hint: 'What do native elements give you for free?',
    difficulty: 1,
  },

  // ===== SECOND QUESTIONS FOR REMAINING CARDS =====

  // CON-006b
  {
    id: 'Q-CON-006b', cardId: 'CON-006',
    question: 'Your error messages use a red exclamation icon but no text. A screen reader user has no idea what went wrong. What should you add?',
    answers: [
      'A tooltip on the icon',
      'An explicit text description alongside the icon explaining the error',
      'A louder alert sound',
      'A bigger icon',
    ],
    correctIndex: 1,
    explanation: 'Icons alone are not accessible. Always pair them with visible text that conveys the same meaning.',
    hint: 'What does a screen reader announce when it encounters an icon with no text?',
    difficulty: 1,
  },

  // CON-007b
  {
    id: 'Q-CON-007b', cardId: 'CON-007',
    question: 'Your analytics dashboard uses colour-coded line charts. A colour-blind colleague says two lines look identical. What is the best fix?',
    answers: [
      'Use thicker lines',
      'Use different line styles (solid, dashed, dotted) and add direct labels to each line',
      'Add a legend with larger colour swatches',
      'Reduce the number of lines to two',
    ],
    correctIndex: 1,
    explanation: 'Different line styles and direct labels work regardless of colour perception. A legend alone is not enough.',
    hint: 'What visual differences work even without colour?',
    difficulty: 2,
  },

  // CON-008b
  {
    id: 'Q-CON-008b', cardId: 'CON-008',
    question: 'A user with low vision is trying to read your chart but cannot match the tiny legend squares to the data. What layout change helps most?',
    answers: [
      'Make the legend squares larger',
      'Remove the legend entirely and label each data element directly where it appears',
      'Use a magnifier tool',
      'Move the legend above the chart',
    ],
    correctIndex: 1,
    explanation: 'Placing labels directly next to data removes the cognitive burden of matching legend entries to visual elements.',
    hint: 'Eliminate the need to cross-reference entirely.',
    difficulty: 2,
  },

  // CON-009b
  {
    id: 'Q-CON-009b', cardId: 'CON-009',
    question: 'Your designer uses #CCCCCC for disabled button text on a #F5F5F5 background. What is the problem?',
    answers: [
      'Disabled buttons should not have text',
      'The contrast is too low — disabled states still need to be perceivable, even if not interactive',
      'Disabled buttons should use the brand colour',
      '#CCCCCC is not a valid hex code',
    ],
    correctIndex: 1,
    explanation: 'Even disabled elements need enough contrast to be perceived. Users need to know the button exists, even if they cannot click it.',
    hint: 'Can users even see it is there?',
    difficulty: 2,
  },

  // CON-010b
  {
    id: 'Q-CON-010b', cardId: 'CON-010',
    question: 'Your dark theme has a pure black (#000) background with pure white (#FFF) text. Some users report the text seems to "vibrate." Why?',
    answers: [
      'Their monitors are miscalibrated',
      'The extreme contrast between pure black and pure white causes halation — a glow effect that reduces readability',
      'They need to update their browser',
      'This only happens on OLED screens',
    ],
    correctIndex: 1,
    explanation: 'Maximum contrast (#000 on #FFF or vice versa) can cause halation. Use dark greys and warm off-whites for better readability.',
    hint: 'Sometimes too MUCH contrast is also a problem.',
    difficulty: 2,
  },

  // VIS-002b
  {
    id: 'Q-VIS-002b', cardId: 'VIS-002',
    question: 'A user with ADHD tells you they lose their place repeatedly on your content page. What structural change would help?',
    answers: [
      'Add background music to help them focus',
      'Break content into short sections with clear headings, whitespace, and bullet points',
      'Add a reading progress bar',
      'Reduce the font size so more fits on screen',
    ],
    correctIndex: 1,
    explanation: 'Clear structure, short paragraphs, and visual breaks help users with ADHD and cognitive differences maintain focus.',
    hint: 'What makes it easy to find your place again after losing focus?',
    difficulty: 1,
  },

  // VIS-003b
  {
    id: 'Q-VIS-003b', cardId: 'VIS-003',
    question: 'A developer argues that 14px text is "fine on desktop." What are they overlooking?',
    answers: [
      'Desktop monitors are too big for 14px',
      'Users may be zoomed out or viewing from a distance, and 16px is the accessibility baseline for body text',
      '14px looks different on Mac and Windows',
      '14px is only a problem on mobile',
    ],
    correctIndex: 1,
    explanation: '16px is the baseline. Users sit at varying distances, may have the page zoomed out, or may have uncorrected vision.',
    hint: 'Not everyone sits at the same distance from their screen.',
    difficulty: 1,
  },

  // VIS-004b
  {
    id: 'Q-VIS-004b', cardId: 'VIS-004',
    question: 'A client insists on using a decorative font for navigation labels. How do you explain the risk?',
    answers: [
      'Decorative fonts are not web-safe',
      'Users need to read navigation quickly — decorative fonts slow reading speed and exclude users with dyslexia',
      'Search engines cannot index decorative fonts',
      'Decorative fonts increase page load time',
    ],
    correctIndex: 1,
    explanation: 'Navigation text must be instantly scannable. Decorative fonts reduce reading speed for all users and create real barriers for users with dyslexia.',
    hint: 'What is the primary job of navigation text? Speed and clarity.',
    difficulty: 1,
  },

  // VIS-005b
  {
    id: 'Q-VIS-005b', cardId: 'VIS-005',
    question: 'Two fonts have the same size and weight, but one is significantly easier to read for low-vision users. What makes the difference?',
    answers: [
      'The line height',
      'Character distinction — fonts designed for accessibility make similar letters (like I, l, 1) visually distinct',
      'The letter spacing',
      'The font file format',
    ],
    correctIndex: 1,
    explanation: 'Accessible fonts like Atkinson Hyperlegible are designed so similar characters (I/l/1, O/0, rn/m) are clearly distinguishable.',
    hint: 'Think about which letters are easy to confuse.',
    difficulty: 2,
  },

  // MOT-001b
  {
    id: 'Q-MOT-001b', cardId: 'MOT-001',
    question: 'A product manager wants to add 5 new options to an already complex settings page. What should you recommend?',
    answers: [
      'Add tabs to organise the settings',
      'First question whether each option is essential — remove or hide anything users rarely need',
      'Add a search function for settings',
      'Move the new options to a separate "Advanced" page',
    ],
    correctIndex: 1,
    explanation: 'Before adding complexity, challenge whether each option is truly needed. The simplest interface that works is the most accessible.',
    hint: 'Adding more organisation does not fix having too many options.',
    difficulty: 2,
  },

  // MOT-003b
  {
    id: 'Q-MOT-003b', cardId: 'MOT-003',
    question: 'Your custom image carousel can only be controlled by swiping or clicking arrows. What accessibility requirement does this fail?',
    answers: [
      'Images must have alt text',
      'Every interactive element must be operable via keyboard — the carousel needs arrow key and Tab support',
      'Carousels must auto-rotate',
      'Carousels are not allowed under WCAG',
    ],
    correctIndex: 1,
    explanation: 'All interactive elements must work with a keyboard. A swipe/click-only carousel excludes keyboard and switch users entirely.',
    hint: 'What input method is missing?',
    difficulty: 1,
  },

  // MOT-004b
  {
    id: 'Q-MOT-004b', cardId: 'MOT-004',
    question: 'Your e-commerce site clears the shopping cart after 10 minutes of inactivity. A user with a cognitive disability takes longer to decide. What should change?',
    answers: [
      'Show a countdown timer so they know how long they have',
      'Persist the cart contents and let the user control when items are removed',
      'Send an email reminder when the cart is about to expire',
      'Add a "hurry" message to encourage faster checkout',
    ],
    correctIndex: 1,
    explanation: 'Arbitrary time limits exclude users who need more time. Persist state and give users control.',
    hint: 'The solution is about removing the time pressure entirely.',
    difficulty: 2,
  },

  // MOT-005b
  {
    id: 'Q-MOT-005b', cardId: 'MOT-005',
    question: 'Your drag-and-drop task board has no keyboard alternative. A user with repetitive strain injury cannot rearrange tasks. What should you add?',
    answers: [
      'A mouse sensitivity adjustment',
      'Keyboard controls (arrow keys or a "Move to" menu) as an alternative to drag-and-drop',
      'Voice commands to drag items',
      'Larger drag handles',
    ],
    correctIndex: 1,
    explanation: 'Every mouse-based interaction needs a keyboard alternative. "Move to" menus or arrow key reordering both work.',
    hint: 'What would let someone reorder items without touching a mouse?',
    difficulty: 1,
  },

  // MOT-006b
  {
    id: 'Q-MOT-006b', cardId: 'MOT-006',
    question: 'A switch device user can only press one button. How do keyboard shortcuts help them?',
    answers: [
      'They do not — switch users cannot use shortcuts',
      'Switch software maps single-button presses to keyboard shortcuts, so well-defined shortcuts enable full navigation',
      'Shortcuts are only useful for power users',
      'Switch users should use voice control instead',
    ],
    correctIndex: 1,
    explanation: 'Switch devices map physical presses to keyboard events. Well-defined shortcuts let switch users navigate efficiently.',
    hint: 'How does a switch device communicate with your app?',
    difficulty: 2,
  },

  // COG-002b
  {
    id: 'Q-COG-002b', cardId: 'COG-002',
    question: 'A user clicks "Save" and the button briefly flashes but nothing else changes. They click it 4 more times. What is the UX failure?',
    answers: [
      'The button animation is too fast',
      'There is no clear state change — the user cannot tell whether the save succeeded, failed, or is still in progress',
      'The button should be disabled after clicking',
      'They need a confirmation dialog',
    ],
    correctIndex: 1,
    explanation: 'Every action needs a clear outcome. Users must always know: what happened, and what comes next.',
    hint: 'What three things should a user always know?',
    difficulty: 1,
  },

  // COG-003b
  {
    id: 'Q-COG-003b', cardId: 'COG-003',
    question: 'Your checkout form asks for a phone number to "improve security." Users abandon at this step. What should you do?',
    answers: [
      'Explain why the phone number is needed',
      'Remove the field — if it is not essential, it should not be there',
      'Make it optional but still show it',
      'Move it to a later step',
    ],
    correctIndex: 1,
    explanation: 'Every field users do not understand or trust adds friction. If you do not truly need it, remove it.',
    hint: 'Do you actually need this information to complete the transaction?',
    difficulty: 1,
  },

  // COG-004b
  {
    id: 'Q-COG-004b', cardId: 'COG-004',
    question: 'Your landing page has three buttons: "Learn More", "Get Started", and "See Plans" — all above the fold. Users click none of them. Why?',
    answers: [
      'The buttons are too small',
      'Three competing CTAs create confusion — users do not know which one is the right next step',
      'They need more information before clicking',
      'The button colours are wrong',
    ],
    correctIndex: 1,
    explanation: 'Multiple equal CTAs split attention. One clear primary action is always better than three competing ones.',
    hint: 'How many things can you ask someone to do at once?',
    difficulty: 1,
  },

  // COG-005b
  {
    id: 'Q-COG-005b', cardId: 'COG-005',
    question: 'A user accidentally deletes a project with months of work. There was no confirmation dialog. What design pattern was missing?',
    answers: [
      'A password prompt before destructive actions',
      'A confirmation step and an undo option for destructive actions',
      'Auto-save should have prevented this',
      'Destructive actions should require admin approval',
    ],
    correctIndex: 1,
    explanation: 'Destructive actions need guardrails: confirmation dialogs, undo periods, or soft-delete with recovery options.',
    hint: 'What would Gmail or Google Docs do here?',
    difficulty: 1,
  },

  // STR-001b
  {
    id: 'Q-STR-001b', cardId: 'STR-001',
    question: 'Your mobile layout stacks elements differently from desktop using CSS order. A keyboard user on desktop reports Tab focus jumps around randomly. Why?',
    answers: [
      'CSS order is not supported on desktop',
      'CSS visual reordering does not change the underlying focus order — keyboard navigation follows the source',
      'The user needs to update their browser',
      'Tab order is random on all websites',
    ],
    correctIndex: 1,
    explanation: 'CSS order changes visual position but not DOM order. Keyboard focus follows the source, creating a mismatch.',
    hint: 'What does the keyboard follow — the visual layout or the code?',
    difficulty: 2,
  },

  // STR-002b
  {
    id: 'Q-STR-002b', cardId: 'STR-002',
    question: 'A developer uses tabindex="5" on an important button to make it "come first" in the tab order. Why is this a bad idea?',
    answers: [
      'Tabindex values above 0 are not supported',
      'Positive tabindex creates unpredictable tab order — it pulls the element out of the natural flow and confuses all other tab stops',
      'It only works in Chrome',
      'Tabindex should only be used on links',
    ],
    correctIndex: 1,
    explanation: 'Positive tabindex values break the natural flow for all elements on the page. Use 0 (natural order) or -1 (programmatic only).',
    hint: 'What happens to every OTHER element when you give one a high tabindex?',
    difficulty: 2,
  },

  // STR-003b
  {
    id: 'Q-STR-003b', cardId: 'STR-003',
    question: 'A screen reader announces a clickable element as "group" instead of "button." Users do not know they can interact with it. What is the fix?',
    answers: [
      'Add an aria-label saying "click me"',
      'Use the correct semantic element (a real button) instead of a styled container',
      'Add a cursor:pointer CSS rule',
      'Add a click sound effect',
    ],
    correctIndex: 1,
    explanation: 'Screen readers announce element roles. A div is announced as "group" — only a real button is announced as "button."',
    hint: 'What does a screen reader announce — the CSS style or the element type?',
    difficulty: 1,
  },

  // STR-004b
  {
    id: 'Q-STR-004b', cardId: 'STR-004',
    question: 'Your page has 15 headings but they go H1, H3, H2, H4, H2, H1. A screen reader user reports the structure is confusing. Why?',
    answers: [
      'You should only use H1 and H2',
      'Heading levels should follow a logical hierarchy (H1 → H2 → H3) — skipping or misordering levels breaks the document outline',
      'Screen readers ignore heading levels',
      'H3 and H4 are deprecated',
    ],
    correctIndex: 1,
    explanation: 'Heading levels communicate document structure. Skipping or misordering them is like numbering book chapters 1, 3, 2, 4.',
    hint: 'What do heading levels communicate to assistive technology?',
    difficulty: 1,
  },

  // STR-005b
  {
    id: 'Q-STR-005b', cardId: 'STR-005',
    question: 'A developer adds "image of a grey horizontal line" as alt text to a decorative separator. What should they have done instead?',
    answers: [
      'Written a shorter description',
      'Used empty alt text (alt="") so screen readers skip the decorative element entirely',
      'Used the word "separator" as alt text',
      'Removed the alt attribute entirely',
    ],
    correctIndex: 1,
    explanation: 'Decorative images should have empty alt text. Removing the alt attribute entirely is worse — screen readers will read the filename.',
    hint: 'There is a difference between alt="" and no alt attribute.',
    difficulty: 2,
  },

  // STR-006b
  {
    id: 'Q-STR-006b', cardId: 'STR-006',
    question: 'Your page has 20 decorative icons next to menu items. A screen reader reads each one as "image bullet point." How do you fix this?',
    answers: [
      'Remove all the icons',
      'Mark each decorative icon with empty alt text so screen readers skip them',
      'Add descriptions like "menu icon" to each one',
      'Replace them with emoji',
    ],
    correctIndex: 1,
    explanation: 'Decorative icons should be hidden from screen readers. The menu text alone conveys the meaning.',
    hint: 'Do the icons add meaning beyond what the text already says?',
    difficulty: 1,
  },

  // STR-007b
  {
    id: 'Q-STR-007b', cardId: 'STR-007',
    question: 'A product photo shows a laptop with your software running. The alt text reads "laptop computer on desk." Is this useful?',
    answers: [
      'Yes — it describes the image accurately',
      'No — the alt text should describe the purpose: what the software shows or what the user should understand from the image',
      'Yes — but it should also mention the brand of laptop',
      'No — product photos should never have alt text',
    ],
    correctIndex: 1,
    explanation: 'Alt text should convey what the image communicates in context, not just describe objects. "Dashboard showing real-time analytics" is more useful than "laptop on desk."',
    hint: 'Why is this image on the page? What should the user take away from it?',
    difficulty: 2,
  },

  // STR-008b
  {
    id: 'Q-STR-008b', cardId: 'STR-008',
    question: 'A user zooms their browser to 200%. Your text-based heading scales perfectly, but the promotional banner with text baked into an image stays the same size. What does this demonstrate?',
    answers: [
      'Images should use responsive sizing',
      'Text in images does not scale with browser zoom — only real HTML text respects user zoom settings',
      'The user should use a different browser',
      'Images need srcset attributes for zoom',
    ],
    correctIndex: 1,
    explanation: 'Real text scales with zoom, translation tools, and user stylesheets. Image text is frozen at its original size.',
    hint: 'What happens to real text vs image text when a user zooms?',
    difficulty: 1,
  },

  // STR-009b
  {
    id: 'Q-STR-009b', cardId: 'STR-009',
    question: 'Your team keeps adding features to a page. Each feature works individually but together the page has become confusing. What principle should guide the next discussion?',
    answers: [
      'Add a tutorial overlay to explain everything',
      'Every addition increases complexity and potential barriers — audit what can be simplified or removed',
      'Reorganise features into tabs',
      'Add a "simplified view" toggle',
    ],
    correctIndex: 1,
    explanation: 'Complexity accumulates. Regular simplification audits prevent pages from becoming accessibility barriers.',
    hint: 'The problem is not any single feature — it is the total complexity.',
    difficulty: 2,
  },
];
