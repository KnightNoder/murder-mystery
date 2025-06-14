export const SuspectCard = ({ suspect, isRevealed, onSelect, isSelected }) => {
  return (
    <div
      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "text-black border-red-300 bg-red-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
      onClick={() => onSelect(suspect.id)}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 font-bold">
          👤
        </div>
        <div>
          <h3
            className={`${
              isSelected ? "text-red-500!" : ""
            } font-bold text-lg text-yellow-300`}
          >
            {suspect.name}
          </h3>
          <p className="text-sm text-gray-600">
            {suspect.age} years old • {suspect.role}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Details:</strong> {suspect.details}
        </p>
        {isRevealed && (
          <>
            <p>
              <strong>Motive:</strong> {suspect.motive}
            </p>
            <p>
              <strong>Alibi:</strong> {suspect.alibi}
            </p>
            <p>
              <strong>Evidence:</strong> {suspect.evidence}
            </p>
          </>
        )}
      </div>
    </div>
  );
};