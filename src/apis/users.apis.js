import { get, put } from "../helpers/api.helper";

export const getUsers = async () => await get('users');
export const getUserById = async (id) => await get(`users/${id}`);
export const updateUser = async (id, user) => await put(`users/${id}`, user);