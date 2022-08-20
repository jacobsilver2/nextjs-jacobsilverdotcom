import Head from "next/head";
import YouTube from "react-youtube";
import { videoUrls } from "../content";

export const VideosComponent = () => {
  return (
    <>
      <Head>
        <title>Jacob Silver - Videos</title>
        <meta name="description" content="Jacob Silver Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Videos</h1>
      {videoUrls.map((video) => (
        <YouTube key={video.url} videoId={video.url} />
      ))}
    </>
  );
};
