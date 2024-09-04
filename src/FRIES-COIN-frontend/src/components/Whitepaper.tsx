import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";

const Whitepaper: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const whitepaperAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#ffd543] mb-8">
        White Paper
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              1. Mission Statement
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Famous Gang ($GANG) is a revolutionary memecoin and DAO governance
              token, pioneered by only the most famous ICPissers. Built on
              the{" "}
              <span className="text-[#ffd543] font-bold">
                Internet Computer Protocol (ICP) blockchain
              </span>
              , Famous Gang aims to become a blockchain-backed social club and
              blank canvas DAO.
              Additionally, $GANG serves as an{" "}
              <span className="text-[#ffd543] font-bold">ICRC-1 governance token</span>
              , providing investors the ability to buy voting power, ensuring
              the community drives the future development of Famous Gang.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              2. Story Behind Quokkas Coin
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Quokkas coin was created because DFinity offered us
              $15,000 to make a meme coin. That's literally it.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              3. Roadmap
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543] font-rem">
                Phase 1: Pre-Launch (Days 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Launch Famous Gang social medias, connecting with the ICP's
                  most famous.
                </li>
                <li>
                  Create NFT collection, which will act as a gate to Famous Gang
                  social media chatrooms.
                </li>
                <li>
                  Day 3: Create NFT airdrop list, rewarding early adopters with
                  their entry ticket into the Famous Gang.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 2: Launch (Months 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Launch NFT collection, marketing their utility in future governance
                  and Famous Gang-only chatrooms.
                </li>
                <li>
                  Launch social media groups, with priority chatrooms gated by the
                  NFT collection.
                </li>
                <li>
                  Launch $GANG token, the official memecoin and governance token of
                  the Famous Gang initiative.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 3: Governance and Development (Months 4-6)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Create utility for the $GANG token, such as
                    chatroom airdrops, LP fee airdrops, and more.</li>
                <li>
                  Adopt a DAO framework for Famous Gang, using
                  $GANG as its governance token.
                </li>
                <li>
                  Offer a decentralization sale upon the launch of
                  Famous GANG (Grassroots Autonomous Noncentralized Group).
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 4: Community Takeover (Months 7-12)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Allow the community to shape the future of Famous GANG using
                  DAO governance proposals.
                </li>
                <li>
                  Build fame within the ICP and crypto ecosystem.
                  fees.
                </li>
                <li>
                  Month 9-12: Continuously improve the platform, focusing on
                  scalability and user experience.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              4. Tokenomics
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543] font-rem">Total Supply:</strong>{" "}
              69,000,000,000 QUOKKA
              <br />
              <br />
              <strong className="text-[#ffd543] font-rem">
                Distribution and Issuance Schedule
              </strong>
              <br />
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#ffd543]">
                    PoUW Consensus Mechanism:
                  </strong>{" "}
                  Quokkas Coin operates on the Internet Computer blockchain,
                  utilizing the PoUW consensus mechanism. PoUW rewards
                  participants for providing computational resources to the
                  network, contributing to its security and functionality.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Initial Distribution:
                  </strong>{" "}
                  Genesis Block: Initial distribution of QUOKKA:
                  <ul className="list-disc list-inside mt-4 ml-8">
                    <li>
                      Rugpull Wallet: 45% (9,450,000 QUOKKA)
                    </li>
                    <li>
                      ICP Hubs: 20% (4,200,000 QUOKKA) - Each ICP Hub receives:
                      175,000 QUOKKA (4,200,000 QUOKKA / 24)
                    </li>
                    <li>
                      Exchange Liquidity: 0.5% (105,000 QUOKKA)
                    </li>
                    <li>Team Allocation: 5% (1,050,000 QUOKKA) - Each
                      team member receives: 859,090.91 QUOKKA (9,450,000 QUOKKA /
                      11)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-[#ffd543]">Mining Rewards:</strong>{" "}
                  Participants contribute computational resources to the network
                  and are rewarded with QUOKKA tokens. Mining rewards are
                  distributed to validators based on their contribution to the
                  network's computational work.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Unique Features
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#ffd543]">
                    Decentralized Governance:
                  </strong>{" "}
                  QUOKKA holders participate in decentralized governance through
                  proposals and voting mechanisms on the Internet Computer.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Scalability and Security:
                  </strong>{" "}
                  Leveraging the Internet Computer's scalability and security
                  features ensures efficient and secure token operations.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Community Building and Adoption:
                  </strong>{" "}
                  Develop partnerships with restaurants and food outlets to
                  accept QUOKKA as payment. Implement rugpull programs to 
                  discourage selling and encourage usage of Quokkas Coin in
                  the community.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Environmental Sustainability:
                  </strong>{" "}
                  Explore eco-friendly practices for token operations on the
                  Internet Computer, such as roping myself to save oxygen.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              5. Governance and Implementation
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543]">
                Decentralized Governance:
              </strong>{" "}
              Proposals are submitted and voted on by QUOKKA holders using the
              Internet Computer's governance mechanism.
              <br />
              <br />
              <strong className="text-[#ffd543]">Implementation:</strong>{" "}
              Approved proposals are implemented through smart contracts on the
              Internet Computer, ensuring transparency and efficiency.
            </CardItem>
          </CardBody>
        </CardContainer>
      </TracingBeam>
    </div>
  );
};

export default Whitepaper;
