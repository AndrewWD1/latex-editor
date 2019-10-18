const INITIAL_STATE = {
  signedIn: false,
  firstName: null,
  lastName: null,
  email: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
