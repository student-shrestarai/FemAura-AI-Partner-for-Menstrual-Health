// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Reports() {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
// const navigate = useNavigate();
//   const userEmail = localStorage.getItem("userEmail");

//   // 1️⃣ Fetch all reports
//   useEffect(() => {
//     if (!userEmail) return;

//     fetch(`http://localhost:8080/reports/user/${userEmail}`)
//       .then((res) => res.json())
//       .then((data) => setReports(data))
//       .catch((err) => console.error(err));
//   }, [userEmail]);

//   // 2️⃣ Fetch single report
//   const fetchReportById = (id) => {
//     fetch(`http://localhost:8080/reports/${id}`)
//       .then((res) => res.json())
//       .then((data) => setSelectedReport(data))
//       .catch((err) => console.error(err));
//   };

//   // 🔙 Back to list
//   const goBack = () => {
//     setSelectedReport(null);
//   };

//   // ===========================
//   // 🔹 SINGLE REPORT VIEW
//   // ===========================
//   if (selectedReport) {
//     return (
//       <div className="min-h-screen bg-pink-50 p-8">
//         <button
//           onClick={goBack}
//           className="mb-4 text-pink-600 font-semibold"
//         >
//           ← Back to Reports
//         </button>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h1 className="text-2xl font-bold text-pink-600 mb-2">
//             FemAura Health Report
//           </h1>

//           <p className="text-gray-500 mb-4">
//             Generated on:{" "}
//             {new Date(selectedReport.generatedAt).toLocaleString()}
//           </p>

//           <pre className="whitespace-pre-wrap text-gray-800">
//             {selectedReport.reportContent}
//           </pre>
//         </div>
//       </div>
//     );
//   }

//   // ===========================
//   // 🔹 REPORT LIST VIEW
//   // ===========================
//   return (
    
//     <div className="min-h-screen bg-pink-50 p-8">

//  <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>

//         <nav className="space-x-6 text-lg">
//            <a href="#about" className="hover:text-pink-600" onClick={()=>navigate('/home')}>Home</a>
//              <a href="#about" className="hover:text-pink-600" onClick={()=>navigate('/input')}>Track Period</a>
//           <a href="#about" className="hover:text-pink-600">About</a>
//           <a href="#services" className="hover:text-pink-600">Services</a>
//           <a href="#contact" className="hover:text-pink-600">Contact</a>
//         </nav>
//       </header>


//       <h1 className="text-3xl font-bold text-pink-600 mb-6">
//         Your Health Reports
//       </h1>

//       {reports.length === 0 && (
//         <p className="text-gray-600">No reports generated yet.</p>
//       )}

//       <div className="grid gap-4">
//         {reports.map((report) => (
//           <div
//             key={report.id}
//             className="bg-white p-5 rounded-xl shadow cursor-pointer hover:bg-pink-100"
//             onClick={() => fetchReportById(report.id)}
//           >
//             <h3 className="font-semibold text-lg">
//               Generated on:{" "}
//               {new Date(report.generatedAt).toLocaleDateString()}
//             </h3>

//             <p className="text-gray-600 mt-2 line-clamp-2">
//               {report.reportContent}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Reports() {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const navigate = useNavigate();

//   const userEmail = localStorage.getItem("userEmail");

//   // =========================
//   // FETCH ALL REPORTS
//   // =========================
//   useEffect(() => {
//     if (!userEmail) return;

//     fetch(`http://localhost:8080/reports/user/${userEmail}`)
//       .then((res) => res.json())
//       .then((data) => setReports(data))
//       .catch((err) => console.error(err));
//   }, [userEmail]);

//   // =========================
//   // FETCH SINGLE REPORT
//   // =========================
//   const fetchReportById = (id) => {
//     fetch(`http://localhost:8080/reports/${id}`)
//       .then((res) => res.json())
//       .then((data) => setSelectedReport(data))
//       .catch((err) => console.error(err));
//   };

//   // =========================
//   // BACK TO LIST
//   // =========================
//   const goBack = () => {
//     setSelectedReport(null);
//   };

//   // =========================
//   // SINGLE REPORT VIEW
//   // =========================
//   if (selectedReport) {
//     const aiInsight =
//       selectedReport.reportContent.split("--- AI Insights ---")[1] ||
//       "No AI insight available.";

//     return (
//       <div className="min-h-screen bg-pink-50 p-8">
//         <button
//           onClick={goBack}
//           className="mb-6 text-pink-600 font-semibold hover:underline"
//         >
//           ← Back to Reports
//         </button>

//         <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold text-pink-600 mb-2">
//             FemAura Health Report
//           </h1>

//           <p className="text-gray-500 mb-6">
//             Generated on{" "}
//             {new Date(selectedReport.generatedAt).toLocaleString()}
//           </p>

//           {/* AI INSIGHT */}
//           <div className="bg-pink-100 border-l-4 border-pink-500 p-5 rounded-xl mb-6">
//             <h3 className="font-semibold text-pink-700 mb-2">
//               🧠 AI Insight
//             </h3>
//             <p className="text-gray-800 leading-relaxed">
//               {aiInsight}
//             </p>
//           </div>

//           {/* FULL REPORT */}
//           <div className="bg-gray-50 p-5 rounded-xl">
//             <h3 className="font-semibold text-gray-700 mb-3">
//               📄 Detailed Report
//             </h3>
//             <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
//               {selectedReport.reportContent}
//             </pre>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // =========================
//   // REPORT LIST VIEW
//   // =========================
//   return (
//     <div className="min-h-screen bg-pink-50 p-8">

