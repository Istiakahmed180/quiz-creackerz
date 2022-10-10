import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizs = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 my-12">
        {quizs.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
