import Header from "./components/Header";
import { friendRequest } from "./remotes/friendRequest";
import { useCheckFriendRequest } from "./remotes/useCheckFriendRequest";

function App() {
  const { isFriendRequestArrived } = useCheckFriendRequest();

  return (
    <>
      <Header isFriendRequestArrived={isFriendRequestArrived} />
      <button onClick={friendRequest}>친구 요청을 보냈습니다.</button>
    </>
  );
}

export default App;
