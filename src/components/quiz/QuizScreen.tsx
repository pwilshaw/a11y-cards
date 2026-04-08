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
    <div className="w-full text-center">
      {/* Category badge */}
      {typeConfig && (
        <div className="flex justify-center mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
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
      <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.answers.map((answer, i) => {
            let btnClass = 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20';

            if (selectedAnswer !== null) {
              if (i === currentQuestion.correctIndex) {
                btnClass = 'bg-green-500/20 border-green-500/50 text-green-300';
              } else if (i === selectedAnswer && i !== currentQuestion.correctIndex) {
                btnClass = 'bg-red-500/20 border-red-500/50 text-red-300';
              } else {
                btnClass = 'bg-white/5 border-white/5 opacity-50';
              }
            }

            return (
              <button
                key={i}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${btnClass} ${
                  phase === 'question' ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={() => handleAnswer(i)}
                disabled={phase !== 'question'}
              >
                <span className="text-white/40 font-mono mr-4 text-sm">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-white/90">{answer}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {phase !== 'question' && phase !== 'reveal' && (
        <div className={`rounded-xl p-6 md:p-8 mb-8 ${
          phase === 'correct'
            ? 'bg-green-500/10 border border-green-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <p className="font-bold mb-1 text-white">
            {phase === 'correct' ? 'Correct!' : 'Not quite!'}
          </p>
          <p className="text-white/70 text-sm">{currentQuestion.explanation}</p>
          {phase === 'correct' && earnedCard && (
            <p className="text-sm mt-2 font-medium" style={{ color: typeConfig?.color }}>
              You earned a card! →
            </p>
          )}

          <button
            className="mt-4 px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
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
