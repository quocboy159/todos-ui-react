import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/commons/Loader";
import EditUserForm from "../components/users/EditUserForm";
import { getUserById, updateUser } from "../store/users/actions";

const UserDetails = () => {
    const dispatch = useDispatch();
    const { user, isLoadingUserById } = useSelector((state) => state.usersReducer);
    const { isUpdatingUser } = useSelector(state => state.usersReducer)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id])

    const handleSubmit = useCallback((data) => {
        const request = { ...data, id };
        dispatch(updateUser(request));
        navigate('/');
    }, [navigate, dispatch, id]);

    return <>
        {isLoadingUserById ? <Loader></Loader> : <EditUserForm isUpdatingUser={isUpdatingUser} user={user} onSubmit={handleSubmit}></EditUserForm>}
    </>
};

export default UserDetails;