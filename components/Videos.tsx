import Head from "next/head";
import styled from "styled-components";
import { videoUrls } from "../content";

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    &:hover {
      text-decoration: underline dashed;
    }
  }
`;

export const VideosComponent = () => {
  return (
    <>
      <Head>
        <title>Jacob Silver - Videos</title>
        <meta name="description" content="Jacob Silver Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideosContainer>
        {videoUrls.map((video, i) => (
          <div key={video.title}>
            {i + 1}.&nbsp;
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </div>
        ))}
      </VideosContainer>
    </>
  );
};
