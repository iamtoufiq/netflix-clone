const initialValue = {
  name: null,
};
const loginAndLogout = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, name: action.payload };
    case "LOGOUT":
      return { ...state, name: null };
    default:
      return state;
  }
};
export default loginAndLogout;
