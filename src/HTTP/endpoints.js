import axios from "axios";
import { WHITELIST_APIs_BASE_URL } from "./urls"
const SERVER_URL = "http://localhost:8081";

export const subscribeToWaltsLaunch = async (payload) => {
  if (!payload) throw new Error("Payload is required");
  const res = await axios.post(
    `${SERVER_URL}/active-campaign/subscribe-walts-launch-notification`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const subscribeToComingSoonI = async (payload) => {
  if (!payload) throw new Error("Payload is required");
  const res = await axios.post(
    `${WHITELIST_APIs_BASE_URL}/active-campaign/subscribe-comming-soon-I-launch`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const subscribeToComingSoonII = async (payload) => {
  if (!payload) throw new Error("Payload is required");
  const res = await axios.post(
    `${WHITELIST_APIs_BASE_URL}/active-campaign/subscribe-comming-soon-II-launch`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
