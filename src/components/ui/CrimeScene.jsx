export const CrimeScene = ({ scenario }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h2 className="font-bold text-lg mb-2 text-red-500 ">Crime Scene</h2>
      <p className="text-gray-800">{scenario.description}</p>
    </div>
  );
};
