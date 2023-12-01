import axios from 'axios';

const API_URL = "http://localhost:3000/tasks";

const requestData = async () => {
    return axios.get(API_URL).then(response => {
      return response.data;
    });
}

export default {
    requestData,
};