import Card from "./card";
import List from "./list";

export default function ExperienceSection() {
  return (
    <>
      <Card
        title="Software Developer"
        subtitle="Genius IT Solutions"
        location="Sydney"
        period="May 2021 - Present"
      >
        <List>
          <li>
            Learned new tech stack, developed and integrated my first feature in
            a major facility management software in just 3 weeks
          </li>
          <li>
            Successfully overhauled significant features of the system to
            improve maintainablity and UI/UX
          </li>
          <li>
            Designed developed and integrated numerous new features for the
            system
          </li>
          <li>
            Suggested and implemented improvements that increased
            maintainability of the existing codebase
          </li>
          <li>
            Planned and successfully implemented a mobile application migration
            to a new framework when the old one was being deprecated
          </li>
          <li>
            Collaborated closely with the team of 4 developers, reviewed merge
            requests and participated in daily standup meetings
          </li>
          <li>
            Worked closely with clients to understand new feature requirements
            and to gather feedback for UI/UX
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
            Demonstrated leadership skills by mentoring a group of 5 new
            students
          </li>
          <li>
            Exhibited strong organisational skills by organising monthly
            face-to-face meetings and online meetings
          </li>
          <li>
            Answered questions at length and shared personal experience in a
            friendly manner with new students daily
          </li>
          <li>
            Received a certificate for commitment, involvement and service
          </li>
        </List>
      </Card>
    </>
  );
}
