import { gameUtils } from "../../utils/gameUtils";

export const ScenarioSelection = ({ scenarios, completedScenarios, onSelectScenario }) => {
  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Killer Search Game</h1>
      <div className="space-y-4">
        {scenarios.map((scenario, index) => {
          const isLocked = gameUtils.isScenarioLocked(index, completedScenarios);
          const isCompleted = gameUtils.isScenarioCompleted(index, completedScenarios);
          
          return (
            <div 
              key={scenario.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all ${
                isLocked 
                  ? 'border-gray-300 cursor-not-allowed' 
                  : 'border-gray-300 hover:border-blue-400 hover:shadow-md'
              }`}
              onClick={() => !isLocked && onSelectScenario(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-red-400">{scenario.title}</h2>
                    {isLocked && <span className="text-gray-400">🔒</span>}
                    {!isLocked && <span className="text-green-500">🔓</span>}
                    {isCompleted && <span className="text-green-600">✅</span>}
                  </div>
                  <p className="text-gray-600">{scenario.description}</p>
                </div>
              </div>
              {isLocked && (
                <p className="text-sm text-gray-500 mt-2">Complete the previous scenario to unlock</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};