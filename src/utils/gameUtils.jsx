export const gameUtils = {
  saveProgress: (completedScenarios) => {
    localStorage.setItem('killerGameProgress', JSON.stringify(completedScenarios));
  },
  
  loadProgress: () => {
    return JSON.parse(localStorage.getItem('killerGameProgress') || '[]');
  },
  
  isScenarioLocked: (scenarioIndex, completedScenarios) => {
    return scenarioIndex > 0 && !completedScenarios.includes(scenarioIndex - 1);
  },
  
  isScenarioCompleted: (scenarioIndex, completedScenarios) => {
    return completedScenarios.includes(scenarioIndex);
  }
};