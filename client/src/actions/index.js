import axios from "axios";

export const fetchUser = () => async dispatch => {
  // response of API
  const res = await axios.get("/api/current_user");

  dispatch({ type: "fetch_user", payload: res.data });
};

export const fetchProfile = () => async dispatch => {
  const res = await axios.get("/api/profile/current");

  dispatch({ type: "fetch_profile", payload: res.data });
};
