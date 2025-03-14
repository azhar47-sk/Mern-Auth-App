import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/auth';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const fetchProfile = async (token) => {
    if (!token) {
        throw new Error('No token provided. Please log in.');
    }

    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);

        // Provide a more descriptive error message
        if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized. Please log in again.');
        } else if (error.response && error.response.status === 403) {
            throw new Error('Access denied. You do not have permission to view this profile.');
        } else {
            throw new Error('Failed to fetch profile. Please try again later.');
        }
    }
};