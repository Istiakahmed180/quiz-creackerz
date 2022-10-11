import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import QuizDetails from "./components/QuizDetails/QuizDetails";
import Routes from "./Layout/Routes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes></Routes>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:Id",
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`),
          element: <QuizDetails></QuizDetails>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
