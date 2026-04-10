import { useState } from 'react';
import type { GameMode } from './types/card';
import { useGameState } from './hooks/useGameState';
import { Header } from './components/layout/Header';
import { ModeSelect } from './components/layout/ModeSelect';
import { QuizScreen } from './components/quiz/QuizScreen';
import { QuizProgress } from './components/quiz/QuizProgress';
import { BinderScreen } from './components/binder/BinderScreen';
import { PresenterScreen } from './components/presenter/PresenterScreen';

type View = 'quiz' | 'binder' | 'presenter';

function App() {
  const [currentView, setCurrentView] = useState<View>('quiz');
  const [mode, setMode] = useState<GameMode | null>(() => {
    const saved = localStorage.getItem('a11y-cards-mode');
    return saved === 'normal' || saved === 'pro' ? saved : null;
  });
  const { state, collectCard, recordAnswer } = useGameState();

  const handleModeSelect = (m: GameMode) => {
    setMode(m);
    localStorage.setItem('a11y-cards-mode', m);
  };

  if (!mode) {
    return <ModeSelect onSelect={handleModeSelect} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        state={state}
        mode={mode}
        onModeChange={() => {
          setMode(null);
          localStorage.removeItem('a11y-cards-mode');
        }}
      />

      <main className="flex-1 flex flex-col items-center px-4 py-10 md:py-16">
        {currentView === 'quiz' && (
          <div className="w-full max-w-2xl flex flex-col items-center gap-10">
            <QuizProgress state={state} />
            <QuizScreen
              state={state}
              mode={mode}
              onCorrectAnswer={collectCard}
              onAnswer={recordAnswer}
            />
          </div>
        )}

        {currentView === 'binder' && (
          <div className="w-full max-w-5xl">
            <BinderScreen state={state} />
          </div>
        )}

        {currentView === 'presenter' && (
          <PresenterScreen />
        )}
      </main>
    </div>
  );
}

export default App;
