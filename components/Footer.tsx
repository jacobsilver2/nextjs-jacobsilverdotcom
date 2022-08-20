import styled from "styled-components";
import Image from "next/image";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--headerFooterHeight);
  border-top: 1px solid var(--colors-black);
  padding: 0 var(--lrpadding);
`;

const Icons = styled.div``;
const Icon = styled.div`
  display: inline;
  padding: 0 0.5em;
`;

const A = styled.a`
  display: inline-block;
`;

export const StyledIcon = styled(Image)`
  stroke: black;
  stroke-width: 0.4px;
  fill: black;
  &:hover {
    opacity: 50%;
  }
`;

const getFullYear = () => new Date().getFullYear();

export const Footer = () => (
  <StyledFooter>
    <div>
      <p>©{getFullYear()} Jacob Silver</p>
    </div>
    <Icons>
      <Icon>
        <A
          href="https://www.instagram.com/jacobsilver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="instagram" src="/ig.svg" width={16} height={16} />
        </A>
      </Icon>
      <Icon>
        <A
          href="https://www.facebook.com/jacob.silver.35"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src="/fb.svg" width={16} height={16} />
        </A>
      </Icon>
      <Icon>
        <A
          href="https://www.youtube.com/user/mediablitzeast/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src="/yt.svg" width={16} height={16} />
        </A>
      </Icon>
      <Icon>
        <A
          href="https://github.com/jacobsilver2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src="/gh.svg" width={16} height={16} />
        </A>
      </Icon>
      <Icon>
        <A
          href="https://www.linkedin.com/in/jacob-silver-495012123/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon src="/linkedin.svg" width={16} height={16} />
        </A>
      </Icon>
    </Icons>
  </StyledFooter>
);
