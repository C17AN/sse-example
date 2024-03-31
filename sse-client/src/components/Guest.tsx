import styled from "@emotion/styled";
import { useState } from "react";
import { friendRequest } from "../remotes/friendRequest";

const Guest = () => {
  const [username, setUsername] = useState<string>();

  const handleFriendRequest = () => {
    if (!username) return;
    friendRequest(username);
  };

  return (
    <Container>
      <Input
        placeholder="이름을 입력하세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button disabled={!username} onClick={handleFriendRequest}>
        친구 신청하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #cdcdcd;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  width: 12rem;
  padding: 0.25 0.625rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.4rem 1.2rem;
  width: 12rem;
`;

export default Guest;
