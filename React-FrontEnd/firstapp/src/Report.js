// src/pages/Report.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Report() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the report data passed via navigate state
  const { reportData } = location.state || { reportData: "No report available." };

  const handleGoBack = () => {
    navigate(-1); // go back to previous page
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-6">
      <header className="bg-white shadow-md py-4 px-8 w-full mb-6">
        <h1 className="text-3xl font-bold text-pink-600 text-center">FemAura – Health Report</h1>
      </header>

      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl w-full border border-pink-200">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Your Health Report</h2>
        <pre className="bg-gray-100 p-4 rounded text-gray-800 whitespace-pre-wrap">
          {reportData}
        </pre>

        <button
          onClick={handleGoBack}
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
