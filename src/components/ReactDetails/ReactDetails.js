import React from "react";

const ReactDetails = ({ quiz }) => {
  console.log(quiz);
  return (
    <div>
      <div className="mb-28 bg-[#9496c2] py-12 lg:w-1/2 w-96  mx-auto px-8 rounded-2xl">
        <div className="flex justify-center">
          <h3 className="my-4 mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Quiz: {quiz.question}
          </h3>
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

export default ReactDetails;
