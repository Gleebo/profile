import ProjectCard, { Project } from "./proejct-card";

const projects: Project[] = [
  {
    title: "Web Profile",
    repoLink: "https://github.com/Gleebo/profile",
    stack: ["TypeScript", "React", "Next", "Tailwind"],
    description:
      "This web page! I made it with TypeScript, NextJS, ReactJS and TailwindCSS. It is sort of an online CV/Portfolio.",
  },
  {
    title: "PCP2P",
    link: "https://shielded-scrubland-77362.herokuapp.com",
    repoLink: "https://github.com/Gleebo/marketplace_app",
    stack: ["Ruby", "Rails", "Tailwind", "PostgreSQL"],
    description:
      "A 2 sided marketplace web application built when I was learning web developement. Made with Ruby on Rails and PostgreSQL",
  },
  {
    title: "Battle Gems",
    repoLink: "https://github.com/Gleebo/terminal-app",
    stack: ["Ruby"],
    description:
      "A Turn Based RPG playable in terminal that I made to improve my OOP understanding. Written in Ruby.",
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  );
}
