import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserById, getUsers, updateUser } from '../../apis/users.apis'
import { getUserByIdSuccess, getUsersByIdFail, getUsersFail, getUsersSuccess, updateUserFail, updateUserSuccess } from './actions';
import { GET_USERS, GET_USER_BY_ID, UPDATE_USER } from './actionTypes';

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

function* onUpdateUser({ payload }) {
    try {
        const response = yield call(updateUser, payload.id, payload);
        yield put(updateUserSuccess(response));
    } catch (error) {
        yield put(updateUserFail(error));
    }
}

function* usersSaga() {
    yield takeLatest(UPDATE_USER, onUpdateUser);
    yield takeLatest(GET_USERS, onGetUsers);
    yield takeLatest(GET_USER_BY_ID, onGetUserById);
}

export default usersSaga;