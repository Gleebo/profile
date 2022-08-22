import ProjectCard from "./proejct-card";

const projects = [
  {
    title: "Web Profile",
    repoLink: "https://github.com/Gleebo/profile",
    stack: ["TypeScript", "React", "Next", "Tailwind"],
    description:
      "This web page! I made it with TypeScript, NextJS, ReactJS and TailwindCSS. It is sort of an online CV/Portfolio.",
  },
  {
    title: "Battle Gems",
    repoLink: "https://github.com/Gleebo/terminal-app",
    stack: ["Ruby"],
    description: "A fun little project. Terminal based Turn Based RPG that I made to improve my OOP understanding. Written in Ruby."
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
