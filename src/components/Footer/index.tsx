import Link from "next/link";
import { useState } from "react";

import EmailIcon from "@/assets/svg/EmailIcon";
import GitHubIcon from "@/assets/svg/GitHubIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";
import WhatsappIcon from "@/assets/svg/WhatsappIcon";

const Footer = () => {
  const [hover, setHover] = useState({
    github: false,
    linkedIn: false,
    whatsapp: false,
    email: false,
  });
  return (
    <div className="text-center sm:flex sm:items-center sm:justify-between px-8 py-4 font-medium container mx-auto">
      <div className=" sm:w-1/3 sm:text-left py-1">
        Developed by Vincent Chin
      </div>
      <div className=" sm:w-1/3 text-center py-1">
        Copyright © {new Date().getFullYear()}
      </div>
      <div className=" sm:w-1/3 sm:justify-end flex justify-center gap-4 py-1">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHover({ ...hover, github: true })}
          onMouseLeave={() => setHover({ ...hover, github: false })}
        >
          <Link href={"https://github.com/VincentChin-Git"}>
            <GitHubIcon color={hover.github ? "#99A98F" : "#333"} size="16" />
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHover({ ...hover, linkedIn: true })}
          onMouseLeave={() => setHover({ ...hover, linkedIn: false })}
        >
          <Link href={"https://www.linkedin.com/in/vincentchin99/"}>
            <LinkedInIcon
              color={hover.linkedIn ? "#99A98F" : "#333"}
              size="16"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHover({ ...hover, whatsapp: true })}
          onMouseLeave={() => setHover({ ...hover, whatsapp: false })}
        >
          <Link href={"https://wa.me/+6588630223"}>
            <WhatsappIcon
              color={hover.whatsapp ? "#99A98F" : "#333"}
              size="16"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHover({ ...hover, email: true })}
          onMouseLeave={() => setHover({ ...hover, email: false })}
        >
          <Link href={"mailto:vincentchin99102@gmail.com"}>
            <EmailIcon color={hover.email ? "#99A98F" : "#333"} size="16" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
