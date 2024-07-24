import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative mb-4">
      <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 p-1 rounded"
      >
        <FaCopy />
      </button>
    </div>
  );
};

const sections = [
  "Joining The Boyz",
  "Token Launch",
  "Smart Contract Development",
] as const;

type Section = (typeof sections)[number];

const sectionContent: Record<Section, JSX.Element> = {
  "Joining The Boyz": (
    <div className="font-rem">
      <h1 className="text-3xl font-bold mb-4">Joining The Boyz</h1>
      <p className="mb-4">
        To get started as a Shitter Boy, you'll need to first present 
        your talents to the Boyz before applying. Follow the steps 
        below to get your application up and running.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Extensive experience with C++, Rust, or Java</li>
        <li>Master's Degree in a Business Discipline or Computer Engineering</li>
        <li>5-7 years experience of leadership position in Cryptocurrency/Blockchain Administration</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Applying</h2>
      <p className="mb-2">
        First, navigate to the following website and fill out the form:
      </p>
      <CodeBlock
        code={`https://forms.gle/MAxoiba5FR2mScHc9`}
      />
      <h2 className="text-2xl font-semibold mb-2">Accepting Your Position</h2>
      <p className="mb-2">
        To formally accept your employment upon successful application,
        follow-up via Direct Message at:
      </p>
      <CodeBlock
        code={`https://x.com/icshitterboyz`}
      />
    </div>
  ),
  "Token Launch": (
    <div className="font-rem">
      <h1 className="text-3xl font-bold mb-4">Token Launch</h1>
      <h2 className="text-2xl font-semibold mb-2">Joining the Private Telegram</h2>
      <CodeBlock code={`JOIN https://t.me/ShitterBoyzPRIV`} />
      <p className="mb-2">
        <strong>Parameters:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>Birthday</code>: The birthday of your Telegram account must be earlier than 01/01/1920.
        </li>
      </ul>
      <p className="mb-2">
        <strong>Response:</strong>
      </p>
      <CodeBlock code={`JOIN GROUP`} />
      <h2 className="text-2xl font-semibold mb-2">Shitter Boyz Token Launcher</h2>
      <CodeBlock code={`JOIN https://[redacted] (Pinned message in Shitter Boyz PRIVATE Chat)`} />
      <p className="mb-2">
        <strong>Parameters:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>Username</code>: The user's username must be anonymized before launching tokens.
        </li>
        <li>
          <code>Token Ticker</code>: The ticker symbol of your desired token.
        </li>
        <li>
          <code>Token Logo</code>: The logo of your desired token.
        </li>
      </ul>
      <p className="mb-2">
        <strong>Response:</strong>
      </p>
      <CodeBlock
        code={`Deployed canisters.`}
      />
    </div>
  ),
  "Smart Contract Development": (
    <div className="font-rem">
      <h1 className="text-3xl font-bold mb-4">Smart Contract Development</h1>
      <p className="mb-4">
        To develop smart contracts for Shitter Boyz, follow the guidelines below.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Writing a Contract</h2>
      <CodeBlock
        code={`use ic_cdk::export::candid::CandidType;\nuse serde::Deserialize;\n\n#[derive(CandidType, Deserialize)]\nstruct TransferArgs {\n    to: String,\n    amount: u64,\n}\n\n#[update]\nfn transfer(args: TransferArgs) -> Result<(), String> {\n    // Your transfer logic here\n}`}
      />
    </div>
  ),
};

const DeveloperDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("Joining The Boyz");

  const renderSectionContent = (section: Section) => {
    return sectionContent[section];
  };

  return (
    <div className="flex flex-col bg-[#041c32] text-white min-h-screen overflow-x-hidden">
      <div className="bg-gray-900 p-4 w-full overflow-x-hidden">
        <h2 className="text-xl font-bold mb-4 font-rem">Developer Docs</h2>
        <ul className="flex flex-col md:flex-row md:space-x-4 font-rem">
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer mb-2 md:mb-0 p-2 rounded ${
                activeSection === section
                  ? "bg-gray-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4 md:p-8"
      >
        {renderSectionContent(activeSection)}
      </motion.div>
    </div>
  );
};

export default DeveloperDocs;
