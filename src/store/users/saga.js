import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserById, getUsers } from '../../apis/users.apis'
import { getUserByIdSuccess, getUsersByIdFail, getUsersFail, getUsersSuccess } from './actions';
import { GET_USERS, GET_USER_BY_ID } from './actionTypes';

function* onGetUsers() {
    try {
        const reponse = yield call(getUsers);
        yield put(getUsersSuccess(reponse))
    }
    catch (error) {
        yield put(getUsersFail(error));
    }
}

function* onGetUserById({ payload }) {
    try {
        const response = yield call(getUserById, payload);
        yield put(getUserByIdSuccess(response));

    }
    catch (error) {
        yield put(getUsersByIdFail(error));
    }

}

function* usersSaga() {
    yield takeLatest(GET_USERS, onGetUsers)
    yield takeLatest(GET_USER_BY_ID, onGetUserById)
}

export default usersSaga;