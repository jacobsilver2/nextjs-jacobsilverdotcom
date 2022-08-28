import Head from "next/head";
import styled from "styled-components";
import { PostComponent } from "./Post";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HomeComponent = ({ posts }) => (
  <>
    <Head>
      <title>Jacob Silver - Home</title>
      <meta name="description" content="Jacob Silver Homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PostsContainer>
      {posts.map(({ slug, frontmatter, content }) => (
        <PostComponent
          key={slug}
          slug={slug}
          frontmatter={frontmatter}
          content={content}
        />
      ))}
    </PostsContainer>
  </>
);
