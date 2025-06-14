
import  {CrimeScene} from  '../ui/CrimeScene'
import { GameHeader } from './GameHeader';

export const GameContainer = ({
  scenario,
  gameState,
  onBackToMenu,
  children,
}) => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <GameHeader title={scenario.title} onBackToMenu={onBackToMenu} />
      <CrimeScene scenario={scenario} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {children}
      </div>
    </div>
  );
};