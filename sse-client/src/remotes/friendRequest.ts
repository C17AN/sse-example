import ENDPOINT from "../constant/api";
import axios from "./config";

export const friendRequest = async () => {
  try {
    await axios.post(ENDPOINT.FRIEND_REQUEST, {
      friendName: "chanmin",
    });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
