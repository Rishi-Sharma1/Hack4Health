import React from "react";
import { Link,NavLink } from "react-router-dom";


function Home() {
  return (
    <>
    <div className="bg-[url('https://i.pinimg.com/736x/32/a0/72/32a072a6ab6982123b1017639e1ec08f.jpg')] bg-no-repeat bg-cover">
    <section className="text-center p-12">
      <h1 className="text-4xl font-bold text-black mb-4 bg-white bg-transparent py-1 mx-20">
        Analyze Medical Reports Effortlessly
      </h1>
      <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-black-700">
        <NavLink to={'/dashboard'}>
          Submit your first Report
        </NavLink>
      </button>
      <p className="text-xl text-black mb-6 font-extrabold py-5">
        Leverage AI to extract insights from X-rays, MRIs, CT scans, and more.
      </p>
    </section>
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
    </div>
    </>
  );
}

export default Home;
