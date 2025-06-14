export const CluesPanel = ({ clues, revealedClues }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
        <span className="text-lg">🔍</span>
        <span className="text-blue-400">Crime Scene Evidence</span>
      </h3>
      <ul className="space-y-2">
        {clues.map((clue, index) => (
          <li 
            key={index} 
            className={`text-sm ${index < revealedClues ? 'text-gray-800' : 'text-gray-400'}`}
          >
            <span className="font-medium">• </span>
            {index < revealedClues ? clue : '???'}
          </li>
        ))}
      </ul>
    </div>
  );
};