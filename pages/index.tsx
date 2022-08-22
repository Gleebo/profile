import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import List from "../components/list";
import NavItem from "../components/nav-item";
import Projects from "../components/projects";
import Section from "../components/section";
import SkillsTable from "../components/skills-table";

const title = `Gleb's profile`;

const Home: NextPage = () => {
  const navItems = [
    { name: "Skills", symbol: "Sk", number: 1, src: "#skills" },
    { name: "Education", symbol: "Ed", number: 2, src: "#education" },
    { name: "Experience", symbol: "Xp", number: 3, src: "#experience" },
    { name: "Projects", symbol: "Pr", number: 4, src: "#projects" },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-slate-800 text-yellow-100">
        <header className="container mx-auto min-h-[75vh] flex justify-center align-middle">
          <div className="w-fit h-fit my-auto">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2">
              Hi, I am Gleb
            </h1>
            <p className="sm:text-lg md:text-xl lg:text-2xl">
              I am a software developer
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
          <Section id="education" title="Education">
            <Card
              title="Professional Year"
              subtitle="Performance Education"
              location="Sydney"
              period="Aug 2021"
            >
              <List>
                <li>Studied Australian work culture</li>
                <li>
                  Improved communication and presentation skills through
                  numerous presentations and group tasks
                </li>
                <li>Successfully finished work placement and got hired</li>
              </List>
            </Card>
            <Card
              title="Master of IT"
              subtitle="University of Sydney"
              location="Sydney"
              period="Aug 2020"
            >
              <List>
                <li>
                  Obtained High Distinction Software Quality Engineering,
                  Complex systems, Web Development
                </li>
                <li>
                  Obtained Distinction in Mobile Application Development,
                  Project Management
                </li>
                <li>
                  Finished a capstone project in a group of 5 and obtained High
                  Distinction
                </li>
              </List>
            </Card>
            <Card
              title="Bachelor of IT"
              subtitle="James Cook University"
              location="Singapore"
              period="Dec 2017"
            >
              <List>
                <li>
                  Obtained High Distinction Game Design, 3D Modeling and
                  Animation, Game Development Techniques
                </li>
                <li>
                  Successfully developed a visual novel game in Unity with a
                  group of 6 and obtained High Distinction
                </li>
              </List>
            </Card>
          </Section>
          <Section id="experience" title="Experience">
            <Card
              title="Software Developer"
              subtitle="Genius IT Solutions"
              location="Sydney"
              period="May 2021 - Present"
            >
              <List>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
              </List>
            </Card>
            <Card
              title="Peer Mentor"
              subtitle="University of Sydney"
              location="Sydney"
              period="Feb 2020 - Aug 2020"
            >
              <List>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
                <li>
                  Learned new tach stack, developed and integrated my first
                  feature in a major facility management software in just 1
                  month
                </li>
              </List>
            </Card>
          </Section>
          <Section id="projects" title="Projects">
            <Projects />
          </Section>
        </main>
      </div>
    </>
  );
};

export default Home;
