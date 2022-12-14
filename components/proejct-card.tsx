import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export type Project = {
  title: string;
  description: string;
  link?: string;
  repoLink?: string;
  stack: string[];
};

type Props = {
  project: Project;
  children?: React.ReactNode;
};

export default function ProjectCard({ project, children }: Props) {
  return (
    <div className="border-2 border-yellow-100 rounded">
      <header>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl border-b border-yellow-100 p-2 flex justify-between">
          <a href={project.link} className="hover:underline">
            <span>{project.title}</span>
            {project.link && <FontAwesomeIcon icon={faLink} />}
          </a>
          {project.repoLink && (
            <a href={project.repoLink} className="hover:underline">
              <span>GitHub</span>
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
        </h2>
        <h3 className="flex p-2 border-b border-yellow-100 text-sm md:text-base lg:text-lg xl:text-xl">
          {project.stack.map((tech) => (
            <span
              className="bg-yellow-100 text-slate-800 rounded-r-full rounded-l-full px-2 py-1 mr-1"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </h3>
      </header>
      <main>
        <p className="md:text-lg lg:text-xl xl:text-2xl p-2 max-w-[75ch]">
          {project.description}
        </p>
      </main>
    </div>
  );
}
