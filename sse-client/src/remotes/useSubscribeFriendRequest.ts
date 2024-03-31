import { useEffect } from "react";
import { BASE_ENDPOINT_URL } from "../constant/api";

export const useSubscribeFriendRequest = () => {
  useEffect(() => {
    subscribeFriendRequest();
    return () => {};
  }, []);

  const subscribeFriendRequest = async () => {
    try {
      const eventSource = new EventSource(`${BASE_ENDPOINT_URL}alarm`);
      eventSource.onmessage = (message) => {
        console.log(message.data);
      };
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
};
