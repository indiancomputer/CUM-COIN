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
        Quokkas Coin White Paper
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              1. Detailed Description
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Quokkas Coin (QUOKKA) is a revolutionary meme coin with a utility
              twist, designed for all Quokkas lovers around the world. Built on
              the{" "}
              <span className="text-[#ffd543] font-bold">
                Internet Computer (ICP) blockchain
              </span>
              , Quokkas Coin aims to become the go-to currency for purchasing
              quokkas and related products at restaurants and food outlets
              globally. Additionally, QUOKKA serves as a{" "}
              <span className="text-[#ffd543] font-bold">rugpull token</span>
              , denying its holders the ability to sell QUOKKA, ensuring
              the community has a say in its future development.
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
                Phase 1: Lunch (Days 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Day 1: Lunch Quokka Coin on the Internet Computer blockchain.
                </li>
                <li>
                  Day 2: Distribute initial tokens to the team.
                </li>
                <li>
                  Day 3: List Quokka Coin on major cryptocurrency exchanges
                  with $0 in liquidity, copying the best SNS projects' strategies.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 2: Community Building (Months 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 1: Launch marketing campaigns and social media presence.
                </li>
                <li>
                  Month 2: Partner with local and international restaurants to
                  accept Quokkas Coin.
                </li>
                <li>
                  Month 3: Coordinate a team dump of QUOKKA tokens, ensuring that
                  our community can't sell, fostering a loyal and diverse community.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 3: Governance and Development (Months 4-6)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Month 4: Establish decentralized governance structure.</li>
                <li>
                  Month 5: Introduce voting mechanisms for proposals and
                  upgrades.
                </li>
                <li>
                  Month 6: Develop and release additional features based on
                  community feedback.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 4: Expansion and Sustainability (Months 7-12)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 7: Expand partnerships to more restaurants and food
                  chains globally.
                </li>
                <li>
                  Month 8: Launch eco-friendly initiatives funded by transaction
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
