import type { NextPage } from "next";
import Head from "next/head";
import EducationSection from "../components/education-section";
import ExperienceSection from "../components/experience-section";
import NavItem from "../components/nav-item";
import Projects from "../components/projects";
import Section from "../components/section";
import SkillsTable from "../components/skills-table";

const title = `Gleb's profile`;

const Home: NextPage = () => {
  const navItems = [
    { name: "Skills", symbol: "Sk", number: 1, src: "#skills" },
    { name: "Projects", symbol: "Pr", number: 4, src: "#projects" },
    { name: "Experience", symbol: "Xp", number: 3, src: "#experience" },
    { name: "Education", symbol: "Ed", number: 2, src: "#education" },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon-16x16.png" type="image/png" />
      </Head>
      <div className="min-h-screen bg-slate-800 text-yellow-100">
        <header className="container mx-auto min-h-[75vh] flex justify-center align-middle">
          <div className="w-fit h-fit my-auto">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2">
              Hi, I am Gleb
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[75ch] pl-2">
              I am a software developer who loves solving problems. I currently
              work at Genius IT Solutions where I develop and maintain a major
              facility management software. I have a keen interest in JavaScript
              language, frameworks and libraries. I also love fantasy novels and
              just in general everything fantasy related. Scroll down for more
              info on my experience, projects, skills and education.
            </p>
          </div>
        </header>
        <nav className="p-2 sticky top-0 z-50 bg-slate-800">
          <ul className="flex space-x-1 xl:space-x-2 w-fit mx-auto">
            {navItems.map((item) => (
              <NavItem
                name={item.name}
                symbol={item.symbol}
                number={item.number}
                src={item.src}
                key={item.number}
              />
            ))}
          </ul>
        </nav>
        <main className="container mx-auto mt-20">
          <Section id="skills" title="Skills">
            <SkillsTable />
          </Section>
          <Section id="projects" title="Projects">
            <Projects />
          </Section>
          <Section id="experience" title="Experience">
            <ExperienceSection />
          </Section>
          <Section id="education" title="Education">
            <EducationSection />
          </Section>
        </main>
      </div>
    </>
  );
};

export default Home;
