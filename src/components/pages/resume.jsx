import React from 'react';
import ProjectCard from '../projectCard';
import Wrapper from '../Wrapper';
import Title from '../Title';
import projectData from '../projects.json';

function Resume() {
  return (
    <div>
      <img
        src="https://vastphotos.com/files/uploads/photos/10434/huntington-beach-pier-l.jpg?v=20220712073521"
        alt="employment skills"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
      <h1>What I Bring to the Table</h1>
      <p>
       
      </p>
      {/* <button
  onClick={() => window.open('https://docs.google.com/document/d/11cTsTbToq9UAS9qI_QCEdN9FwR35b_2c/edit?usp=sharing&ouid=102268989888194378594&rtpof=true&sd=true', '_blank')}
  className="btn btn-dark" 
  id="resume-btn"
>
  My Resume
</button> */}

      {/* <Title>MY PROJECTS</Title>
      <button onClick={() => window.open('https://github.com/yasfeh12', '_blank')}
      className="btn btn-dark" 
       id="resume-btn"
      >
        My portfolio
      </button>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          link={(
            <button
              onClick={() => window.open(project.link, '_blank')}
              className="btn btn-dark"
              id="project-btn"
            >
              {project.name} Project
            </button>
          )}
        />
      ))} */}
    </div>
  );
}

export default Resume;
