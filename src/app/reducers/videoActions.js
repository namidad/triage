export const addVideos = (videos) => {
    return (dispatch, getState) => {
        dispatch({type: 'ADD_VIDEOS', videos})
    }
}