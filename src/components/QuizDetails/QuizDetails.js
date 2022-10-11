import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizInfo from "../QuizInfo/QuizInfo";

const QuizDetails = () => {
  const quizTopic = useLoaderData();
  const { name, questions } = quizTopic.data;
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold text-[#4255FF] mb-4">
          Quiz Of {name}
        </h1>
      </div>
      <div>
        {questions.map((quiz) => (
          <QuizInfo quiz={quiz}></QuizInfo>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
