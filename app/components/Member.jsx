import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Member({ member }) {
  if (!member) return null;

  return (
    <div className="w-full max-w-[200px]">
      <div className="relative border border-cream h-56 bg-black group overflow-hidden">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="200px"
            className="object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-purple/50 to-purple pb-3 pt-10">
          <div className="flex gap-4 justify-center">
            {member.github && (
              <Link href={member.github} target="_blank" aria-label={`${member.name}'s GitHub profile`}>
                <FaGithub className="text-cream w-7 h-7 hover:text-lightPurple transition-colors" />
              </Link>
            )}
            {member.linkedin && (
              <Link href={member.linkedin} target="_blank" aria-label={`${member.name}'s LinkedIn profile`}>
                <FaLinkedin className="text-cream w-7 h-7 hover:text-blue-500 transition-colors" />
              </Link>
            )}
            {member.twitterinstagram && (
              <Link href={member.twitterinstagram} target="_blank" aria-label={member.twitterinstagram.includes("instagram") ? `${member.name}'s Instagram profile` : `${member.name}'s Twitter profile`}>
                {member.twitterinstagram.includes("instagram") ? (
                  <FaInstagram className="text-cream w-7 h-7 hover:text-fuchsia-400 transition-colors" />
                ) : (
                  <FaTwitter className="text-cream w-7 h-7 hover:text-blue-300 transition-colors" />
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="clash-display font-semibold text-lg mt-3">
          {member.name}
        </h2>
        <p className="clash-display font-normal text-xs text-[#C6BEFF] mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );
}
