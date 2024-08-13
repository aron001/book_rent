// src/store/actions/authActions.js
import axios from 'axios';

// Action for login
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://book-rent-api-c5nw.onrender.com/api/users/login', {
      email,
      password,
    });

    // Store the token in localStorage
    localStorage.setItem('token', response.data.token);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: response.data.token,
        user: response.data.user, // Adjust based on API response
      },
    });

    // Redirect to admin page or another action
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response?.data?.message || 'An error occurred',
    });
  }
};

// Action for signup
export const signupUser = (email, phone, password, role) => async (dispatch) => {
  try {
    await axios.post('https://book-rent-api-c5nw.onrender.com/api/users/register', {
      email,
      phone,
      password,
      role,
    });

    dispatch({
      type: 'SIGNUP_SUCCESS',
    });

    // Redirect to login page or another action
  } catch (error) {
    dispatch({
      type: 'SIGNUP_FAILURE',
      payload: error.response?.data?.message || 'An error occurred',
    });
  }
};
