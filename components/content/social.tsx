import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiPolywork } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    alt: "github",
    img: <BsGithub className="text-5xl md:text-3xl" />,
    link: "https://github.com/NebuDev14",
  },
  {
    alt: "linkedin",
    img: <BsLinkedin className="text-5xl md:text-3xl" />,
    link: "https://www.linkedin.com/in/warren-yun-240984216/",
  },
  {
    alt: "email",
    img: <IoMdMail className="text-5xl md:text-3xl" />,
    link: "mailto:wyun@wpi.edu",
    color: "text-cyan-600",
  },
];

export const Social: React.FC = () => {
  return (
    <div className="z-50 flex flex-col ">
      <div className="flex flex-row items-center justify-start mb-4">
        {socials.map((icon, i) => (
          <div
            key={i}
            className="mr-6 duration-200 cursor-pointer hover:text-gray-400"
          >
            <a href={icon.link} target="_blank" rel="noreferrer">
              {icon.img}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
