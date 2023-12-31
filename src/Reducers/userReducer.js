const initialState = {
    userDetails: {name:" "},
    isLoggedIn: false,
    isAdmin: false,
  };
  
  const userReducer = (state = initialState, action) => {
    //state holds the current state
    switch (action.type) {
      case "UPDATE_USER_DETAILS":
        return { ...state, userDetails: action.payload };
      case "UPDATE_USER_LOGGED_IN":
        return { ...state, isLoggedIn: action.payload };
  
      case "UDATE_ADMIN":
        return { ...state, isAdmin: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  