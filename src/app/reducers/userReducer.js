const initialState = {
    isLogged: false,
    isAdmin: true,
    user: [],
    valletBalance: 0,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            state={
                ...state,
                user: action.login,
                isLogged: action.login.logged,
                valletBalance: action.login.ValletBalance
            }
            return state;
        default:
            return state;
    }
}
export default userReducer
