import React, { useState } from "react";
import image from "../assets/help.jpg";

const HelpDesk = () => {
  const [showContainer, setShowContainer] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const questionsPerPage = 4;
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
      id: 3,
      question: "Question 3?",
      answer: "Answer to question 3",
    },
    {
      id: 4,
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
  ];

  const handleLogoClick = () => {
    setShowContainer(!showContainer);
  };

  const handleQuestionClick = (id) => {
    setActiveQuestionId(id === activeQuestionId ? null : id);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    setActiveQuestionId(null); // Reset the active question when loading more
  };

  const startIndex = currentPage * questionsPerPage;
  const displayedQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  return (
    <div className="flex justify-center items-center relative">
      <div>
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
        <div className="absolute top--20 right-0 bg-white p-4 rounded-lg shadow-lg max-w-xs w-full">
          {displayedQuestions.map((question) => (
            <div key={question.id} className="mb-4">
              <button
                className="question-button text-left w-full py-2 border-b border-gray-200"
                onClick={() => handleQuestionClick(question.id)}
              >
                {question.question}
              </button>
              {activeQuestionId === question.id && (
                <div className="mt-2 text-gray-700">{question.answer}</div>
              )}
            </div>
          ))}
          {startIndex + questionsPerPage < questions.length && (
            <button
              className="load-more-button text-blue-500 mt-4"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
          <button
            className="close-button absolute top-2 right-2"
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
