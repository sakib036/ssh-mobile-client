import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components.</p>
                    <h3> Different ways to handle state in React applications :</h3>
                    <h3>URL:</h3>
                    <p>We can use URL to store some data The id of the current item, being viewed,Filter parameters,Pagination offset and limit,Sorting data.</p>
                    <p>Keeping such data in the URL allows users to share deep links with others.t is recommended to avoid storing such information in the app's state to avoid the URL in our app getting out of sync.Update the URL as required when the settings change.We do not need to store the id in a state or pass it as props to the ProductDetails component instead, it can be fetched using useParams(). </p>
                    <h3>Web Storage:</h3>
                    <p>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user's shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.</p>
                    <h3>Local State:</h3>
                    <p>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>

                    <h3>Lifted State:</h3>
                    <p>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two-step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.</p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding. Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using</p>
                    <p>All the objects in the JavaScript like Array, Boolean, Date etc all inherit properties and methods from their prototype.mply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <p>Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>

                    <h3>How unit tests work</h3>
                    <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
                    <p>A unit can be almost anything you want it to be -- a line of code, a method, or a class. Generally though, smaller is better. Smaller tests give you a much more granular view of how your code is performing. There is also the practical aspect that when you test very small units, your tests can be run fast; like a thousand tests in a second fast.Small tests also have the benefit of making it harder to cross systems -- from code into a database, or 3rd party system. Strictly speaking, there isn't anything wrong with crossing systems, but there are consequences like gradually slowing your tests. A few years ago I worked for a company where this crept into the test set, eventually we had thousands of tests, set up and tear down scrips for the database, and also a test suite that took hours to run.</p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we've seen a growth of interest in a third player called Vue.js.If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>

                    <h3>Angular:</h3>
                    <p>
                    Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name -AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React. Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                    </p>

                    <h3>Vue:</h3>
                    <p>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.Further reading: Vue.js Tutorial for Beginner Developers. When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap. Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>

                    <h3>React:</h3>
                    <p>React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior. React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;