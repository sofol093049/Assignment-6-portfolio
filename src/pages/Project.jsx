import React from 'react';

function Project() {
    const projectList = [
        {
          name: 'Online Programming School',
          description: 'A React web application that helps users track their tasks.',
          link: 'https://react-assignment-three-copy-copy.vercel.app/', // Replace with live demo or GitHub link
          techStack: ['React', 'Tailwind CSS', 'Node.js','Firebase Authentication'],
        },
        {
          name: ' Online Food Shop',
          description: 'An e-commerce website built with React and MongoDB.',
          link: 'https://sofol093049.github.io/Assignment-Two-Tailwind-and-Js-API-/',
          techStack: ['React', 'Tailwind CSS', 'Node.js','Firebase Authentication'],
        },
        {
          name: 'Online Book Shop',
          description: 'A portfolio website that showcases my work as a developer.',
          link: 'https://sloppy-care.surge.sh/',
          techStack: ['React', 'Tailwind CSS', 'Node.js','Firebase Authentication'],
        },
      ];
    return (
        <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-teal-500 mb-8">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="card shadow-lg bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
            <p className="mt-4 text-gray-600">{project.description}</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">Technologies:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-teal-500 hover:text-teal-700 font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Project;