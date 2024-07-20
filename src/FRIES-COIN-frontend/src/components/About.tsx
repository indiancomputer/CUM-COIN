import React from "react";
import aboutImage from "../../public/about.png";

interface BuyProps {
  handleConnectWallet: () => void;
}

const About: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#fff] text-center font-rem">
        About{" "}
        <span className="text-[#ffd543] font-rem font-extrabold">Shitter </span>
        Boyz
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8">
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-500 font-rem">
              Mission
            </h3>
            <p className="mt-4 text-lg text-gray-300 font-rem">
              The Shitter Boyz are a global collective of visionary blockchain
              enthusiasts, coming together to pioneer the future of Web3
              tokens and applications on the Internet Computer Protocol.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Development
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our developmental focus is on pushing the boundaries of what is possible
              in the decentralized ICP ecosystem, leveraging our diverse expertise
              to create groundbreaking projects that drive the industry forward.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Vision
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              You will make money in the Shitter Boyz ecosystem and be happy.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={aboutImage} alt="Shitterz" className="w-80 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
