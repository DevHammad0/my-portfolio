import React from "react";

const Projects = () => {
  return (
    <section id="project-section">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 font-bold">
        <div className="bg-gray-200 text-teal-600 w-auto h-72 rounded-lg flex justify-center items-center"><h1>Project 1</h1></div>
        <div className="bg-gray-200 text-teal-600 w-auto h-72 rounded-lg flex justify-center items-center"><h1>Project 2</h1></div>
        <div className="bg-gray-200 text-teal-600 w-auto h-72 rounded-lg flex justify-center items-center"><h1>Project 3</h1></div>
        <div className="bg-gray-200 text-teal-600 w-auto h-72 rounded-lg flex justify-center items-center"><h1>Project 4</h1></div>
      </div>
    </section>
  );
};

export default Projects;
