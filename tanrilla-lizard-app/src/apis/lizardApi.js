import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:9080/lizard/api/v1"
});