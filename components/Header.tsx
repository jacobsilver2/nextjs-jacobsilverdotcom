import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Headroom from "react-headroom";

const StyledHeader = styled.header`
  border-bottom: 1px dashed var(--colors-black);
  display: flex;
  height: var(--headerFooterHeight);
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--lrpadding);
  z-index: 2;
  background-color: var(--colors-bg);
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 0;
    gap: 8px;
  }
`;

const NavItems = styled.div`
  list-style: none;
  text-align: center;
`;
const NavItem = styled.div`
  display: inline;
  padding: 0 0.5em;
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
    <Headroom style={{ maxWidth: "1024px", margin: "auto" }}>
      <StyledHeader>
        <div>
          <Link passHref href="/">
            <A>
              <b>Jacob Silver</b>
            </A>
          </Link>
        </div>
        <nav>
          <NavItems>
            <NavItem>
              <Link passHref href="/">
                <A isActive={pathname === "/"}>Home</A>
              </Link>
            </NavItem>
            <NavItem>
              <Link passHref href="/about">
                <A isActive={pathname === "/about"}>About</A>
              </Link>
            </NavItem>
            <NavItem>
              <Link passHref href="/shows">
                <A isActive={pathname === "/shows"}>Shows</A>
              </Link>
            </NavItem>
            <NavItem>
              <Link passHref href="/videos">
                <A isActive={pathname === "/videos"}>Videos</A>
              </Link>
            </NavItem>
          </NavItems>
        </nav>
      </StyledHeader>
    </Headroom>
  );
};
