import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { codeAboutText, musicAboutText } from "../content";

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const Tab = styled.div<{ isActive?: boolean }>`
  text-align: center;
  height: 100%;
  border: 1px solid var(--colors-black);
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? "var(--colors-white)" : "var(--colors-black)"};
  background-color: ${({ isActive }) =>
    isActive ? "var(--colors-black)" : "var(--colors-white)"};
  &:hover {
    background-color: var(--colors-black);
    color: var(--colors-white);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AboutComponent = () => {
  const [activeTab, setActiveTab] = useState<"code" | "music">("music");

  const renderAboutText = () => {
    switch (activeTab) {
      case "code":
        return Object.keys(codeAboutText).map((key) => (
          <p key={key}>{codeAboutText[key]}</p>
        ));

      case "music":
        return Object.keys(musicAboutText).map((key) => (
          <p key={key}>{musicAboutText[key]}</p>
        ));
    }
  };

  return (
    <>
      <Head>
        <title>Jacob Silver - About</title>
        <meta name="description" content="Jacob Silver Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutContainer>
        <Tabs>
          <Tab
            isActive={activeTab === "music"}
            onClick={() => setActiveTab("music")}
          >
            MUSIC
          </Tab>
          <Tab
            isActive={activeTab === "code"}
            onClick={() => setActiveTab("code")}
          >
            CODE
          </Tab>
        </Tabs>

        <Content>{renderAboutText()}</Content>
      </AboutContainer>
    </>
  );
};
