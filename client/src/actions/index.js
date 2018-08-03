import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	const res = axios.get("auth/google/api/current_user");
	dispatch({ type: FETCH_USER, payload: res });
};
