const initialState = {
    videos: [],
}

const videoReducer = (state = initialState, action) => {
   switch(action.type){
       case 'ADD_VIDEOS':
        state = {
            videos: action.videos
        }
        return state;
    default:
    return state;
   }
}
export default videoReducer