import { styled } from "styled-components";
import Contents from "@/components/Contents";
import MenuContainer from "@/components/SideMenu";
import Title from "@/components/Title";

export default function MainPage() {
  return (
    <Container>
      <MenuContainer />
      <Wrap>
        <Title>타이틀</Title>
        <Contents />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  width: 100%;
`;
