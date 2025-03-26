import React, { useState } from 'react';

const ElectoralCandidates = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const candidates = [
    {
      id: 1,
      name: "Chijioke Okonkwo",
      department: "Civil Engineering",
      image: "/api/placeholder/150/150",
      borderColor: "border-blue-600",
      info: {
        age: 22,
        level: "400 Level",
        cgpa: "4.2/5.0",
        position: "Presidential Candidate",
        achievements: [
          "Best Civil Engineering Student 2022",
          "President, Engineering Students Association",
          "Member, University Senate Committee on Student Affairs"
        ],
        manifesto: "To create a more inclusive campus environment with improved facilities and increased student representation in university decision-making processes."
      }
    },
    {
      id: 2,
      name: "Aisha Mohammed",
      department: "Fisheries and Aquaculture",
      image: "/api/placeholder/150/150",
      borderColor: "border-orange-400",
      info: {
        age: 21,
        level: "300 Level",
        cgpa: "4.5/5.0",
        position: "Presidential Candidate",
        achievements: [
          "Dean's List Award (2021-2022)",
          "Secretary, Environmental Conservation Club",
          "Coordinator, Campus Sustainability Initiative"
        ],
        manifesto: "Promoting sustainability on campus, improving academic resources, and establishing more inclusive student policies."
      }
    },
    {
      id: 3,
      name: "Olumide Adeyemi",
      department: "Architecture",
      image: "/api/placeholder/150/150",
      borderColor: "border-gray-400",
      info: {
        age: 23,
        level: "500 Level",
        cgpa: "4.0/5.0",
        position: "Presidential Candidate",
        achievements: [
          "Winner, National Architecture Design Competition",
          "Vice President, Architecture Students Association",
          "Student Representative, Faculty Board"
        ],
        manifesto: "Redesigning student spaces, implementing innovative learning technologies, and strengthening industry connections for better student opportunities."
      }
    },
    {
      id: 4,
      name: "Ifeoma Onyekachi",
      department: "Software Engineering",
      image: "/api/placeholder/150/150",
      borderColor: "border-pink-300",
      info: {
        age: 22,
        level: "400 Level",
        cgpa: "4.8/5.0",
        position: "Presidential Candidate",
        achievements: [
          "Best Female Student in Technology Award",
          "Lead Developer, Campus Mobile App Project",
          "President, Women in Tech Campus Chapter"
        ],
        manifesto: "Digitizing student services, creating tech training opportunities, and establishing mentorship programs for all departments."
      }
    }
  ];

  const openDetails = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const closeDetails = () => {
    setSelectedCandidate(null);
  };

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
              <button 
                className="w-32 px-4 py-1 bg-orange-400 text-white font-medium rounded hover:bg-orange-500 transition"
                onClick={() => openDetails(candidate)}
              >
                View Details
              </button>
              <button className="w-32 px-4 py-1 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition">
                VOTE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Candidate Details Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
            <button 
              onClick={closeDetails}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <span className="text-2xl">&times;</span>
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Candidate Image Section */}
              <div className="w-full md:w-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center rounded-l-lg">
                <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${selectedCandidate.borderColor} mb-4`}>
                  <img 
                    src={selectedCandidate.image} 
                    alt={selectedCandidate.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h2 className="text-xl font-bold text-center mb-1">{selectedCandidate.name}</h2>
                <p className="text-gray-700 text-center">{selectedCandidate.department}</p>
              </div>
              
              {/* Candidate Information Section */}
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Candidate Information</h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">Age</p>
                    <p className="font-medium">{selectedCandidate.info.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Level</p>
                    <p className="font-medium">{selectedCandidate.info.level}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">CGPA</p>
                    <p className="font-medium">{selectedCandidate.info.cgpa}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Position</p>
                    <p className="font-medium">{selectedCandidate.info.position}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm">Key Achievements</p>
                  <ul className="list-disc list-inside">
                    {selectedCandidate.info.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Manifesto</p>
                  <p className="text-sm italic">{selectedCandidate.info.manifesto}</p>
                </div>
                
                <div className="mt-6">
                  <button className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition">
                    VOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectoralCandidates;