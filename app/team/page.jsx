import { getTeamData } from "../lib/contentful";
import TeamContent from "./TeamContent";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the team behind GDG On Campus AISSMS College of Engineering, Pune.",
};

export const revalidate = 60;

export default async function TeamPage() {
  const teamData = await getTeamData();

  return <TeamContent teamData={teamData} />;
}
