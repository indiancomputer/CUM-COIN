import React from "react";
import { FaTelegram } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa6";
import iconBg from "../../public/images/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-80 flex items-center justify-center bg-cover bg-center text-center text-white px-4">
      {/* Pseudo-element for the background image */}
      <div
        className="absolute inset-0 bg-repeat bg-center bg-contain opacity-30"
        style={{
          backgroundImage: `url(${iconBg})`,
          backgroundSize: "contain",
        }}
      ></div>
      {/* Content of the footer */}
      <div className="relative z-10 ">
        <h2 className="text-3xl font-bold sm:text-5xl text-gray-300">
          Join Our <s>Cult</s> Community
        </h2>
        <div className="flex items-center gap-4 w-full justify-center">
          <a
            href="https://oc.app/community/7t232-dqaaa-aaaar-a2crq-cai/"
            target="_blank"
          >
            <div className="flex flex-col items-center justify-center p-1">
              <HiChatAlt2 color="#ffd543" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                OpenChat
              </h1>
            </div>
          </a>
          <a href="https://x.com/CumCoinCumCoin" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaTwitter color="#ffd543" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Twitter(X)
              </h1>
            </div>
          </a>

          <a href="https://t.me/skibiditoilERC" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaTelegram color="#ffd543" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Telegram
              </h1>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/pulse/porn-problem-dan-griffin"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center p-1">
              <FaLinkedin color="#ffd543" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Linkedin
              </h1>
            </div>
          </a>

          <a
            href="https://www.instagram.com/bnb360nsn3"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center p-1">
              <FaSquareInstagram color="#ffd543" size={44} />
              <h1
                className="md:font-bold text-sm md:text-lg
   text-gray-300"
              >
                Instagram
              </h1>
            </div>
          </a>
        </div>
      </div>

      <p className="mt-2 absolute bottom-0 text-gray-500 text-sm mb-2">
        All rights reserved by{" "}
        <a
          href="https://dashboard.internetcomputer.org/canister/4hqeo-mqaaa-aaaan-qmpeq-cai"
          className="text-[#ffd543] font-bold"
        >
          $QUOKKA
        </a>{" "}
        © 2024 Michael Patrick O'Neill
      </p>
    </footer>
  );
};

export default Footer;
