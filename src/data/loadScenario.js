// ./data/loadScenario.js

export const loadScenario = async (index) => {
  try {
    // index is 0-based, but files are numbered starting from 1
    const module = await import(`./scenarios/scenario${index + 1}.js`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load scenario ${index + 1}:`, error);
    return null;
  }
};

// Helper function to get the total number of available scenarios
export const getAvailableScenarios = async () => {
  const scenarios = [];
  let index = 0;
  
  while (true) {
    try {
      const scenario = await loadScenario(index);
      if (scenario) {
        scenarios.push(scenario);
        index++;
      } else {
        break;
      }
    } catch (error) {
      break;
    }
  }
  
  return scenarios;
};

export default { loadScenario, getAvailableScenarios };