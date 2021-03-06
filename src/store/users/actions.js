import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCESS, UPDATE_USER, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS } from "./actionTypes"

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: user
    }
}

export const updateUserFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error
    }
}

export const getUsers = () => {
    return {
        type: GET_USERS
    };
};

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    };
};

export const getUsersFail = (error) => {
    return {
        type: GET_USERS_FAIL,
        payload: error
    };
};

export const getUserById = (id) => {
    return {
        type: GET_USER_BY_ID,
        payload: id
    };
};

export const getUserByIdSuccess = (user) => {
    return {
        type: GET_USER_BY_ID_SUCCESS,
        payload: user
    };
};

export const getUsersByIdFail = (error) => {
    return {
        type: GET_USER_BY_ID_FAIL,
        payload: error
    };
};