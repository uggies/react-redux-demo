import React from 'react'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTYpe'

const initalState = {
    loading: false,
    users: [],
    error: ''
} 

function userReducer(state=initalState, action) {
    console.log(action.type)
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload 
                
            }
        default: return state;
    }
}

export default userReducer;