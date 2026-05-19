import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Rep() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const reportText =
//     location.state?.reportData || "No report available.";

//   // Split report for better UI
//   const sections = reportText.split("\n").filter(Boolean);

//   const aiIndex = sections.findIndex((line) =>
//     line.includes("AI Insights")
//   );

//   const reportDetails = sections.slice(1, aiIndex);
//   // const aiInsight = sections.slice(aiIndex + 1).join(" ");
  
//   const aiInsight =
//     aiIndex !== -1
//       ? sections.slice(aiIndex + 1).join(" ")
//       : "AI insights are not available for this report.";


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
//       {/* Header */}
//       <header className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
//         <h1 className="text-3xl font-bold text-pink-600 text-center">
//           FemAura Health Report
//         </h1>
//         <p className="text-center text-gray-500 mt-1">
//           Personalized menstrual health analysis
//         </p>
//       </header>

//       {/* Report Card */}
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-pink-100">
//         {/* Report Info */}
//         <h2 className="text-xl font-semibold text-pink-600 mb-4">
//           Report Summary
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4 mb-6">
//           {reportDetails.map((line, index) => {
//             const [label, value] = line.split(":");
//             return (
//               <div
//                 key={index}
//                 className="bg-pink-50 p-4 rounded-xl"
//               >
//                 <p className="text-sm text-gray-500">{label}</p>
//                 <p className="font-semibold text-gray-800">
//                   {value}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* AI Insight */}
//         <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             AI Health Insight
//           </h3>
//           <p className="leading-relaxed text-white/95">
//             {aiInsight}
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="flex justify-between mt-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 rounded-xl border border-pink-500 text-pink-600 hover:bg-pink-50 transition"
//           >
//             ← Back
//           </button>

//           <button
//             onClick={() => navigate("/reports")}
//             className="px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition"
//           >
//             View All Reports
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useLocation, useNavigate } from "react-router-dom";

export default function Rep() {
  const location = useLocation();
  const navigate = useNavigate();

  const reportText =
    location.state?.reportData || "No report available.";

  // Split report into lines
  const sections = reportText.split("\n").filter(Boolean);

  // Find AI Insights section
  const aiIndex = sections.findIndex((line) =>
    line.toLowerCase().includes("ai insights")
  );

  const reportDetails =
    aiIndex !== -1 ? sections.slice(1, aiIndex) : sections.slice(1);

  const aiInsight =
    aiIndex !== -1
      ? sections.slice(aiIndex + 1).join(" ")
      : "AI insights are not available for this report.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-pink-600 text-center">
          FemAura Health Report
        </h1>
        <p className="text-center text-gray-500 mt-1">
          AI-powered menstrual health analysis
        </p>
      </header>

      {/* Report Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-pink-100">
        {/* Report Summary */}
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          Report Summary
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {reportDetails.map((line, index) => {
            const [label, ...rest] = line.split(":");
            const value = rest.join(":");

            return (
              <div
                key={index}
                className="bg-pink-50 p-4 rounded-xl border border-pink-100"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {label}
                </p>
                <p className="font-semibold text-gray-800 mt-1">
                  {value}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
             AI-Powered Health Insights
          </h3>

          <p className="leading-relaxed text-white/95">
            {aiInsight}
          </p>

          <p className="mt-4 text-sm text-white/80 italic">
            Note: These insights are predictive and not a medical diagnosis.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border border-pink-500 text-pink-600 hover:bg-pink-50 transition"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/reports")}
            className="px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            View All Reports
          </button>
        </div>
      </div>
    </div>
  );
}
