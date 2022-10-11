import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizInfo = ({ quiz }) => {
  const { correctAnswer } = quiz;
  const showToastMessage = () => {
    toast.success(`${correctAnswer}`, { autoClose: 3000 });
  };

  return (
    <div>
      <div className="mb-28 bg-[#9496c2] py-12 lg:w-3/4 w-96  mx-auto px-8 rounded-2xl">
        <div>
          <div className="flex justify-between">
            <h3 className="my-4 mb-5 text-lg font-medium text-gray-900 dark:text-white">
              Quiz: {quiz.question}
            </h3>
            <svg
              onClick={showToastMessage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <ToastContainer></ToastContainer>
        </div>
        <ul className="grid gap-6 mx-auto md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required=""
            ></input>
            <label
              htmlFor="hosting-small"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#d5d9ff] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg">{quiz.options[0]}</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="hidden peer"
            ></input>
            <label
              htmlFor="hosting-big"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#d5d9ff] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg ">{quiz.options[1]}</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="hidden peer"
            ></input>
            <label
              htmlFor="hosting-big"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#d5d9ff] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg ">{quiz.options[2]}</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="hidden peer"
            ></input>
            <label
              htmlFor="hosting-big"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#d5d9ff] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg ">{quiz.options[3]}</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuizInfo;
