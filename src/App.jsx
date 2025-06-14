import React, { useState, useEffect } from 'react';
import { ScenarioSelection } from "./components/layout/ScenarioSelection";
import {gameUtils} from './utils/gameUtils';
import {GameContainer} from './components/layout/GameContainer';
import {SuspectsList} from './components/game/SuspectsList';
import {GameSidebar} from './components/game/GameSidebar';
import { loadScenario } from "./data/loadScenario";
import "./App.css";

const KillerSearchGame = () => {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [gameState, setGameState] = useState("menu");
  const [revealedClues, setRevealedClues] = useState(1);
  const [completedScenarios, setCompletedScenarios] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [scenario, setScenario] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load all scenarios and completed progress
  useEffect(() => {
    const loadAllScenarios = async () => {
      try {
        setLoading(true);
        const scenarios = [];

        // Load all 19 scenarios (0-18 indices, corresponding to scenario1.js through scenario19.js)
        for (let i = 0; i < 19; i++) {
          try {
            const scenario = await loadScenario(i);
            if (scenario) {
              scenarios.push(scenario);
            }
          } catch (error) {
            console.error(`Failed to load scenario ${i + 1}:`, error);
            // Continue loading other scenarios even if one fails
          }
        }

        setScenarios(scenarios);

        // Load completed scenarios from localStorage
        const savedProgress = gameUtils.loadProgress();
        setCompletedScenarios(savedProgress);
      } catch (error) {
        console.error("Error loading scenarios:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllScenarios();
  }, []);

  const selectScenario = async (scenarioIndex) => {
    setCurrentScenario(scenarioIndex);
    setGameState("playing");
    setSelectedSuspect(null);
    setRevealedClues(1);
    setShowSolution(false);

    // Use the already loaded scenario or load it fresh
    const loaded =
      scenarios[scenarioIndex] || (await loadScenario(scenarioIndex));
    setScenario(loaded);
  };

  const selectSuspect = (suspectId) => {
    setSelectedSuspect(suspectId);
  };

  const revealMoreClues = () => {
    if (scenario && revealedClues < scenario.clues.length) {
      setRevealedClues((prev) => prev + 1);
    }
  };

  const makeAccusation = () => {
    if (!selectedSuspect || !scenario) return;

    const isCorrect = selectedSuspect === scenario.killer;

    if (isCorrect) {
      setGameState("solved");
      if (!completedScenarios.includes(currentScenario)) {
        const newCompleted = [...completedScenarios, currentScenario];
        setCompletedScenarios(newCompleted);
        gameUtils.saveProgress(newCompleted);
      }
    } else {
      setGameState("failed");
    }
    setShowSolution(true);
  };

  const tryAgain = () => {
    setGameState("playing");
    setShowSolution(false);
    setSelectedSuspect(null);
  };

  const backToMenu = () => {
    setGameState("menu");
    setCurrentScenario(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading scenarios...</div>
      </div>
    );
  }

  if (gameState === "menu") {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full shadow-xl backdrop-blur">
          <ScenarioSelection
            scenarios={scenarios}
            completedScenarios={completedScenarios}
            onSelectScenario={selectScenario}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-full shadow-xl backdrop-blur">
        {scenario && (
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
        )}
      </div>
    </div>
  );
};

export default KillerSearchGame;