import styled from "styled-components";
import Head from "next/head";
import { shows } from "../content";

const ShowsContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ShowContainer = styled.div`
  border: 1px dashed var(--colors-black);
  padding: 0.5rem;
  &:hover {
    color: var(--colors-gray);
  }
`;

export const ShowsComponent = () => (
  <>
    <Head>
      <title>Jacob Silver - Shows</title>
      <meta name="description" content="Jacob Silver Homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ShowsContainer>
      {shows.map((show, index) => (
        <ShowContainer key={index}>
          <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
            <h1>{show.date}</h1>
            <p>{show.band}</p>
            <p>{show.venue}</p>
            <p>
              {show.city}, {show.state}, {show.country}
            </p>
          </a>
        </ShowContainer>
      ))}
    </ShowsContainer>
  </>
);
