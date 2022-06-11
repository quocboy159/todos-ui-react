import { call, put, takeLatest } from 'redux-saga/effects'
import { getUsers } from '../../apis/users.apis'
import { getUsersFail, getUsersSuccess } from './actions';
import { GET_USERS } from './actionTypes';

function* onGetUsers() {
    try {
        const reponse = yield call(getUsers);
        yield put(getUsersSuccess(reponse))
    }
    catch (error) {
        yield put(getUsersFail(error));
    }
}

function* usersSaga(){
    yield takeLatest(GET_USERS, onGetUsers)
} 

export default usersSaga;