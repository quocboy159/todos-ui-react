import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserForm from "../components/users/UserForm";
import { getUserById } from "../store/users/actions";

const UserDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserById(id));
    }, [id])

    return <>
        <UserForm></UserForm>
    </>
};

export default UserDetails;