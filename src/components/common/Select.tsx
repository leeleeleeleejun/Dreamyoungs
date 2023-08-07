import { css, styled } from "styled-components";
import { basicFont } from "@/styles/CommonStyle";

export const Select = styled.button<{ $showList: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border: 1px solid var(--gray-border);
  border-radius: 5px;
  cursor: pointer;
  ${basicFont}

  &:hover {
    background-color: var(--select-hover);
    border: 1px solid var(--gray-gray-light);
  }

  ${({ $showList }) =>
    $showList &&
    css`
      outline: 3px solid var(--primary-light);
      border: 1px solid var(--primary-default);
    `}

  svg {
    margin-left: 12px;
    padding: 0 5px;
  }
`;

export const OptionList = styled.ul`
  width: 100%;
  height: 250px;
  padding: 8px 0;
  position: absolute;
  top: 38px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  overflow-y: auto;
  // overflow스크롤 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export const OptionItem = styled.li<{ $isActive: boolean }>`
  font-size: 14px;
  padding: 8px 12px 9px;
  ${({ $isActive }) =>
    $isActive && "background-color: var(--gray-cool-gray-light);"};
`;
