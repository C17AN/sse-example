import { FriendRequest } from "../remotes/useCheckFriendRequest";

type Props = {
  isFriendRequestArrived?: FriendRequest;
};

const Header = ({ isFriendRequestArrived }: Props) => {
  return <div>{isFriendRequestArrived?.friendName}</div>;
};

export default Header;
