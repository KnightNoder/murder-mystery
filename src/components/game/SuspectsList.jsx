import { SuspectCard } from '../ui/SuspectCard'

export const SuspectsList = ({ suspects, showSolution, selectedSuspect, onSelectSuspect }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="font-bold text-xl mb-4">Suspects</h2>
      <div className="space-y-4">
        {suspects.map(suspect => (
          <SuspectCard 
            key={suspect.id}
            suspect={suspect}
            isRevealed={showSolution}
            onSelect={onSelectSuspect}
            isSelected={selectedSuspect === suspect.id}
          />
        ))}
      </div>
    </div>
  );
};