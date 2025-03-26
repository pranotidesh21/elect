import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Lock, ChevronRight } from 'lucide-react';

const VoterIdVerification = () => {
  const [voterID, setVoterID] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);
  
  // List of valid Voter IDs (Simulated database)
  const validVoterIDs = ["300892803118", "987654321012", "234567890123", "456789123456"];
  
  // Check if a voter has already voted
  const [previousVoter, setPreviousVoter] = useState(null);
  
  useEffect(() => {
    // Get previous voter from localStorage when component mounts
    const storedVoterID = localStorage.getItem("voterID");
    if (storedVoterID) {
      setPreviousVoter(storedVoterID);
    }
  }, []);
  
  const authenticate = () => {
    setIsLoading(true);
    setErrorMsg('');
    
    // Simulate network delay for better UX
    setTimeout(() => {
      // Validate Voter ID Format (Only numbers, 12 digits)
      if (!/^\d{12}$/.test(voterID)) {
        setErrorMsg("Invalid Voter ID format! Must be 12 digits.");
        setIsLoading(false);
        return;
      }
      
      // Check if voter is the same as the previous one
      if (previousVoter && previousVoter === voterID) {
        setErrorMsg("You have already voted. Another voter must log in!");
        setIsLoading(false);
        return;
      }
      
      // Check if Voter ID is in the valid list
      if (validVoterIDs.includes(voterID)) {
        // Clear previous voter and authenticate new voter
        localStorage.clear();
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("voterID", voterID);
        
        setAnimateSuccess(true);
        
        // Redirect after showing success animation
        setTimeout(() => {
          window.location.href = "vote.html";
        }, 1500);
      } else {
        setErrorMsg("Voter ID not found in the system!");
        setIsLoading(false);
      }
    }, 800);
  };
  
  const handleInputChange = (e) => {
    setVoterID(e.target.value.replace(/[^0-9]/g, ''));
    // Clear error message when user starts typing again
    if (errorMsg) setErrorMsg('');
  };

  // Auto-format voter ID with spaces for better readability
  const formattedVoterID = voterID
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
      <div className={`bg-white w-full max-w-md p-8 rounded-xl shadow-lg transition-all duration-500 ${animateSuccess ? 'scale-105 ring ring-green-400' : ''}`}>
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <Lock size={28} className="text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Voter ID Verification</h1>
        <p className="text-gray-500 text-center mb-6">Please enter your 12-digit voter identification number</p>
        
        <div className="relative mb-6">
          <input
            type="text"
            id="voterIDNumber"
            placeholder="XXXX XXXX XXXX"
            maxLength="14"
            value={formattedVoterID}
            onChange={handleInputChange}
            disabled={isLoading || animateSuccess}
            className={`w-full px-4 py-3 text-lg border ${errorMsg ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
          />
          
          {voterID.length > 0 && !errorMsg && !animateSuccess && (
            <div className="absolute right-3 top-3.5">
              <div className={`h-5 w-5 rounded-full ${voterID.length === 12 ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center`}>
                <span className="text-white text-xs">{voterID.length}</span>
              </div>
            </div>
          )}
        </div>
        
        {errorMsg && (
          <div className="flex items-center bg-red-50 text-red-700 p-3 rounded-lg mb-6">
            <AlertCircle size={20} className="mr-2 flex-shrink-0" />
            <p className="text-sm">{errorMsg}</p>
          </div>
        )}
        
        {animateSuccess && (
          <div className="flex items-center bg-green-50 text-green-700 p-3 rounded-lg mb-6">
            <CheckCircle size={20} className="mr-2 flex-shrink-0" />
            <p className="text-sm">Authentication Successful! Redirecting...</p>
          </div>
        )}
        
        <button
          onClick={authenticate}
          disabled={isLoading || animateSuccess || voterID.length !== 12}
          className={`w-full flex items-center justify-center ${isLoading || animateSuccess || voterID.length !== 12 ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-4 rounded-lg transition duration-300 text-base font-medium`}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              {animateSuccess ? (
                <span className="flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  Authenticated
                </span>
              ) : (
                <span className="flex items-center">
                  Verify Identity
                  <ChevronRight size={18} className="ml-1" />
                </span>
              )}
            </>
          )}
        </button>
        
        <p className="text-xs text-gray-500 mt-6 text-center">
          By proceeding, you agree to the voter verification terms and privacy policy
        </p>
      </div>
    </div>
  );
};

export default VoterIdVerification;