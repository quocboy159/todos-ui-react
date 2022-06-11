import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./actionTypes"

const initialState = {
    users: [],
    isLoadingUsers: false,
    error: {
        messsage: ''
    }
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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

        default:
            return { ...state };

    }
}

export default usersReducer;