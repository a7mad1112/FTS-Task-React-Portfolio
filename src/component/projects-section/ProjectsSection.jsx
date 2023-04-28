import React, { useContext } from 'react'
import { languageContext } from '../Context/languageContext';
import tastyImg from "../../imgs/tasty-treat.jpg";
import electroImg from "../../imgs/electro.jpg";
import rentImg from "../../imgs/rent-car.jpg";
import prideImg from "../../imgs/pride.jpg";
import Project from './Project';

import './projects.css'

const projects = [
  {
    img: tastyImg,
    repoLink: 'https://github.com/a7mad1112/Tasty-Treat',
    deploymentLink: "https://a7mad1112.github.io/tasty-treat/",
    name: "Tasty Treat",
    key: 1,
  },
  {
    img: electroImg,
    repoLink: 'https://github.com/a7mad1112/Electro-Design',
    deploymentLink: 'https://a7mad1112.github.io/Electro-Design/',
    name: "Electro",
    key: 2,
  },
  {
    img: rentImg,
    repoLink: 'https://github.com/a7mad1112/rent-car',
    deploymentLink: 'https://a7mad1112.github.io/rent-car/',
    name: "Rent Car",
    key: 3,
  },
  {
    img: prideImg,
    repoLink: 'https://github.com/a7mad1112/E-Commerce-Template-React-Project-',
    deploymentLink: 'https://a7mad1112.github.io/E-Commerce-Template-React-Project-/',
    name: "Pride",
    key: 4,
  },
];

const ProjectsSection = () => {
  const { lang } = useContext(languageContext)
  return (
    <section id="projects-section" className="projects-section py-5 ">
      <div className="container">
        <div className="text-center text-white mb-4">
          <h2 className=" fw-bold fs-3">{lang === 'en' ? 'Projects' : 'المشاريع'}</h2>
        </div>
        <div className="projects-parent">
          {projects.map((project) => (
            <Project key={project.key} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection