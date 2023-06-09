import axios from "axios";

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_BACK_END_URL}/`,
	timeout: 10000,
})

export default instance;