import styled from "@emotion/styled";
import Guest from "./components/Guest";
import SNS from "./components/SNS";

function App() {
  return (
    <Container>
      <Guest />
      <SNS />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  height: 100%;
`;

export default App;
