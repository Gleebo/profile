import ProjectCard from "./proejct-card";

const projects = [
  {
    title: "Web Profile",
    repoLink: "https://github.com/Gleebo/profile",
    stack: ["TypeScript", "React", "Next", "Tailwind"],
    description: 'This web page! I made it with TypeScript, NextJS, ReactJS and TailwindCSS. It is sort of an online CV/Portfolio.'
  },
];

export default function Projects() {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title}></ProjectCard>
      ))}
    </>
  );
}
