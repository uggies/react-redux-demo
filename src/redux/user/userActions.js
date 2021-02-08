import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTYpe"


// this is a function that returns an action object
export const fetch_users_request = () => {
    return {
        type : FETCH_USERS_REQUEST,
    }
}

// action is an function and it returns an objec with input param
// action has type and payload
const fetch_users_success = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetch_users_failure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        playload : error
    }
}

export const fetchUsers = () => {
    // make axio request first
    // then dispatch requests
    // this has a dispatch argument
    return (dispatch) => {
        dispatch(fetch_users_request());
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetch_users_success(users))
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetch_users_failure(error));
        })
    }
}