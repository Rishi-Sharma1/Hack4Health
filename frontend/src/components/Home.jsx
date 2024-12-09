import React from "react";
import { Link,NavLink } from "react-router-dom";
import Header from "./Header";
import './Style.css';

function Home() {
  return (
    <>
    <Header/>
    <div className="bg-white bg-no-repeat bg-cover mx-12">
    <section className="text-center p-12 mx-6 my-6">
      <h1 className="text-4xl font-bold text-black mb-4 bg-white bg-transparent mx-20">
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
    <section className="p-12 grid grid-cols-1 md:grid-cols-3 gap-2">
      <div className="relative p-6 bg-gradient-to-r from-pink-500 to-blue-500 vertical-stripes rounded-3xl">
      <div className="relative">
      <h2 className="text-xl font-bold mb-2">X-ray Analysis</h2>
      <p className="text-gray-900">
        AI-powered tools to detect fractures and anomalies.
      </p>
      </div>
    </div>
      <div className="p-6 bg-white shadow-md bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl">
        <h2 className="text-xl font-bold mb-2">MRI Insights</h2>
        <p className="text-gray-900">
          Advanced imaging analysis for neurological and tissue-based data.
        </p>
      </div>
      <div className="p-6 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl">
        <h2 className="text-xl font-bold mb-2">CT Scan Reports</h2>
        <p className="text-gray-900 ">
          Comprehensive interpretation of CT scans using AI.
        </p>
      </div>
    </section>
    </div>
    </>
  );
}

export default Home;
