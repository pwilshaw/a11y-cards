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

      <main className="flex-1 p-6 md:p-8">
        {currentView === 'quiz' && (
          <div>
            <div className="flex justify-center mb-8">
              <QuizProgress state={state} />
            </div>
            <QuizScreen
              state={state}
              onCorrectAnswer={collectCard}
              onAnswer={recordAnswer}
            />
          </div>
        )}

        {currentView === 'binder' && (
          <BinderScreen state={state} />
        )}
      </main>
    </div>
  );
}

export default App;
