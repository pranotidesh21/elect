import React from 'react';

const ElectoralCandidates = () => {
  const candidates = [
    {
      id: 1,
      name: "Chijioke Okonkwo",
      department: "Civil Engineering",
      image: "/api/placeholder/150/150",
      borderColor: "border-blue-600"
    },
    {
      id: 2,
      name: "Aisha Mohammed",
      department: "Fisheries and Aquaculture",
      image: "/api/placeholder/150/150",
      borderColor: "border-orange-400"
    },
    {
      id: 3,
      name: "Olumide Adeyemi",
      department: "Architecture",
      image: "/api/placeholder/150/150",
      borderColor: "border-gray-400"
    },
    {
      id: 4,
      name: "Ifeoma Onyekachi",
      department: "Software Engineering",
      image: "/api/placeholder/150/150",
      borderColor: "border-pink-300"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6 rounded shadow-sm border border-gray-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-800 mb-2">Electoral Candidates</h2>
        <p className="text-gray-800">Here are the 2023 JIT Students union presidential candidates</p>
        <p className="text-gray-700 italic text-sm mb-3">These candidates have been screened by the JIT electoral board</p>
        <p className="text-red-700 font-bold text-lg">VOTING IS OPEN!!!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 divide-x divide-gray-200">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="flex flex-col items-center px-4 py-2">
            <div className={`w-28 h-28 rounded-full overflow-hidden border-4 ${candidate.borderColor} mb-3`}>
              <img 
                src={candidate.image} 
                alt={candidate.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-center mb-4">
              <h3 className="font-bold text-gray-900">{candidate.name}</h3>
              <p className="text-sm text-gray-700">{candidate.department}</p>
            </div>
            <div className="flex flex-col items-center w-full space-y-2">
              <button className="w-32 px-4 py-1 bg-orange-400 text-white font-medium rounded hover:bg-orange-500 transition">
                View Details
              </button>
              <button className="w-32 px-4 py-1 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition">
                VOTE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectoralCandidate