import { useFriendRequest } from "./remotes/useFriendRequest";
import { useSubscribeFriendRequest } from "./remotes/useSubscribeFriendRequest";

function App() {
  useFriendRequest();
  useSubscribeFriendRequest();

  return (
    <>
      <header>친구 추천</header>
    </>
  );
}

export default App;
