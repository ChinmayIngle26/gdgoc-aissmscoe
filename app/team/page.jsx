"use client";
import { motion } from "framer-motion";
import Member from "../components/Member";
import { useEffect, useState } from "react";
import client from "../lib/contentful";
import { v4 as uuid } from "uuid";

export default function TeamPage() {
  const [teamData, setTeamData] = useState([]); // Renamed to teamData for clarity
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await client.getEntries({
          content_type: "teamYear",
          include: 2,
        });

        if (!response.items || response.items.length === 0) {
          throw new Error("No team data found");
        }

        const teamYearEntry = response.items[0];

        // Safely access and map departments
        // The Contentful SDK resolves references inline when include >= 2
        const departments = teamYearEntry.fields.departments
          ?.map((department) => {
            if (!department.fields) return null;

            const members = department.fields.members
              ?.map((member) => {
                if (!member.fields) return null;

                // Image is also resolved inline by the SDK
                const imageUrl =
                  member.fields.image?.fields?.file?.url || null;

                return {
                  id: member.sys.id,
                  name: member.fields.name || "",
                  role: member.fields.role || "",
                  image: imageUrl ? `https:${imageUrl}` : null,
                  github: member.fields.github || "",
                  linkedin: member.fields.linkedin || "",
                  twitterinstagram: member.fields.twitterinstagram || "",
                };
              })
              .filter(Boolean); // Remove null entries

            return {
              name: department.fields.name || "",
              members: members || [],
            };
          })
          .filter(Boolean); // Remove null departments

        setTeamData([
          {
            year: teamYearEntry.fields.year || "",
            departments: departments || [],
          },
        ]);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeam();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-purple text-cream resp-px">
        <div className="container mx-auto px-4 py-16">
          <p className="clash-display text-4xl font-bold text-center mb-16">
            Loading
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-purple text-cream resp-px">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="clash-display text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h1>

        {teamData.map((yearData, yearIndex) => (
          <motion.div
            key={yearData.year}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: yearIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="clash-display text-3xl font-semibold mb-8 text-center">
              {yearData.year}
            </h2>

            {/* Map through departments for each year */}
            {yearData.departments.map((department, deptIndex) => (
              <motion.section
                key={department.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: deptIndex * 0.1, duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="clash-display text-2xl font-semibold mb-8 text-center">
                  {department.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 place-items-center items-start">
                  {department.members.map((member) => (
                    <Member key={uuid()} member={member} />
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
