import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File Selected:", selectedFile);
    }};

    const handleFileUpload = () => {
        if (file) {
          console.log("Uploading file:", file);
          // Perform file upload or processing logic here
        } else {
          alert("Please select a file first.");
        }
      };



  const [text, setText] = useState("");

  // Load voices when component mounts
  useEffect(() => {
    const loadVoices = () => {
      console.log("Available voices:", window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  // Text-to-Speech Function
  const handleSpeak = (inputText) => {
    const speechText = inputText || text;
    if (!speechText.trim()) {
      alert("Please enter some text or click a prompt!");
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    console.log("Speaking:", speechText);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-16 bg-gray-900 flex flex-col space-y-4 items-center pt-4 text-white">
        <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-700 rounded-lg">
          <img src="" alt="icon" />
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-lg">
          <img src="" alt="icon" />
        </div>
        <div className="fixed bottom-6 items-center">
          <img src="" alt="User Avatar" className="rounded-full" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-grow max-w-4xl p-8 pt-20">
        <h1 className="text-4xl font-semibold">
          Hi there,{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => handleSpeak("Hi there, John")}
          >
            John
          </span>
        </h1>
        <p
          className="mt-4 text-lg font-medium cursor-pointer"
          onClick={() => handleSpeak("What would you like to know?")}
        >
          What <span className="text-purple-600">would you like to know?</span>
        </p>

        {/* Prompt Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg"
            onClick={() =>
              handleSpeak(
                "Write a to-do list for a personal project or task"
              )
            }
          >
            Write a to-do list for a personal project or task
          </button>
          <button
            className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg"
            onClick={() =>
              handleSpeak("Generate an email to reply to a job offer")
            }
          >
            Generate an email to reply to a job offer
          </button>
          <button
            className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg"
            onClick={() =>
              handleSpeak(
                "Summarize this article or text for me in one paragraph"
              )
            }
          >
            Summarize this article or text for me in one paragraph
          </button>
          <button
            className="py-4 px-6 bg-white shadow rounded-lg hover:shadow-lg"
            onClick={() =>
              handleSpeak("How does AI work in a technical capacity?")
            }
          >
            How does AI work in a technical capacity?
          </button>
        </div>

        {/* Input Section */}
        <div className="flex flex-col items-center mt-10 p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Upload your Report</h2>
          <div className="p-6">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      {file && (
        <p>
          <strong>Selected File:</strong> {file.name}
        </p>
      )}
      <button
        onClick={handleFileUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
          <textarea
            className="w-full p-4 border rounded-lg focus:outline-none"
            rows="5"
            placeholder="Enter the detail or upload the file"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => handleSpeak()}
          >
            Speak
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
