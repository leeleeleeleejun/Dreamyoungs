import { styled, css } from "styled-components";
import { basicFont } from "@/styles/CommonStyle";

export const CalendarBox = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 3px;
  background-color: white;
  border-radius: 5px;
  padding: 16px 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const CalendarHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    path {
      &:hover {
        stroke: #333333;
      }
    }
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const SelectBox = styled.div`
  position: relative;
`;

export const Table = styled.table`
  margin-top: 15px;
  border-collapse: separate;
  border-spacing: 2px;
`;

export const Th = styled.th`
  text-align: center;
  color: var(--gray-gray);
  ${basicFont}
`;

export const Td = styled.td<{
  $SameMonth: boolean;
  $isToDay: boolean;
  $isActive: boolean;
}>`
  width: 32px;
  height: 32px;
  padding: 4px 0;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  ${basicFont}

  ${({ $isToDay }) => $isToDay && `font-weight: bold; `}
  ${({ $SameMonth }) => $SameMonth && "color: var(--gray-gray-light);"}
  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: var(--primary-default);
          color: white;
        `
      : `&:hover {background-color: var(--primary-light);}`}
`;
