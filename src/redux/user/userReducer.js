const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "GET_CURRENT_USER":
      return state.currentUser;
    default:
      return state;
  }
};

export default userReducer;
