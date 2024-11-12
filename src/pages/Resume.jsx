import React from 'react';

function Resume() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Profile Photo */}
          <img
            src="https://i.ibb.co.com/jrqPrwb/m.png" // Replace with the URL or import path for your photo
            alt="MD. RoconuZZaman Khan"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-teal-500">MD. RoconuZZaman Khan</h1>
          <p className="text-xl text-gray-600">Web Developer</p>
          <div className="mt-4 text-gray-600">
            <p>Adomdighi,Bogura,Bangladesh</p>
            <p>Email: <a href="mailto:shafalruet@gmail.com" className="text-teal-500">shafalruet@gmail.com</a></p>
            <p>LinkedIn | GitHub | +8801772176678</p>
          </div>
        </div>
  
        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Innovative and deadline-driven Web Developer with a strong foundation in Computer Science (B.Sc., 2014)
            and extensive experience in front-end development. Skilled in creating responsive and user-friendly
            interfaces with modern web development frameworks, including React, Tailwind CSS, and Bootstrap. Passionate
            about writing clean, optimized code and continually enhancing skills through LeetCode practice and industry learning.
          </p>
        </section>
  
        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <div><strong>Languages:</strong> HTML, CSS, JavaScript, SQL</div>
            <div><strong>Frameworks:</strong> React, Bootstrap, Tailwind CSS,CakePhp,Laravel</div>
            <div><strong>Tools:</strong> Git, GitHub, VS Code, NPM</div>
            <div><strong>Other:</strong> Responsive Design, RESTful APIs, Debugging, Agile</div>
            <div><strong>Design:</strong> Flexbox, Grid, Cross-browser compatibility, UI/UX</div>
            <div><strong>Authentications:</strong> Firebase Authentications</div>
            <div><strong>Database:</strong>MongoDb,Sql,SqlLite</div>
            <div><strong>Additional:</strong> ChatGpt</div>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Professional Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Web Developer (Freelance)</h3>
            <p className="text-sm text-gray-600">Jan 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developed fully responsive and interactive websites with React and Tailwind CSS.</li>
              <li>Integrated front-end designs with back-end functionality via REST APIs.</li>
              <li>Collaborated with clients to meet project specifications and timelines.</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Front-End Developer Intern - [Spring Raint It]</h3>
            <p className="text-sm text-gray-600">May 2015 - Dec 2017</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Built and maintained UI for a corporate dashboard using Bootstrap and JavaScript.</li>
              <li>Enhanced app cross-browser compatibility and participated in weekly code reviews.</li>
              <li>Resolved UI/UX issues across browsers and devices, improving user experience.</li>
            </ul>
          </div>
        </section>
  
        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Education</h2>
          <p className="text-gray-700">Bachelor of Science in Computer Science</p>
          <p className="text-sm text-gray-600">[Rajshahi University of Engineering & Technology], Rajshahi,Bangladesh | Graduated 2014</p>
        </section>
  
        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Projects</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Portfolio Website</h3>
              <p>Technologies: React, Tailwind CSS, JavaScript</p>
              <p>Built a personal portfolio website to showcase web development projects and skills with modern styling and responsive design.</p>
            </div>
            <div>
              <h3 className="font-semibold">E-commerce Product Listing Page</h3>
              <p>Technologies: HTML, CSS, Bootstrap, JavaScript</p>
              <p>Developed a fully responsive product listing page for an e-commerce site, featuring sorting and filtering options and dynamic content rendering.</p>
            </div>
            <div>
              <h3 className="font-semibold">React To-Do Application</h3>
              <p>Technologies: React, CSS</p>
              <p>Created a to-do application with React, demonstrating state management and event handling.</p>
            </div>
          </div>
        </section>
  
        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Responsive Web Design - FreeCodeCamp</li>
            <li>JavaScript Algorithms and Data Structures - FreeCodeCamp</li>
            <li>React Basics - [W3schools]</li>
          </ul>
        </section>
  
        {/* Problem-Solving Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">Problem-Solving Skills</h2>
          <p className="text-gray-700">
            <strong>LeetCode Achievements:</strong> Solved over 73 problems, focusing on algorithms and data structures, ranked in the top 20% of LeetCode solvers.
          </p>
        </section>
  
        {/* References Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">References</h2>
          <p className="text-gray-700"><a href="https://springrain.io/" className="text-orange-500 hover:text-teal-500">Spring Rain It,Dhaka,Bangladesh</a></p>
        </section>
      </div>
    );
}

export default Resume;