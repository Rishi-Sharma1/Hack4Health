import React from "react";

function About() {
  return (
    <div className="bg-gray-200 min-h-screen p-8 bg-[url('https://i.pinimg.com/736x/a6/ed/7d/a6ed7d9c03e705adb64df09ba6e07afe.jpg')] bg-no-repeat bg-cover">
      {/* Introduction Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-8" style={{ backgroundColor: '#f9f9f9' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Introduction to Doctor AI Report Expert
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Doctor AI Report Expert is a specialized AI tool designed to interpret and analyze
          medical and X-ray reports. Its core purpose is to assist in the preliminary review
          of these documents by highlighting significant findings, identifying abnormalities,
          and suggesting areas that may require further medical evaluation.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          This tool is built with advanced AI algorithms capable of understanding complex medical
          terminology and extracting key information from reports. For instance, when analyzing
          an X-ray report, it can indicate the presence of unusual densities that might suggest
          fractures, tumors, or infections.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Another scenario could involve the analysis of a blood test report, where it identifies
          markers that are outside the normal range, suggesting potential health issues like
          anemia or diabetes. Powered by ChatGPT-4o.
        </p>
      </section>

      {/* Main Functions Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Main Functions of Doctor AI Report Expert
        </h2>

        {/* Function 1 */}
        <div className="flex space-x-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 before:bg-[url('https://www.yeschat.ai/images/svg/example.svg')]">
              Interpretation of X-ray Reports
            </h3>
            <p className="text-gray-700">
              <strong>Example:</strong> Identifying a fracture in a wrist X-ray report.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Scenario:</strong> A user uploads an X-ray report of the wrist, and Doctor AI
              Report Expert highlights the presence of a fracture, suggesting the need for orthopedic
              consultation.
            </p>
          </div>

          {/* Function 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Analysis of Blood Test Results
            </h3>
            <p className="text-gray-700">
              <strong>Example:</strong> Highlighting elevated blood sugar levels.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Scenario:</strong> Upon reviewing a blood test report, the tool points out
              elevated glucose levels, hinting at the possibility of diabetes and advising follow-up
              with an endocrinologist.
            </p>
          </div>

          {/* Function 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Identification of Abnormalities in Medical Reports
            </h3>
            <p className="text-gray-700">
              <strong>Example:</strong> Detecting abnormalities in a chest X-ray.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Scenario:</strong> The tool analyzes a chest X-ray report and flags potential
              signs of pneumonia, recommending further evaluation by a healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

