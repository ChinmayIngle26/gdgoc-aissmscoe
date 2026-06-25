"use client";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    background: "radial-gradient(ellipse at top, #8172e9, #41196f)",
    borderColor: "#F3E8D2",
    scale: 1,
    boxShadow: "0 0 0 rgba(129, 114, 233, 0)",
  },
  hover: {
    background: "radial-gradient(ellipse at top, #9B8AFF, #5A2A9F)",
    borderColor: "#FFFFFF",
    scale: 1.05,
    boxShadow: "0 0 20px rgba(129, 114, 233, 0.5)",
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

export default function RadialButton({ children, href }) {
  return (
    <motion.a
      href={href}
      className="clash-display radial-bg border border-cream font-medium text-xl px-5 py-2 backdrop-blur-lg focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-lightPurple"
      whileHover="hover"
      whileFocus="hover"
      variants={buttonVariants}
      initial="initial"
    >
      {children}
    </motion.a>
  );
}
