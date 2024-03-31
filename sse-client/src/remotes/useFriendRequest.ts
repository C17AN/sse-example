import { useEffect } from "react";
import axios from "./config";

export const useFriendRequest = () => {
  useEffect(() => {
    fetchFriendRequest();
    return () => {};
  }, []);

  const fetchFriendRequest = async () => {
    try {
      const { data } = await axios.get("/friends");
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
};
