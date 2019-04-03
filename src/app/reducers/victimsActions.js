export const addVictims = (victims) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_VICTIMS', victims})
    }
}
