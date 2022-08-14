import type { NextPage } from "next";
import Head from "next/head";
import EducationCard from "../components/education-card";
import NavItem from "../components/nav-item";
import Section from "../components/section";
import SkillsTable from "../components/skills-table";

const title = `Gleb's profile`;

const Home: NextPage = () => {
  const navItems = [
    { name: "Skills", symbol: "Sk", number: 1 },
    { name: "Education", symbol: "Ed", number: 2 },
    { name: "Experience", symbol: "Xp", number: 3 },
    { name: "Projects", symbol: "Pr", number: 4 },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-slate-800 text-yellow-100">
        <header className="sticky top-0 z-50 bg-slate-800">
          <nav className="p-1">
            <ul className="flex space-x-1 xl:space-x-2 w-fit mx-auto">
              {navItems.map((item) => (
                <NavItem
                  name={item.name}
                  symbol={item.symbol}
                  number={item.number}
                  key={item.number}
                />
              ))}
            </ul>
          </nav>
        </header>
        <div className="container mx-auto">
          <main>
            <Section id="skills" title="Skills">
              <SkillsTable />
            </Section>
            <Section id="education" title="Education">
              <EducationCard
                degree="Professional Year"
                school="Performance Education"
                location="Sydney"
                graduation="Aug 2021"
              >
                <ul className="list-disc list-inside pl-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  <li>Did Something</li>
                  <li>Did Something</li>
                  <li>Did Something</li>
                  <li>Did Something</li>
                </ul>
              </EducationCard>
            </Section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
