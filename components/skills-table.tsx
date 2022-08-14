import SkillCell from "./skill-cell";

const skills = [
  {name: 'HTML', imgSrc: '/icons8-html-5.svg'},
  {name: 'CSS', imgSrc: '/icons8-css3.svg'},
  {name: 'JavaScript', imgSrc: '/icons8-javascript.svg'},
  {name: 'PHP', imgSrc: '/icons8-php-logo.svg'},
  {name: 'Laravel', imgSrc: '/icons8-laravel.svg'},
  {name: 'Java', imgSrc: '/icons8-java.svg'},
  {name: 'Node', imgSrc: '/icons8-nodejs.svg'},
  {name: 'React', imgSrc: '/icons8-react.svg'},
  {name: 'Vue', imgSrc: '/icons8-vuejs.svg'},
  {name: 'Ruby', imgSrc: '/icons8-ruby.svg'},
  {name: 'Rails', imgSrc: '/icons8-ruby-on-rails.svg'},
  {name: 'Bootstrap', imgSrc: '/icons8-bootstrap.svg'},
  {name: 'Tailwind', imgSrc: '/icons8-tailwind-css.svg'},
  {name: 'PostgreSQL', imgSrc: '/icons8-postgresql.svg'},
  {name: 'MongoDB', imgSrc: '/icons8-mongodb.svg'},
  {name: 'Git', imgSrc: '/icons8-git.svg'},
]

export default function SkillsTable() {
  return (
  <ul className="flex flex-wrap text-slate-800 justify-center">
    {
      skills.map((skill, i) => (
        <SkillCell number={i+1} name={skill.name} imgSrc={skill.imgSrc} key={skill.name}/>
      ))
    }
  </ul>
  )
}
