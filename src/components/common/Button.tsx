import { styled } from "styled-components";
import { basicFont } from "@/styles/CommonStyle";

const Button = styled.button`
  display: block;
  padding: 8px 24px;
  border-radius: 5px;
  color: white;
  background-color: var(--primary-default);
  margin-top: 16px;
  margin-left: auto;
  cursor: pointer;
  ${basicFont}

  &:hover {
    background-color: var(--primary-dark);
  }
`;

export default Button;
