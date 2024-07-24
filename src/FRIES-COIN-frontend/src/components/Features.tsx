import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import useMedia from "../hooks/useMedia";

const Features: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-[#ffd543] mb-8 font-rem"
        >
          Unique Features of the Shitter Boyz Ecosystem
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-300 font-rem"
        >
          Discover the unique features that make Shitter Boyz projects stand out in the
          cryptocurrency space.
        </motion.p>
      </motion.div>

      <div className="space-y-20">
        {/* Core Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Core Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Decentralized Autonomous Chain-Fusion Canister Network Nervous System Technology
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    <span className="text-[#ffd543] font-bold font-rem">
                      SHITTER BOYZ
                    </span>{" "}
                    participate in decentralized governance through
                    building on the Internet Computer Protocol.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Scalablity and Security
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Leveraging the{" "}
                    <span className="text-[#ffd543] font-bold">
                      Internet Computer's
                    </span>{" "}
                    scalability and privacy features ensure efficient,
                    private, and anonymous token operations.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Community Building and Adopting
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Develop partnerships with Web3 communities and memecoins to
                    accept{" "}
                    <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span>
                    partnerships and collaborations. Implement loyalty programs and 
                    incentives to encourage loyalty to the <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span> 
                    brand and initiative.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    World-Class Crypto Projects
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Explore innovative token operations and startups on the{" "}
                    <span className="text-[#ffd543] font-bold">
                      Internet Computer
                    </span>
                    , setting trends throughout the ecosystem.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Development Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Development Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Developer Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate Shitter Boyz with{" "}
                    <span className="text-[#ffd543] font-bold">DFINITY's</span>{" "}
                    Internet Computer Protocol for seamless development and
                    deployment of capital acquisition processes.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Future Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    NFT Marketplace
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Launch an NFT marketplace where users can buy but not sell{" "}
                    <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span>
                    NFTs, promoting team member compensation and exit liquidity.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    DeFi Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate with decentralised finance (DeFi) platforms to
                    allow us to rugpull all{" "}
                    <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span>{" "}
                    tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Cross-Chain Compatibility
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Ensure cross-chain compatibility with other blockchains like
                    Ethereum and Binance Smart Chain, enabling{" "}
                    <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span> to
                    suck liquidity out of other chains, into the Internet Computer ecosystem.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Advanced Analytics
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Provide advanced analytics and insights for
                    <span className="text-[#ffd543] font-bold">SHITTER BOYZ</span>{" "}
                    team members and developers to track the momentum and usage of
                    our ecosystem's tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
