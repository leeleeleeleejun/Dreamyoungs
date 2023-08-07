import { css, styled } from "styled-components";
import { Input } from "../common/Input";
import { basicFont } from "@/styles/CommonStyle";

export const BasicInfo = styled.div`
  ${basicFont}
`;

// Radio와 CheckBox 공통 Box컴포넌트
export const CheckInfoBox = styled.div`
  display: flex;

  div {
    display: flex;
    margin-right: 32px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const DateInfo = styled(Input)<{ $isShow: boolean }>`
  box-sizing: content-box;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-cool-gray-light);
  }

  ${({ $isShow }) =>
    $isShow &&
    css`
      outline: 3px solid var(--primary-light);
      border: 1px solid var(--primary-default);
    `}
`;

export const InputInfo = styled(Input)`
  &:focus {
    outline: 3px solid var(--primary-light);
    border: 1px solid var(--primary-default);
  }
`;

//Radio 선택3 활성화 시 표시되는 컴포넌트
export const RadioText = styled.p`
  margin-top: 12px;
  color: var(--red);
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.25px;
`;
