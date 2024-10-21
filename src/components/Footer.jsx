import {
  FaHome,
  FaPhoneAlt,
  FaStore,
  FaInfoCircle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLock,
  FaHandsHelping,
  FaDollarSign,
  FaBullhorn,
} from "react-icons/fa";

import { Separator } from "../components/ui/separator";
import Newsletter from "../components/NewsLetter";

// Map icons based on link name
const getIcon = (name) => {
  switch (name) {
    case "Home":
      return <FaHome className="text-slate-500"/>;
    case "Contact":
      return <FaPhoneAlt className="text-slate-500" />;
    case "Shop":
      return <FaStore className="text-slate-500"/>;
    case "About":
      return <FaInfoCircle className="text-slate-500" />;
    case "LinkedIn":
      return <FaLinkedin className="text-slate-500"/>;
    case "Github":
      return <FaGithub className="text-slate-500"/>;
    case "Instagram":
      return <FaInstagram className="text-slate-500"/>;
    case "Privacy":
      return <FaLock className="text-slate-500"/>;
    case "Help":
      return <FaHandsHelping className="text-slate-500"/>;
    case "Sales":
      return <FaDollarSign className="text-slate-500"/>;
    case "Advertise":
      return <FaBullhorn className="text-slate-500"/>;
    default:
      return null;
  }
};

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Shop", href: "#" },
      { name: "About", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/roushanb/" },
      { name: "Github", href: "https://github.com/bhupesh-roushan" },
      { name: "Instagram", href: "https://www.instagram.com/roushanwa/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col m-5">
      {/* Logo */}
      <div className="flex flex-col gap-3 justify-center items-center md:justify-start mt-14">
        <img src="public/Flora&Fauna.svg" alt="logo" className="w-24" />
        <p className="text-sm">Find Your Perfect Frequency</p>
      </div>

      <Separator className="my-6" />
      <div className="flex  flex-col md:flex-row justify-center items-center md:justify-around">
        {/* Items */}
        <div className="flex gap-20 flex-col justify-center mt-5 md:flex-row md:justify-evenly m-10 ">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="font-medium mb-2">{section.title}</div>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="mb-1 flex justify-start items-center"
                  >
                    {getIcon(link.name)}
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-black ml-2 transition-all ease-in-out delay-120"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <Newsletter />
        </div>
      </div>

      <Separator className="my-14" />

      <p className="text-md text-muted-foreground flex justify-center items-center">
        © 2024 Frequencii. All rights reserved @ Bhupesh Roushan.
      </p>
    </div>
  );
};

export default Footer;
