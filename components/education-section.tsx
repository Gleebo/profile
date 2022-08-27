import Card from "./card";
import List from "./list";

export default function EducationSection() {
  return (
    <>
      <Card
        title="Professional Year"
        subtitle="Performance Education"
        location="Sydney"
        period="Aug 2021"
      >
        <List>
          <li>Studied Australian work culture</li>
          <li>
            Improved communication and presentation skills through numerous
            presentations and group tasks
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
            Obtained High Distinction Software Quality Engineering, Complex
            systems, Web Development
          </li>
          <li>
            Obtained Distinction in Mobile Application Development, Project
            Management
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
            Obtained High Distinction Game Design, 3D Modeling and Animation,
            Game Development Techniques
          </li>
          <li>
            Successfully developed a visual novel game in Unity with a group of
            6 and obtained High Distinction
          </li>
        </List>
      </Card>
    </>
  );
}
