import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./actionTypes"

export const  getUsers = () => {
    return {
        type: GET_USERS
    };
};

export const  getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    };
};

export const  getUsersFail = (error) => {
    return {
        type: GET_USERS_FAIL,
        payload: error
    };
};