import { css, styled } from "styled-components";
import { basicFont } from "@/styles/CommonStyle";

export const Aside = styled.aside<{ $showMenu: boolean }>`
  min-width: 256px;
  height: 720px;
  background-color: var(--gray-cool-gray-light);
  padding-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  @media (max-width: 768px) {
    position: absolute;
    height: 850px;
    ${({ $showMenu }) =>
      !$showMenu &&
      css`
        transform: translateX(-230px);
      `}
  }
  transition: transform 1s;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 40%;
  left: 240px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MainMenu = styled.li<{ $active: boolean }>`
  display: flex;
  padding: 9px 28px;
  align-items: center;
  justify-content: space-between;

  ${({ $active }) =>
    $active
      ? "background-color: var(--gray-cool-gray-light-3);"
      : ` &:hover {
    background-color: var(--gray-cool-gray-light-2);
  }`}

  span {
    width: 39px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.25px;
  }

  svg {
    margin: 0 4.5px;
  }
`;

export const SubMenu = styled.li<{ $active: boolean }>`
  padding: 8px 40px;
  ${basicFont}

  ${({ $active }) =>
    $active
      ? "background-color: var(--gray-cool-gray-light-3);"
      : ` &:hover {
  background-color: var(--gray-cool-gray-light-2);
}`}
`;
