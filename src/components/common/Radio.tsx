import { styled } from "styled-components";

const Radio = styled.input<{ id: string; defaultChecked: boolean }>`
  appearance: none;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  margin-right: 8px;
  border: 2px solid var(--gray-border);
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--gray-gray-light);
  }

  &:checked {
    border-color: transparent;
    background-image: url("/Radio.svg");
    background-size: 50% 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--primary-default);
  }
`;

export default Radio;
