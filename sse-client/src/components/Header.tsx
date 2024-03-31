import styled from "@emotion/styled";
import { FriendRequest } from "../remotes/useCheckFriendRequest";
import Transition from "./Transition";

type Props = {
  isFriendRequestArrived: FriendRequest;
};

const Header = ({ isFriendRequestArrived }: Props) => {
  return (
    <Container>
      <Transition name={isFriendRequestArrived.friendName ?? ""}>
        <span>
          {isFriendRequestArrived?.friendName
            ? `${isFriendRequestArrived?.friendName}님으로부터 친구 요청이
          도착했습니다.`
            : ""}
        </span>
      </Transition>
    </Container>
  );
};

const Container = styled.header`
  height: 3rem;
  padding-right: 2rem;
  background-color: #3353d5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  flex: 1;
  font-size: 0.875rem;
  font-weight: 600;
`;

export default Header;
