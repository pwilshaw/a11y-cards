import { useState, useMemo, useCallback } from 'react';
import type { Card as CardData, Question, GameState } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { cards } from '../../data/cards';
import { questions } from '../../data/questions';
import { pickRandomCard } from '../../lib/rarity';
import { CardReveal } from '../reveal/CardReveal';

interface QuizScreenProps {
  state: GameState;
  onCorrectAnswer: (cardId: string) => void;
  onAnswer: (correct: boolean) => void;
}

type QuizPhase = 'question' | 'correct' | 'wrong' | 'reveal';

export function QuizScreen({ state, onCorrectAnswer, onAnswer }: QuizScreenProps) {
  const [phase, setPhase] = useState<QuizPhase>('question');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [earnedCard, setEarnedCard] = useState<CardData | null>(null);
  const [questionIndex, setQuestionIndex] = useState(() =>
    Math.floor(Math.random() * questions.length)
  );

  const currentQuestion = questions[questionIndex];
  const associatedCard = cards.find(c => c.id === currentQuestion.cardId);
  const typeConfig = associatedCard ? CARD_TYPE_CONFIG[associatedCard.type] : null;

  const handleAnswer = useCallback((index: number) => {
    if (phase !== 'question') return;
    setSelectedAnswer(index);

    const correct = index === currentQuestion.correctIndex;
    onAnswer(correct);

    if (correct) {
      // Pick a card to reward
      const card = pickRandomCard(cards, state.collectedCardIds, state.currentStreak + 1);
      if (card) {
        setEarnedCard(card);
        onCorrectAnswer(card.id);
      }
      setPhase('correct');
    } else {
      setPhase('wrong');
    }
  }, [phase, currentQuestion, onAnswer, onCorrectAnswer, state]);

  const handleNext = useCallback(() => {
    if (earnedCard && phase === 'correct') {
      setPhase('reveal');
      return;
    }
    // Pick a new random question
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

  return (
    <div style={{ width: '100%', maxWidth: 540, margin: '0 auto' }}>
      {/* Category badge */}
      {typeConfig && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <span
            style={{
              padding: '10px 24px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
              background: `${typeConfig.color}20`,
              color: typeConfig.color,
              border: `1px solid ${typeConfig.color}40`,
            }}
          >
            {typeConfig.label}
          </span>
        </div>
      )}

      {/* Question */}
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 24,
          padding: 48,
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 40, lineHeight: 1.5, textAlign: 'center' }}>
          {currentQuestion.question}
        </h2>

        <div style={{ display: 'grid', gap: 20 }}>
          {currentQuestion.answers.map((answer, i) => {
            let bg = 'rgba(255,255,255,0.05)';
            let borderColor = 'rgba(255,255,255,0.1)';
            let textColor = 'rgba(255,255,255,0.9)';
            let opacity = 1;

            if (selectedAnswer !== null) {
              if (i === currentQuestion.correctIndex) {
                bg = 'rgba(34,197,94,0.2)';
                borderColor = 'rgba(34,197,94,0.5)';
                textColor = 'rgb(134,239,172)';
              } else if (i === selectedAnswer && i !== currentQuestion.correctIndex) {
                bg = 'rgba(239,68,68,0.2)';
                borderColor = 'rgba(239,68,68,0.5)';
                textColor = 'rgb(252,165,165)';
              } else {
                opacity = 0.5;
              }
            }

            return (
              <button
                key={i}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '20px 32px',
                  borderRadius: 16,
                  border: `1px solid ${borderColor}`,
                  background: bg,
                  color: textColor,
                  opacity,
                  cursor: phase === 'question' ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                  fontSize: 16,
                }}
                onClick={() => handleAnswer(i)}
                disabled={phase !== 'question'}
              >
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginRight: 16, fontSize: 14 }}>
                  {String.fromCharCode(65 + i)}
                </span>
                {answer}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {phase !== 'question' && phase !== 'reveal' && (
        <div
          style={{
            borderRadius: 16,
            padding: 40,
            marginBottom: 40,
            background: phase === 'correct' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
            border: `1px solid ${phase === 'correct' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: 8, color: 'white', fontSize: 18 }}>
            {phase === 'correct' ? 'Correct!' : 'Not quite!'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.6 }}>{currentQuestion.explanation}</p>
          {phase === 'correct' && earnedCard && (
            <p style={{ fontSize: 14, marginTop: 12, fontWeight: 500, color: typeConfig?.color }}>
              You earned a card!
            </p>
          )}

          <button
            style={{
              marginTop: 24,
              padding: '12px 28px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontWeight: 500,
              cursor: 'pointer',
              border: 'none',
              fontSize: 16,
            }}
            onClick={handleNext}
          >
            {phase === 'correct' && earnedCard ? 'Reveal Card!' : 'Next Question'}
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
