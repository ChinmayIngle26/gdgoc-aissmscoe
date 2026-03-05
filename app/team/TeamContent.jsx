"use client";
import { motion } from "framer-motion";
import Member from "../components/Member";

export default function TeamContent({ teamData = [] }) {
  if (teamData.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-purple text-cream resp-px">
        <div className="container mx-auto px-4 py-16">
          <p className="clash-display text-4xl font-bold text-center mb-16">
            No team data found
          </p>
        </div>
      </div>
    );
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
                    <Member key={member.id} member={member} />
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
