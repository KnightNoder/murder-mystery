
export const GameHeader = ({ title, onBackToMenu }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button 
        onClick={onBackToMenu}
        className="px-4 py-2 bg-gray-500 text-black rounded hover:bg-gray-600"
      >
        Back to Menu
      </button>
    </div>
  );
};