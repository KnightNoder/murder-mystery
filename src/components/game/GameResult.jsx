export const GameResult = ({ gameState, scenario, onTryAgain }) => {
  if (gameState === 'solved') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600 text-xl">✅</span>
          <h3 className="font-bold text-green-800">Case Solved!</h3>
        </div>
        <p className="text-sm text-green-700 mb-3">
          Congratulations! You correctly identified the killer.
        </p>
        <div className="bg-white p-3 rounded border text-black">
          <p className="text-sm"><strong>Solution:</strong> {scenario.solution}</p>
        </div>
      </div>
    );
  }

  if (gameState === 'failed') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-600 text-xl">❌</span>
          <h3 className="font-bold text-red-800">Wrong Accusation!</h3>
        </div>
        <p className="text-sm text-red-700 mb-3">
          That's not the killer. Study the evidence more carefully.
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm"><strong>Correct Answer:</strong> {scenario.solution}</p>
        </div>
        <button 
          onClick={onTryAgain}
          className="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return null;
};