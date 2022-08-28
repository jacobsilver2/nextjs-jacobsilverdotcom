import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import styled from "styled-components";

const Post = styled.div``;

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content, ...rest } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};

const PostPage = ({ frontmatter, content }) => (
  <Post>
    <h2>{frontmatter.date}</h2>
    <h1>{frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
  </Post>
);

export default PostPage;
