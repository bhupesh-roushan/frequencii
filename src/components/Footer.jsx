import {
  FaHome,
  FaPhoneAlt,
  FaStore,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHandsHelping,
  FaBullhorn,
  FaRupeeSign,
} from "react-icons/fa";

import { Separator } from "../components/ui/separator";
import Newsletter from "../components/NewsLetter";
import frequencii from "../assets/images/frequencii.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <Separator className="my-6" />

      <div className="flex  flex-col md:flex-row justify-center items-center md:justify-around  ">
        <div className="flex flex-col gap-2 justify-center items-center mr-2">
          <img className="w-28" src={frequencii} alt="" />
          <p className="text-sm">Find Your Perfect Frequency</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-sm sm:text-md sm:gap-20 mt-5">
          <div>
            <h1 className="font-semibold text-gray-700" >Quick Links</h1>
            <ul className="mt-2 flex flex-col gap-2">
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <span>
                  <FaHome className="text-slate-500" />
                </span>
                <span>Home</span>
              </li>
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <Link
                  className="flex flex-row items-center gap-2 cursor-pointer"
                  to="/contact"
                >
                  <span>
                    <FaPhoneAlt className="text-slate-500" />
                  </span>
                  <span>Contact</span>
                </Link>
              </li>
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <span>
                  <FaStore className="text-slate-500" />
                </span>
                <span>Store</span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold  text-gray-700">Follow Us</h1>
            <ul className="mt-2 flex flex-col gap-2">
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <a href="https://www.linkedin.com/in/roushanb/" target="_blank">
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaLinkedin className="text-slate-500" />
                    </span>
                    <span>LinkedIn</span>
                  </div>
                </a>
              </li>
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <a href="https://github.com/bhupesh-roushan" target="_blank">
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaGithub className="text-slate-500" />
                    </span>
                    <span>Github</span>
                  </div>
                </a>
              </li>
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <a href="https://www.instagram.com/roushanwa" target="_blank">
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaInstagram className="text-slate-500" />
                    </span>
                    <span>Instagram</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold  text-gray-700">Company</h1>
            <ul className="mt-2 flex flex-col gap-2">
              <Link to="/help">
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <span>
                  <FaHandsHelping className="text-slate-500" />
                </span>
                <span>Help</span>
              </li>
              </Link>
              <Link to="/sales">
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <span>
                  <FaRupeeSign className="text-slate-500" />
                </span>
                <span>Sales</span>
              </li>
              </Link>
              <Link to="/advertise">
              <li className="flex flex-row gap-2 items-center  text-gray-500 hover:text-black">
                <span>
                  <FaBullhorn className="text-slate-500" />
                </span>
                <span>Advertise</span>
              </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Newsletter />
        </div>
      </div>

      <Separator className="my-14" />

      <p className=" text-sm sm:text-lg text-muted-foreground flex justify-center  items-center">
        © 2024 Frequencii. All rights reserved @ Bhupesh Roushan.
      </p>
    </div>
  );
};

export default Footer;
