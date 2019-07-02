import axios from "axios";
import { FETCH_USER, FETCH_PROFILE } from "./types";

export const fetchUser = () => async dispatch => {
  // response of API
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProfile = () => async dispatch => {
  const res = await axios.get("/api/profile/current");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};
