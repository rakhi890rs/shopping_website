import axios from '../../api/axiosconfig.jsx';
import { loadUser } from '../reducers/userSlice.js';

export const asyncurrentuser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user")); // assign to variable
    if(user) dispatch(loadUser(user));
    else console.log("user not logged in")
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user"); // remove user from localStorage
    console.log("User logged out successfully");
  } catch (error) {
    console.log(error);
  }
};

// Async login user
export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/users?email=${user.email}&password=${user.password}`);
    if (res.data.length > 0) {
      const loggedInUser = res.data[0];
      
      // save to localStorage
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      
      // update Redux state
      dispatch(loadUser(loggedInUser));
      
      console.log("Logged in user:", loggedInUser);
    } else {
      console.log("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
  }
};


// Async register user
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
