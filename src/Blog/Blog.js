import React from "react";

const Blog = () => {
  return (
    <div className="mt-28 sm:h-screen h-screen md:h-screen">
      <div>
        <h1 className="text-xl text-center">
          Question 1: What are the different ways to manage a state in a React
          application?
        </h1>

        <p className="text-slate-500 text-center ml-4">
          Answer: Every React component has a built-in state. This state is an
          object which stores the property values that belong to a component.
          State is able to keep data from different components in-sync because
          each state update re-renders all relevant components.The built-in way
          that React provides for setting component states is by using
          setState() and adding “local state” to a class. There are several
          other ways to manage state​s in React.The built-in way that React
          provides for setting component states is by using setState() and
          adding “local state” to a class. There are several other ways to
          manage state​s in React.
        </p>

        <h1 className="text-xl text-center mt-12">
          Question 2: How does prototypical inheritance work?
        </h1>
        <p className="text-slate-500 text-center ml-4">
          Answer: JavaScript is a prototype-based, Object Oriented programming
          language. After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied. Sharing amid objects makes for easy inheritance
          of structure (data fields), behavior (functions / methods), and state
          (data values). JavaScript is the most common of the prototype-capable
          languages, and its capabilities are relatively unique.
        </p>

        <h1 className="text-xl text-center mt-12">
          Question 3:What is a unit test? Why should we write unit tests?
        </h1>
        <p className="text-slate-500 text-center ml-4">
          Answer:JavaScript is a prototype-based, Object Oriented programming
          language. After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied. Sharing amid objects makes for easy inheritance
          of structure (data fields), behavior (functions / methods), and state
          (data values). JavaScript is the most common of the prototype-capable
          languages, and its capabilities are relatively unique.{" "}
        </p>

        <h1 className="text-xl text-center mt-12">
          Question 4: React vs. Angular vs. Vue?
        </h1>
        <p className="text-slate-500 text-center ml-4">
          Answer: Angular, developed by Google, was first released in 2010,
          making it the oldest of the lot. It is a TypeScript-based JavaScript
          framework. A substantial shift occurred in 2016 on the release of
          Angular 2 (and the dropping of the “JS” from the original name –
          AngularJS). Angular 2+ is known as just Angular. Although AngularJS
          (version 1) still gets updates, we will focus the discussion on
          Angular. Vue, also known as Vue.js, is the youngest member of the
          group. It was developed by ex-Google employee Evan You in 2014. Over
          the last several years, Vue has seen a substantial shift in
          popularity, even though it doesn’t have the backing of a large
          company.
        </p>
      </div>
    </div>
  );
};

export default Blog;
