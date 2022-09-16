import styled from "styled-components";
import Head from "next/head";
import { shows } from "../content";
import { isFuture, parse } from "date-fns";

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

export const ShowsComponent = () => {
  const filteredShows = shows.filter((show) => {
    const date = parse(show.date, "M/d/yyyy", new Date());
    return isFuture(date);
  });

  return (
    <>
      <Head>
        <title>Jacob Silver - Shows</title>
        <meta name="description" content="Jacob Silver Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShowsContainer>
        {filteredShows.map((show, index) => {
          return (
            <ShowContainer key={index}>
              <a
                href={show.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>{show.date}</h1>
                <p>{show.band}</p>
                <p>{show.venue}</p>
                <p>
                  {show.city}, {show.state}, {show.country}
                </p>
              </a>
            </ShowContainer>
          );
        })}
      </ShowsContainer>
    </>
  );
};
