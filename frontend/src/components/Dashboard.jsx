import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-16 bg-gray-900 flex flex-col space-y-4 items-center pt-4 text-white">
        <div className="w-10 h-10 bg-gray-700 rounded-lg">
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-lg">
            <img src="" alt="image"/>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-lg">
            <img src="" alt="image"/>
        </div>
        <div className="fixed bottom-6 items-center">
        <img
          src=""
          alt="User Avatar"
          className="rounded-full"
        />
      </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-grow max-w-4xl p-8 pt-20">
        <h1 className="text-4xl font-semibold">
          Hi there, <span className="text-purple-600">John</span>
        </h1>
        <p className="mt-4 text-lg font-medium">
          What <span className="text-purple-600">would like to know?</span>
        </p>

        {/* Prompt Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg">
            Write a to-do list for a personal project or task
          </button>
          <button className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg">
            Generate an email to reply to a job offer
          </button>
          <button className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg">
            Summarize this article or text for me in one paragraph
          </button>
          <button className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg">
            How does AI work in a technical capacity
          </button>
        </div>

        {/* Input Section */}
        <div className="mt-10">
          <label htmlFor="userQuery" className="block text-gray-600 text-lg">
            Ask whatever you want...
          </label>
          <div className="mt-2 flex items-center bg-white shadow rounded-lg p-2">
            <input
              type="text"
              id="userQuery"
              placeholder="Type your question here..."
              className="flex-grow border-none outline-none px-4 text-gray-700"
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Submit
            </button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;