import { get } from "../helpers/api.helper";

export const getUsers = async () => await get('users');
export const getUserById = async (id) => await get(`users/${id}`);