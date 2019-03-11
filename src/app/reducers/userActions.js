export const loginUser = (login) => {
    return (dispatch, getState) => {
        dispatch({type: 'LOGIN_USER', login})
    }
}