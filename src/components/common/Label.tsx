import { styled } from "styled-components";
import { basicFont } from "@/styles/CommonStyle";

export const Label = styled.label<{ htmlFor: string }>`
  cursor: pointer;
  ${basicFont}
`;

export default Label;
