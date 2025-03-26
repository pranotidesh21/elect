import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouVoting = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-gray-100 p-6">
      <div className="bg-white w-full max-w-md mx-auto p-8 rounded-xl shadow-lg text-center border border-gray-200">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle size={48} className="text-green-600" />
          </div>
        </div>
        
        <h1 className="text-green-600 text-2xl font-bold mb-4">Thank You for Voting!</h1>
        
        <p className="text-gray-700 mb-6">Your vote has been successfully recorded.</p>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-green-800">Your participation helps make a difference in our community.</p>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-4">Results will be available after the voting period ends.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors duration-200 font-medium">
            View Ballot
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouVoting;