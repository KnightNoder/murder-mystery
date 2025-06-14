export const CrimeScene = ({ scenario }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
      <h2 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-red-500">
        Crime Scene
      </h2>
      <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
        {scenario.description}
      </p>
    </div>
  );
};