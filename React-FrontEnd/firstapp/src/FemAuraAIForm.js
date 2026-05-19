import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function FemAuraAIForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    sleepHours: "",
    stress: "",
    symptoms: [],
    notes: "",
    userEmail:""
  });

  const symptomsList = [
    "Cramps",
    "Headache",
    "Bloating",
    "Mood Swings",
    "Acne",
    "Back Pain",
    "Fatigue",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSymptomChange = (symptom) => {
    setFormData((prev) => {
      const updated = prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom];
      return { ...prev, symptoms: updated };
    });
  };

  useEffect(() => {
  const email = localStorage.getItem("userEmail");

  if (email) {
    setFormData((prev) => ({
      ...prev,
      userEmail: email
    }));
  }
}, []);

 

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/input/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const result = await response.text(); // your Spring Boot returns a String report
    console.log("Server Response:", result);
    alert("Data submitted successfully!");

    navigate("/report", { state: { reportData: result } });
  } catch (error) {
    console.error("Error submitting data:", error);
    alert("Failed to submit data. See console for details.");
  }
};


  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* -------- NAVBAR -------- */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>

        <nav className="space-x-6 text-lg">
           <a href="#about" className="hover:text-pink-600" onClick={()=>navigate('/home')}>Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>
      </header>

      {/* -------- FORM SECTION -------- */}
      <div className="flex justify-center items-center flex-grow p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 max-w-lg w-full border border-pink-200"
        >
          <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
            FemAura – Health Data Input
          </h1>

          {/* Period Start Date */}
          <label className="block text-gray-700 font-medium mb-2">
            Period Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          {/* Period End Date */}
          <label className="block text-gray-700 font-medium mb-2">
            Period End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          {/* Sleep Hours */}
          <label className="block text-gray-700 font-medium mb-2">
            Average Sleep Hours
          </label>
          <input
            type="number"
            name="sleepHours"
            placeholder="e.g., 7"
            value={formData.sleepHours}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          {/* Stress Level */}
          <label className="block text-gray-700 font-medium mb-2">
            Stress Level
          </label>
          <select
            name="stress"
            value={formData.stress}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-4"
            required
          >
            <option value="">Select Stress Level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Symptoms */}
          <label className="block text-gray-700 font-medium mb-3">
            Symptoms
          </label>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {symptomsList.map((symptom) => (
              <label key={symptom} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.symptoms.includes(symptom)}
                  onChange={() => handleSymptomChange(symptom)}
                />
                <span>{symptom}</span>
              </label>
            ))}
          </div>

          {/* Notes */}
          <label className="block text-gray-700 font-medium mb-2">
            Additional Notes (optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Anything you'd like to share?"
            className="w-full p-3 border rounded-xl mb-6"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
         
          
          
          
          >
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
}