//       {/* NAVBAR */}
//       <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>
//         <nav className="space-x-6 text-lg">
//           <button onClick={() => navigate("/home")} className="hover:text-pink-600">
//             Home
//           </button>
//           <button onClick={() => navigate("/input")} className="hover:text-pink-600">
//             Track Period
//           </button>
//           <button className="hover:text-pink-600">About</button>
//           <button className="hover:text-pink-600">Services</button>
//           <button className="hover:text-pink-600">Contact</button>
//         </nav>
//       </header>

//       <h1 className="text-3xl font-bold text-pink-600 mb-6">
//         Your Health Reports
//       </h1>

//       {reports.length === 0 && (
//         <p className="text-gray-600">No reports generated yet.</p>
//       )}

//       <div className="grid gap-6 md:grid-cols-2">
//         {reports.map((report) => (
//           <div
//             key={report.id}
//             onClick={() => fetchReportById(report.id)}
//             className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border-l-4 border-pink-400"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="font-semibold text-lg text-pink-600">
//                 Health Report
//               </h3>
//               <span className="text-sm text-gray-500">
//                 {new Date(report.generatedAt).toLocaleDateString()}
//               </span>
//             </div>

//             <p className="text-gray-700 mt-3 line-clamp-2">
//               {report.reportContent}
//             </p>

//             {/* OPTIONAL TAG */}
//             {report.reportContent.includes("PCOS") && (
//               <span className="inline-block mt-3 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
//                 Possible PCOS Risk
//               </span>
//             )}

//             <p className="mt-3 text-sm text-pink-500 font-medium">
//               View Full Report →
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- HELPER: Parse report text ---------------- */
const parseReport = (content) => {
  const lines = content.split("\n");
  const data = {};

  lines.forEach((line) => {
    if (line.includes(":")) {
      const [key, value] = line.split(":");
      data[key.trim()] = value.trim();
    }
  });

  return data;
};

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  /* ---------------- FETCH ALL REPORTS ---------------- */
  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:8080/reports/user/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error(err));
  }, [userEmail]);

  /* ---------------- FETCH SINGLE REPORT ---------------- */
  const fetchReportById = (id) => {
    fetch(`http://localhost:8080/reports/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedReport(data))
      .catch((err) => console.error(err));
  };

  const goBack = () => setSelectedReport(null);

  /* ===========================
     🔹 SINGLE REPORT VIEW
     =========================== */
  if (selectedReport) {
    const reportData = parseReport(selectedReport.reportContent);

    return (
      <div className="min-h-screen bg-pink-50 p-6">
        <button
          onClick={goBack}
          className="mb-4 text-pink-600 font-semibold"
        >
          ← Back to Reports
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-pink-600 mb-1">
            FemAura Health Report
          </h1>

          <p className="text-gray-500 mb-6">
            Generated on{" "}
            {new Date(selectedReport.generatedAt).toLocaleString()}
          </p>

          {/* HEALTH SUMMARY */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
               Health Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="Period Start" value={reportData["Period Start"]} />
              <InfoCard label="Period End" value={reportData["Period End"]} />
              <InfoCard label="Sleep Hours" value={reportData["Sleep Hours"]} />

              {/* STRESS */}
              <div className="bg-pink-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Stress Level</p>
                <span
                  className={`inline-block mt-1 px-4 py-1 rounded-full text-sm font-semibold ${
                    reportData["Stress Level"] === "high"
                      ? "bg-red-100 text-red-600"
                      : reportData["Stress Level"] === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {reportData["Stress Level"]}
                </span>
              </div>

              {/* SYMPTOMS */}
              <div className="bg-pink-50 p-4 rounded-xl md:col-span-2">
                <p className="text-sm text-gray-500">Symptoms</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {reportData["Symptoms"]
                    ?.replace("[", "")
                    ?.replace("]", "")
                    ?.split(",")
                    ?.map((symptom, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm"
                      >
                        {symptom.trim()}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI INSIGHTS */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold text-pink-700 mb-2">
               AI Insights
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {selectedReport.reportContent.split("--- AI Insights ---")[1]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ===========================
     🔹 REPORT LIST VIEW
     =========================== */
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      {/* HEADER */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-xl mb-6 ">
        <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>

        <nav className="space-x-6 text-lg">
          <button onClick={() => navigate("/home")} className="hover:text-pink-600">Home</button>
          <button onClick={() => navigate("/input")} className="hover:text-pink-600">TrackPeriod</button>
        </nav>
      </header>

      <h2 className="text-3xl font-bold text-pink-600 mb-6">
        Your Health Reports
      </h2>

      {reports.length === 0 && (
        <p className="text-gray-600">No reports generated yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            onClick={() => fetchReportById(report.id)}
            className="bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg text-pink-600">
               {new Date(report.generatedAt).toLocaleDateString()}
            </h3>

            <p className="text-gray-600 mt-3 line-clamp-3">
              {report.reportContent}
            </p>

            <p className="mt-4 text-sm text-pink-500 font-medium">
              View full report →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- REUSABLE INFO CARD ---------------- */
function InfoCard({ label, value }) {
  return (
    <div className="bg-pink-50 p-4 rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}
