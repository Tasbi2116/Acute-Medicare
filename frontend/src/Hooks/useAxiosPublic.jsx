import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://acute-doctor-b0fc9.web.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;