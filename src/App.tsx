import { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { Header } from './components/layout/Header';
import { QuizScreen } from './components/quiz/QuizScreen';
import { QuizProgress } from './components/quiz/QuizProgress';
import { BinderScreen } from './components/binder/BinderScreen';

type View = 'quiz' | 'binder';

function App() {
  const [currentView, setCurrentView] = useState<View>('quiz');
  const { state, collectCard, recordAnswer } = useGameState();

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        state={state}
      />

      <main className="flex-1 flex flex-col items-center px-4 py-10 md:py-16">
        {currentView === 'quiz' && (
          <div className="w-full max-w-2xl flex flex-col items-center gap-10">
            <QuizProgress state={state} />
            <QuizScreen
              state={state}
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
      </main>
    </div>
  );
}

export default App;
