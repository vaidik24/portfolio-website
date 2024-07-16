import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BiFile } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdPreview } from "react-icons/md";
import { motion } from "framer-motion";

import { useState } from "react";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <footer className=" p-4">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-800 px-4 py-2 rounded-full">Socials</div>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/vaidik24"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full"
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/vaidik-pandya/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {/* <a
          href="/path/to/resume.pdf"
          className="px-4 py-2 bg-gray-800 rounded-full flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faFileAlt} className="text-white" />
          <span>Resume</span>
        </a> */}
        <motion.div className="relative flex">
          <button
            className="flex flex-row justify-center items-center gap-x-2 bg-[#28282a97] px-5 py-2 sm:w-[150px] w-[130px]  border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            <span>
              <BiFile size={15} className="" />
            </span>
            <span>Resume</span>
          </button>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", stiffness: 200 }}
              exit={{ opacity: 0 }}
              className="absolute flex justify-center items-center flex-col top-[50px] left-0 w-[150px] bg-[black] border-[#343437] border-[1px] p-1 rounded-md z-10"
            >
              <a
                href="/src/assets/My_Resume.pdf"
                download="Vaidik_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <button className="flex flex-row justify-start items-center gap-x-2 px-5 py-2 text-white  w-full rounded-[4px] text-left hover:bg-[#27272A] hover:border-[#39393c]">
                  <span>
                    <HiOutlineDocumentDownload />
                  </span>
                  <span>Download</span>
                </button>
              </a>

              <button
                className="flex flex-row justify-start items-center gap-x-2 menu-option px-5 py-2 text-white w-full rounded-[4px] text-left hover:bg-[#27272A] hover:border-[#39393c]"
                onClick={() => {
                  setIsMenuOpen(false),
                    window.open("/src/assets/My_Resume.pdf", "_blank");
                }}
              >
                <span>
                  <MdPreview />
                </span>
                <span>Preview</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="text-center text-[#915EFF] text-5xl  font-bold">
        Vaidik Pandya
      </div>
      <div className="text-center text-gray-500 mt-2 text-sm">
        All rights reserved. © 2024
      </div>
    </footer>
  );
};

export default Footer;
