// First, we setup the connection to the backend using Axios,
// which will allow us to make API calls from the frontend
import axios from 'axios';

// Sets the base URL for all Axios requests, centralizing Axios configuration
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', // Backend API url
    withCredentials: true, // To send cookies and authentication headers with requests
    timeout: 8000,
});

// GET data
// endpoint is dynamic, making this function reusable
export const fetchData = async (endpoint) => {
    try{
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// POST function to send data
export const postData = async (endpoint, payload) => {
    try{
        const response = await apiClient.post(endpoint, payload);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};