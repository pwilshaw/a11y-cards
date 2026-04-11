import { useState, useMemo, useCallback } from 'react';
import type { Card as CardData, GameState, GameMode } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { cards } from '../../data/cards';
import { questions } from '../../data/questions';
import { pickRandomCard } from '../../lib/rarity';
import { CardReveal } from '../reveal/CardReveal';

interface QuizScreenProps {
  state: GameState;
  mode: GameMode;
  onCorrectAnswer: (cardId: string) => void;
  onAnswer: (correct: boolean) => void;
}

type QuizPhase = 'question' | 'correct' | 'wrong' | 'reveal';

/** For pro mode: pick correct + hardest wrong answer, randomise order */
function buildProAnswers(answers: string[], correctIndex: number) {
  const correct = answers[correctIndex];
  const wrongs = answers.filter((_, i) => i !== correctIndex);
  // Pick a random wrong answer (they're all reasonable distractors)
  const wrong = wrongs[Math.floor(Math.random() * wrongs.length)];
  // Randomise position
  if (Math.random() > 0.5) {
    return { answers: [correct, wrong], correctIndex: 0 };
  }
  return { answers: [wrong, correct], correctIndex: 1 };
}

export function QuizScreen({ state, mode, onCorrectAnswer, onAnswer }: QuizScreenProps) {
  const [phase, setPhase] = useState<QuizPhase>('question');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [earnedCard, setEarnedCard] = useState<CardData | null>(null);
  const [questionIndex, setQuestionIndex] = useState(() =>
    Math.floor(Math.random() * questions.length)
  );

  const currentQuestion = questions[questionIndex];
  const associatedCard = cards.find(c => c.id === currentQuestion.cardId);
  const typeConfig = associatedCard ? CARD_TYPE_CONFIG[associatedCard.type] : null;

  // Build answer set based on mode — memoised per question
  const { displayAnswers, displayCorrectIndex } = useMemo(() => {
    if (mode === 'pro') {
      const pro = buildProAnswers(currentQuestion.answers, currentQuestion.correctIndex);
      return { displayAnswers: pro.answers, displayCorrectIndex: pro.correctIndex };
    }
    return { displayAnswers: currentQuestion.answers, displayCorrectIndex: currentQuestion.correctIndex };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIndex, mode]);

  const handleAnswer = useCallback((index: number) => {
    if (phase !== 'question') return;
    setSelectedAnswer(index);

    const correct = index === displayCorrectIndex;
    onAnswer(correct);

    if (correct) {
      const card = pickRandomCard(cards, state.collectedCardIds, state.currentStreak + 1);
      if (card) {
        setEarnedCard(card);
        onCorrectAnswer(card.id);
      }
      setPhase('correct');
    } else {
      setPhase('wrong');
    }
  }, [phase, displayCorrectIndex, onAnswer, onCorrectAnswer, state]);

  const handleNext = useCallback(() => {
    if (earnedCard && phase === 'correct') {
      setPhase('reveal');
      return;
    }
    let next = Math.floor(Math.random() * questions.length);
    if (next === questionIndex && questions.length > 1) {
      next = (next + 1) % questions.length;
    }
    setQuestionIndex(next);
    setSelectedAnswer(null);
    setEarnedCard(null);
    setPhase('question');
  }, [earnedCard, phase, questionIndex]);

  const handleRevealDismiss = useCallback(() => {
    let next = Math.floor(Math.random() * questions.length);
    if (next === questionIndex && questions.length > 1) {
      next = (next + 1) % questions.length;
    }
    setQuestionIndex(next);
    setSelectedAnswer(null);
    setEarnedCard(null);
    setPhase('question');
  }, [questionIndex]);

  const labels = mode === 'pro' ? ['A', 'B'] : ['A', 'B', 'C', 'D'];

  return (
    <div style={{ width: '100%', maxWidth: 540, margin: '0 auto' }}>
      {/* Category badge */}
      {typeConfig && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <span
            style={{
              padding: '8px 20px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              background: `${typeConfig.color}15`,
              color: typeConfig.glow,
              border: `1px solid ${typeConfig.color}25`,
            }}
          >
            {typeConfig.label}
          </span>
        </div>
      )}

      {/* Question card */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 20,
          padding: '40px 36px',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 32,
          backdropFilter: 'blur(20px)',
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'white',
            marginBottom: 36,
            lineHeight: 1.55,
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {currentQuestion.question}
        </h2>

        <div style={{ display: 'grid', gap: 12 }}>
          {displayAnswers.map((answer, i) => {
            let bg = 'rgba(255,255,255,0.03)';
            let borderColor = 'rgba(255,255,255,0.06)';
            let textColor = 'rgba(255,255,255,0.85)';
            let labelColor = 'rgba(255,255,255,0.25)';
            let opacity = 1;

            if (selectedAnswer !== null) {
              if (i === displayCorrectIndex) {
                bg = 'rgba(34,197,94,0.12)';
                borderColor = 'rgba(34,197,94,0.3)';
                textColor = 'rgb(134,239,172)';
                labelColor = 'rgba(34,197,94,0.5)';
              } else if (i === selectedAnswer && i !== displayCorrectIndex) {
                bg = 'rgba(239,68,68,0.12)';
                borderColor = 'rgba(239,68,68,0.3)';
                textColor = 'rgb(252,165,165)';
                labelColor = 'rgba(239,68,68,0.5)';
              } else {
                opacity = 0.35;
              }
            }

            return (
              <button
                key={i}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 24px',
                  borderRadius: 14,
                  border: `1px solid ${borderColor}`,
                  background: bg,
                  color: textColor,
                  opacity,
                  cursor: phase === 'question' ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
                aria-label={`Answer ${labels[i]}: ${answer}`}
                onClick={() => handleAnswer(i)}
                disabled={phase !== 'question'}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${labelColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontFamily: 'monospace',
                    color: labelColor,
                    flexShrink: 0,
                  }}
                >
                  {labels[i]}
                </span>
                <span style={{ lineHeight: 1.45 }}>{answer}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {phase !== 'question' && phase !== 'reveal' && (
        <div
          role="status"
          aria-live="polite"
          style={{
            borderRadius: 16,
            padding: '28px 32px',
            marginBottom: 32,
            background: phase === 'correct' ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
            border: `1px solid ${phase === 'correct' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}`,
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: 8, color: 'white', fontSize: 17, fontFamily: "'Outfit', sans-serif" }}>
            {phase === 'correct' ? 'Correct!' : 'Not quite!'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.65 }}>
            {currentQuestion.explanation}
          </p>
          {phase === 'correct' && earnedCard && (
            <p style={{ fontSize: 16, marginTop: 12, fontWeight: 600, color: typeConfig?.glow }}>
              You earned a card!
            </p>
          )}

          <button
            style={{
              marginTop: 20,
              padding: '10px 24px',
              borderRadius: 10,
              background: phase === 'correct'
                ? 'rgba(34,197,94,0.15)'
                : 'rgba(255,255,255,0.06)',
              color: phase === 'correct' ? 'rgb(134,239,172)' : 'white',
              fontWeight: 600,
              cursor: 'pointer',
              border: `1px solid ${phase === 'correct' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.08)'}`,
              fontSize: 16,
              transition: 'all 0.2s',
            }}
            onClick={handleNext}
          >
            {phase === 'correct' && earnedCard ? 'Reveal Card' : 'Next Question'}
          </button>
        </div>
      )}

      {/* Card reveal overlay */}
      {phase === 'reveal' && earnedCard && (
        <CardReveal card={earnedCard} onDismiss={handleRevealDismiss} />
      )}
    </div>
  );
}
