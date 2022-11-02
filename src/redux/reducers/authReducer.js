const isAuthInitialState = {
  name: "",
  email: "",
  isAuth: true,
};
export const isAuth = (state = isAuthInitialState, action) => {
    if (action.type == "login") {
        return{
            ...state,
            name: action.name,
            email: action.email,
            isAuth: action.isAuth,
        }
    }
};
