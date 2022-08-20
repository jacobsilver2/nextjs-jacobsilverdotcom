import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--colors-black);
  display: flex;
  height: var(--headerFooterHeight);
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--lrpadding);
`;

const UL = styled.ul`
  list-style: none;
  text-align: center;
`;
const LI = styled.li`
  display: inline;
  padding: 0 0.5em;
  /* margin: 0 0.5em; */
  /* border: 1px solid var(--colors-gray); */
`;

const A = styled.a<{ isActive?: boolean }>`
  display: inline-block;
  color: ${({ isActive }) =>
    isActive ? "var(--colors-gray)" : "var(--colors-black)"};
  &:hover {
    color: var(--colors-gray);
  }
`;

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <div>
        <Link passHref href="/">
          <A>
            <b>Jacob Silver</b>
          </A>
        </Link>
      </div>
      <nav>
        <UL>
          <LI>
            <Link passHref href="/">
              <A isActive={pathname === "/"}>Home</A>
            </Link>
          </LI>
          <LI>
            <Link passHref href="/about">
              <A isActive={pathname === "/about"}>About</A>
            </Link>
          </LI>
          <LI>
            <Link passHref href="/shows">
              <A isActive={pathname === "/shows"}>Shows</A>
            </Link>
          </LI>
          <LI>
            <Link passHref href="/videos">
              <A isActive={pathname === "/videos"}>Videos</A>
            </Link>
          </LI>
        </UL>
      </nav>
    </StyledHeader>
  );
};
