export const GameHeader = ({ title, onBackToMenu }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left break-words">
        {title}
      </h1>
      <button
        onClick={onBackToMenu}
        className="text-white md:text-black w-full sm:w-auto px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition-colors duration-200 text-sm sm:text-base"
      >
        Back to Menu
      </button>
    </div>
  );
};
