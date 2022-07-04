import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCESS, UPDATE_USER, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS } from "./actionTypes"

const initialState = {
    users: [],
    user: {},
    isLoadingUsers: false,
    isLoadingUserById: false,
    isUpdatingUser: false,
    error: {
        messsage: ''
    },

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                isUpdatingUser: true
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUpdatingUser: false,
                user: action.payLoad
            }

        case UPDATE_USER_FAIL:
            return {
                ...state,
                isUpdatingUser: false,
                error: action.payload
            }

        case GET_USERS:
            return {
                ...state,
                isLoadingUsers: true
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoadingUsers: false,
                users: action.payload
            }

        case GET_USERS_FAIL:
            return {
                ...state,
                isLoadingUsers: false,
                error: action.payload
            }

        case GET_USER_BY_ID:
            return {
                ...state,
                isLoadingUserById: true
            }

        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                isLoadingUserById: false,
                user: action.payload
            }

        case GET_USER_BY_ID_FAIL:
            return {
                ...state,
                isLoadingUserById: false,
                error: action.payload
            }

        default:
            return { ...state };

    }
}

export default usersReducer;