import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	// creates a variable that holds the data returned from the get request
	const res = await axios.get("/auth/google/api/current_user");
	//sends the user back to set it as the current user in the app
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("/auth/google/api/stripe", token);

	dispatch({ type: FETCH_USER, payload: res.data });
};
