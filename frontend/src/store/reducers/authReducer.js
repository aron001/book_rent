// src/store/reducers/authReducer.js
const initialState = {
    token: localStorage.getItem('token') || '',
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          error: null,
        };
      case 'SIGNUP_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          token: '',
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  