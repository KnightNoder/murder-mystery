export const GameActions = ({ 
  revealedClues, 
  totalClues, 
  selectedSuspect, 
  gameState, 
  onRevealClue, 
  onMakeAccusation 
}) => {
  return (
    <div className="space-y-4">
      {revealedClues < totalClues && gameState === "playing" && (
        <button
          onClick={onRevealClue}
          className="text-white w-full px-4 py-3 bg-blue-500 md:text-black rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
        >
          Reveal Next Clue ({revealedClues}/{totalClues})
        </button>
      )}

      {gameState === "playing" && (
        <button
          onClick={onMakeAccusation}
          className={`w-full px-4 py-3 rounded-lg font-bold transition-colors duration-200 ${
            selectedSuspect
              ? "bg-red-500 text-red-500 hover:bg-red-600 active:bg-red-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!selectedSuspect}
        >
          Accuse Selected Suspect
        </button>
      )}
    </div>
  );
};