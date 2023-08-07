import { styled } from "styled-components";

export const Main = styled.main`
  padding: 32px 40px;
`;

export const InfoWrap = styled.div`
  padding: 16px 0;
  border-top: 1px solid var(--gray-cool-gray-light-3);
  border-bottom: 1px solid var(--gray-cool-gray-light-2);
`;

export const InfoBox = styled.div`
  display: flex;
  padding: 11px 0;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const InfoName = styled.div`
  width: 140px;
  margin-right: 64px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.25px;
`;
