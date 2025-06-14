import {CluesPanel} from '../ui/CluesPanel'
import {GameActions} from '../ui/GameActions'
import {GameResult} from '../game/GameResult'

export const GameSidebar = ({ 
  scenario, 
  revealedClues, 
  gameState, 
  selectedSuspect, 
  showSolution,
  onRevealClue, 
  onMakeAccusation,
  onTryAgain 
}) => {
  return (
    <div className="space-y-6">
      <CluesPanel clues={scenario.clues} revealedClues={revealedClues} />
      
      <GameActions 
        revealedClues={revealedClues}
        totalClues={scenario.clues.length}
        selectedSuspect={selectedSuspect}
        gameState={gameState}
        onRevealClue={onRevealClue}
        onMakeAccusation={onMakeAccusation}
      />

      <GameResult 
        gameState={gameState}
        scenario={scenario}
        onTryAgain={onTryAgain}
      />
    </div>
  );
};