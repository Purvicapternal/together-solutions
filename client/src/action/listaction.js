import {DELETE_LIST,GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";



export const postlist = (jobdata,history) =>dispatch =>   {
  axios
  .post("http://localhost:5000/add", jobdata)
  .then(res => history.push("/list"))
   
};
export const editlist = (jobs,id,history) =>dispatch =>   {
  axios.post('http://localhost:5000/update/'+id, jobs)
  .then(res => history.push("/list"))
   
};
export const deleteAction = (id)=>{
  return (dispatch)=>{
    fetch('./delete/'+id,{method:"delete"})
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      // const newlist=this.state.list.filter(item=>{
      //   return item._id !== res2._id
      // })
      // this.setState({
      //   list:newlist,
      //   filters:newlist

      // })
      dispatch({
        type:DELETE_LIST,
        payload:res2
      })
    })

  }
}

export const registerUser = (userData, history) => dispatch => {
    axios
      .post("http://localhost:5000/register", userData)
      .then(res => history.push("/")) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  // Login - get user token
  export const loginUser = userData => dispatch => {
    axios
      .post("http://localhost:5000/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  // Set logged in user
  export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
  // User loading
  export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };
  // Log user out  
  export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };