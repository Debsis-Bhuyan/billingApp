import React, { useState } from "react";
import image from "../assets/help.jpg";

const HelpDesk = () => {
  const [showContainer, setShowContainer] = useState(false);
  const questions = [
    {
      id: 1,
      question: "Question 1?",
      answer: "Answer to question 1",
    },
    {
      id: 2,
      question: "Question 2?",
      answer: "Answer to question 2",
    },
    {
      id: 4,
      question: "Question 3?",
      answer: "Answer to question 3",
    },
    {
      id: 3,
      question: "Question 4?",
      answer: "Answer to question 4",
    },
    {
      id: 5,
      question: "Question 5?",
      answer: "Answer to question 5",
    },
    {
      id: 6,
      question: "Question 6?",
      answer: "Answer to question 6",
    },
    {
      id: 7,
      question: "Question 7?",
      answer: "Answer to question 7",
    },
    {
      id: 8,
      question: "Question 8?",
      answer: "Answer to question 8",
    },
    {
      id: 9,
      question: "Question 9?",
      answer: "Answer to question 9",
    },
    {
      id: 10,
      question: "Question 10?",
      answer: "Answer to question 10",
    },
    {
      id: 11,
      question: "Question 11?",
      answer: "Answer to question 11",
    },
    {
      id: 12,
      question: "Question 12?",
      answer: "Answer to question 12",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleLogoClick = () => {
    setShowContainer(!showContainer);
    setSelectedQuestion(null);
  };

  const handleNextQuestions = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 5);
  };

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div className="flex justify-center items-center">
      <div >
        <div>
          <h2>Click this help image to get data related to help</h2>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="Profile Logo"
            className="w-24 h-auto cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
      </div>
      {showContainer && (
        <div className="absolute bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {questions.slice(startIndex, endIndex).map((question, index) => (
            <div key={question.id} className="mb-4 border-b border-gray-200">
              <button
                className={`question-button focus:outline-none text-left w-full py-2 hover:bg-gray-100`}
                onClick={() => handleQuestionClick(startIndex + index)}
              >
                {question.question}
              </button>
              {selectedQuestion === startIndex + index && (
                <div className="mt-2 text-gray-700">{question.answer}</div>
              )}
            </div>
          ))}
          {endIndex < questions.length && (
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleNextQuestions}
            >
              Load More
            </button>
          )}
          <button
            className="close-button absolute top-0 right-0 mt-2 mr-2"
            onClick={handleLogoClick}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default HelpDesk;
