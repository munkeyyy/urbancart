const initialState = {
    userDetails: {name:" "},
    isLoggedIn: false,
    isAdmin: false,
    cart:[],
    isAddedToCart:false,
    itemAdded:0,
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
      case "UPDATE_CART":
        return {...state,cart:[...state.cart,action.payload]}  
      case "IS_ADDED_TO_CART":
        return {...state, isAddedToCart: action.payload}
      case "ITEM_ADDED"  :
        return {...state, itemAdded:action.payload}
      default:
        return state;
    }
  };
  
  export default userReducer;
  