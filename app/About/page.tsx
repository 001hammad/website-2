import React from "react";

const About = () => {
  return (
    <main className="text-center text-balance">
      <h1>
        {" "}
        <b> Welcome To About Page</b>
      </h1>
      <p className="text-gray-700 text-sm p-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
        provident, quos officiis nisi voluptatem nemo cum unde minima nam facere
        dolores enim voluptatum itaque nihil eligendi magni labore, recusandae
        commodi!
      </p>
      <ul>
        <li className="text-gray-700">
          My name is Hammad
        </li>
        <li className="text-gray-700">
          My Age is 18
        </li>
        <li className="text-gray-700">
          I am a Wed Developer
        </li>
      </ul>
    </main>
  );
};

export default About;
