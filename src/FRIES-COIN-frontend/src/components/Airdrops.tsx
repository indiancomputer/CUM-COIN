// ./src/components/Airdrops.tsx

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";
import friesImage from "../../public/images/fries.png";

const Airdrops: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";
  const [airdropUsers, setAirdropUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch airdrop users data from the backend
    const fetchAirdropUsers = async () => {
      try {
        const response = await fetch("/api/airdrop-users");
        const data = await response.json();
        setAirdropUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching airdrop users:", error);
        setLoading(false);
      }
    };

    fetchAirdropUsers();
  }, []);

  const friesAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#ffd543] mb-8 font-rem">
        The Boyz
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 font-rem text-white"
            >
              Meet the Boyz
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              The Shitter Boyz is a collective of Web3 pioneers who are 
              taking crypto projects to the next level. With our influence
              and community reach, we're setting trends all throughout
              the Internet Computer Protocol. Let's introduce each of the
              boyz who make this possible:
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Founder, President & C.E.O: Scott Summers
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Chief Executive Officer of Shitter Boyz
                </li>
                <li>
                  Mastermind behind successful crypto coins $NEWS, $RUMOR and $TRUMP2024
                </li>
                <li>
                  Over 15 years of experience in stealing bikes and painting fences
                </li>
                <li>
                  DFinity grant recipient
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white  font-rem"
            >
              C.T.O: Sosa Huangcheng
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Chief Technology Officer and Head of Creative Development
                  at Shitter Boyz
                </li>
                <li>
                  Directed several successful ICP projects under the "Sosa"
                  moniker: Ozempic Ghost, Glazed Vishnu, Ballsussy, Tendoge,
                  Jeetwife, and more
                </li>
                <li>
                  Unblemished investment record: Sosa has never sold at a loss
                </li>
                <li>
                  Ensures the security and safety of all Shitter Boyz projects
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
              C.M.O: Michael "Passion Planet" O'Neill
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Chief Marketing Officer of Shitter Boyz
                </li>
                <li>
                  Visionary marketer that promoted successful ICP projects 
                  such as $COW, $CTX and $ARETE
                </li>
                <li>
                  Revolutionized ICP DeFi with his aggressive "grooming" &
                  "splitroasting" marketing techniques in 2024
                </li>
                <li>
                  Knows OG's in the ICP ecosystem (they've also been groomed)
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
              C.F.O: Jerry Banfield
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Chief Financial Officer and Director of Marketing Strategy
                  at Shitter Boyz
                </li>
                <li>
                  Affluent ICP influencer who's always fiending for the next 
                  dose of crypto opportunity, directing Shitter Boyz finances
                </li>
                <li>
                  By predicting all crypto coins are going to $0, Jerry has
                  an uncanny ability to foresee and adapt to crypto market shifts
                </li>
                <li>
                  Part-time rapper (not affiliated with Shitter Boyz)
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
              Senior Intelligence Analyst: Harshad Nakamoto
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4">
                <li>
                  Artificial Intelligence guru behind Vishnu AI
                </li>
                <li>
                  Posts thousands of messages a day, constantly gathering
                  crypto and blockchain intelligence
                </li>
                <li>
                  Hired to meet Diversity, Equity, and Inclusion requirements
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>
      </TracingBeam>

      <div className="flex justify-center items-center mt-20">
        <animated.div style={friesAnimation} className="relative">
          <img
            src={friesImage}
            alt="Fries"
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Airdrops;
