import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactDetails from "../ReactDetails/ReactDetails";

const QuizDetails = () => {
  const quizTopic = useLoaderData();
  const { name, logo, total, id, questions } = quizTopic.data;
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold text-[#4255FF] mb-4">
          Quiz Of {name}
        </h1>
      </div>
      <div>
        {questions.map((quiz) => (
          <ReactDetails quiz={quiz}></ReactDetails>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
