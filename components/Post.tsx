import styled from "styled-components";
import Link from "next/link";
import md from "markdown-it";

const Post = styled.div``;

export const PostComponent = ({ slug, frontmatter, content }) => (
  <Post key={slug}>
    <Link href={`/post/${slug}`}>
      <a>
        <h2>{frontmatter.date}</h2>
      </a>
    </Link>
    <Link href={`/post/${slug}`}>
      <a>
        <h1>{frontmatter.title}</h1>
      </a>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
  </Post>
);
