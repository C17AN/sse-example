import styled from "@emotion/styled";
import { useCheckFriendRequest } from "../remotes/useCheckFriendRequest";
import Header from "./Header";

const SNS = () => {
  const { isFriendRequestArrived } = useCheckFriendRequest();

  return (
    <Container>
      <Header isFriendRequestArrived={isFriendRequestArrived} />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  flex: 1;
`;

export default SNS;
