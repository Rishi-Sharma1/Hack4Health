import React from "react";

function Cards() {
  return (
    <section className="p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-2">X-ray Analysis</h2>
        <p className="text-gray-600">
          AI-powered tools to detect fractures and anomalies.
        </p>
      </div>
      <div className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-2">MRI Insights</h2>
        <p className="text-gray-600">
          Advanced imaging analysis for neurological and tissue-based data.
        </p>
      </div>
      <div className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-2">CT Scan Reports</h2>
        <p className="text-gray-600">
          Comprehensive interpretation of CT scans using AI.
        </p>
      </div>
    </section>
  );
}

export default Cards;
