import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizs = useLoaderData();
  return (
    <div>
      <Header></Header>
      {quizs.data.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Home;
