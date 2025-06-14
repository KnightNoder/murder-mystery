
import  {CrimeScene} from  '../ui/CrimeScene'
import { GameHeader } from './GameHeader';
export const GameContainer = ({ scenario, gameState, onBackToMenu, children }) => {
  return (
    <div className="max-w-full mx-auto p-6">
      <GameHeader title={scenario.title} onBackToMenu={onBackToMenu} />
      <CrimeScene scenario={scenario} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};