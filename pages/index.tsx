import fs from "fs";
import matter from "gray-matter";
import { compareDesc, parse } from "date-fns";
import { HomeComponent } from "../components";

const Homepage = ({ posts }) => <HomeComponent posts={posts} />;

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const unsortedPosts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  const sortedPosts = [...unsortedPosts].sort((a, b) => {
    const format = "yyyy-MM-dd";
    const aAsDate = parse(a.frontmatter.date, format, new Date());
    const bAsDate = parse(b.frontmatter.date, format, new Date());
    return compareDesc(aAsDate, bAsDate);
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default Homepage;
