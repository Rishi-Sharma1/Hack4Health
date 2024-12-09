import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="text-center p-12 bg-gradient-to-r from-blue-50 to-blue-100" style={{ backgroundColor: '#f0f0f0' }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Analyze Medical Reports Effortlessly
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Leverage AI to extract insights from X-rays, MRIs, CT scans, and more.
      </p>
      <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-black-700">
        <NavLink to={"signup"}>
            Get Started
        </NavLink>
      </button>
    </section>
  );
}

export default Hero;
