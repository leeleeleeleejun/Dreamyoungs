import { styled } from "styled-components";

const CheckBox = styled.input<{ id: string; defaultChecked: boolean }>`
  appearance: none;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  margin-right: 8px;
  border: 2px solid var(--gray-border);
  border-radius: 0.35rem;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--gray-gray-light);
  }

  &:checked {
    border-color: transparent;
    background-image: url("/Check.svg");
    background-size: 80% 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--primary-default);
  }
`;

export default CheckBox;
