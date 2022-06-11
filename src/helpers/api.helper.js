import axios from "axios";

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API
});

axiosApi.interceptors.request.use(function (config) {
    return config;
});

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

const get = async (url, configs) => {
    return await axiosApi.get(url, configs).then(response => response.data);
};

const post = async (url, data, configs) => {
    return await axiosApi.post(url, data, configs).then(response => response.data);
};

const postForm = async (url, data, configs) => {
    return await axiosApi.postForm(url, data, configs).then(response => response.data);
};

const put = async (url, data, configs) => {
    return await axiosApi.put(url, data, configs).then(response => response.data);
};

const putForm = async (url, data, configs) => {
    return await axiosApi.putForm(url, data, configs).then(response => response.data);
};

export {
    get,
    post,
    postForm,
    put,
    putForm
}