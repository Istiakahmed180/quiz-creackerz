import React from "react";

const Blog = () => {
  return (
    <div>
      <section class="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p class="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                <span className="font-semibold text-[#4255FF]">
                  Qustion No:1:-
                </span>
                What is the purpose of react router?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  React Router is a standard library for routing in React. It
                  enables the navigation among views of various components in a
                  React Application, allows changing the browser URL, and keeps
                  the UI in sync with the URL. React Router is a fully-featured
                  client and server-side routing library for React, a JavaScript
                  library for building user interfaces. React Router runs
                  anywhere React runs; on the web, on the server with node.js,
                  and on React Native.
                </p>
              </div>
            </details>
            <details open="">
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                <span className="font-semibold text-[#4255FF]">
                  Qustion No:2:-
                </span>
                How context api works in react?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.React. createContext() is all you need. It returns
                  a consumer and a provider. Provider is a component that as
                  it's names suggests provides the state to its children. It
                  will hold the "store" and be the parent of all the components
                  that might need that store. Consumer as it so happens is a
                  component that consumes and uses the state
                </p>
              </div>
            </details>
            <details open="">
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                <span className="font-semibold text-[#4255FF]">
                  Qustion No:3:-
                </span>
                What is useref in react?
              </summary>
              <div class="px-4 pb-4 space-y-2">
                <p>
                  Essentially, useRef is like a “box” that can hold a mutable
                  value in its .current property. You might be familiar with
                  refs primarily as a way to access the DOM. If you pass a ref
                  object to React with useRef. React will set its .current
                  property to the corresponding DOM node whenever that node
                  changes.The useRef hook is the new addition in React 16.8.
                  Before proceeding to this article there is a prerequisite to
                  know about the ref in react. The useRef is a hook that allows
                  to directly create a reference to the DOM element in the
                  functional component.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
