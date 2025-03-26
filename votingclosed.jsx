import React from 'react';
import { AlertCircle } from 'lucide-react';

const VotingClosed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <div className="bg-white w-full max-w-md mx-auto p-8 rounded-xl shadow-lg text-center border border-gray-200">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle size={48} className="text-red-500" />
          </div>
        </div>
        
        <h1 className="text-red-600 text-2xl font-bold mb-4">Oops! Voting Time is Over</h1>
        
        <p className="text-gray-700 mb-6">You did not vote within the allotted time.</p>
        
        <div className="border-t border-gray-200 pt-6 mt-2">
          <p className="text-sm text-gray-500 mb-4">Please contact your administrator if you believe this is an error.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingClosed;