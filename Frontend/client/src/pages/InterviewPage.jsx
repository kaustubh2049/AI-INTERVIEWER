
import React from "react";
import { useEffect } from "react";  

const InterviewPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Interview</h1>
      <p className="mb-4 text-center">
        You are interviewing for the role of{" "}
        <span className="font-semibold">
          {localStorage.getItem("interviewRole")}
        </span>
      </p>
      {/* Interview questions and logic will go here */}
    </div>
  );
};
export default InterviewPage;
