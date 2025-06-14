import React, { useState, useEffect } from 'react';
import {ScenarioSelection} from './components/layout/ScenarioSelection'
import { gameScenarios } from './data/gameScenarios';
import {gameUtils} from './utils/gameUtils';
import {GameContainer} from './components/layout/GameContainer';
import {SuspectsList} from './components/game/SuspectsList';
import {GameSidebar} from './components/game/GameSidebar';
import './App.css'

const KillerSearchGame = () => {
  const [currentScenario, setCurrentScenario] = useState(null);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'solved', 'failed'
  const [revealedClues, setRevealedClues] = useState(1);
  const [completedScenarios, setCompletedScenarios] = useState([]);
  const [showSolution, setShowSolution] = useState(false);

  // Load completed scenarios from localStorage
  useEffect(() => {
    const savedProgress = gameUtils.loadProgress();
    setCompletedScenarios(savedProgress);
  }, []);

  const selectScenario = (scenarioIndex) => {
    setCurrentScenario(scenarioIndex);
    setGameState('playing');
    setSelectedSuspect(null);
    setRevealedClues(1);
    setShowSolution(false);
  };

  const selectSuspect = (suspectId) => {
    setSelectedSuspect(suspectId);
  };

  const revealMoreClues = () => {
    const scenario = gameScenarios[currentScenario];
    if (revealedClues < scenario.clues.length) {
      setRevealedClues(prev => prev + 1);
    }
  };

  const makeAccusation = () => {
    if (!selectedSuspect) return;
    
    const scenario = gameScenarios[currentScenario];
    const isCorrect = selectedSuspect === scenario.killer;
    
    if (isCorrect) {
      setGameState('solved');
      if (!completedScenarios.includes(currentScenario)) {
        const newCompleted = [...completedScenarios, currentScenario];
        setCompletedScenarios(newCompleted);
        gameUtils.saveProgress(newCompleted);
      }
    } else {
      setGameState('failed');
    }
    setShowSolution(true);
  };

  const tryAgain = () => {
    setGameState('playing');
    setShowSolution(false);
    setSelectedSuspect(null);
  };

  const backToMenu = () => {
    setGameState('menu');
    setCurrentScenario(null);
  };

  if (gameState === 'menu') {
  return (
   <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full shadow-xl backdrop-blur">
        <ScenarioSelection 
          scenarios={gameScenarios}
          completedScenarios={completedScenarios}
          onSelectScenario={selectScenario}
        />
      </div>
    </div>
  );
}

  // Render game screen
  const scenario = gameScenarios[currentScenario];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-full shadow-xl backdrop-blur">
      <GameContainer 
        scenario={scenario} 
        gameState={gameState} 
        onBackToMenu={backToMenu}
      >
        <SuspectsList 
          suspects={scenario.suspects}
          showSolution={showSolution}
          selectedSuspect={selectedSuspect}
          onSelectSuspect={selectSuspect}
        />

        <GameSidebar 
          scenario={scenario}
          revealedClues={revealedClues}
          gameState={gameState}
          selectedSuspect={selectedSuspect}
          showSolution={showSolution}
          onRevealClue={revealMoreClues}
          onMakeAccusation={makeAccusation}
          onTryAgain={tryAgain}
        />
      </GameContainer>
    </div>
  </div>
  );
};

export default KillerSearchGame;