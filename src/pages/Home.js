import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UserList from '../components/users/UserList';
import { getUsers } from '../store/users/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return <>
    <UserList/>
    </>
}
 export default Home;