import { useEffect } from "react";
import ENDPOINT from "../constant/api";

export const useCheckFriendRequest = () => {
  useEffect(() => {
    const eventSource = new EventSource(
      `${ENDPOINT.BASE}${ENDPOINT.CHECK_FRIEND_REQUEST}`
    );

    /*
      onmessage 리스너를 작성하면 SSE 요청의 응답을 다룰 수 있습니다.
    */
    eventSource.onmessage = (message) => {
      console.log(message.data);
    };

    /*
      EventSource 객체는 자체적으로 에러를 throw하지 않기 때문에 try-catch의 영향을 받지 않습니다.
	    따라서, onerror 리스너를 작성해야 SSE 요청이 실패했을 때의 상황을 다룰 수 있습니다.
    */
    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
      console.log("EventSource Connection Ended.");
    };
  }, []);
};
