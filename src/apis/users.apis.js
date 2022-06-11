import { get } from "../helpers/api.helper";

 export const getUsers = async  () => await get('users');