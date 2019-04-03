const initialState = {
  victims: [{
    id: 0,
    color: "black",
    lat: 51.1089776,
    lng: 17.0326689,
    injury: "head",
  },{
    id: 1,
    color: "green",
    lat: 51.108197,
    lng: 17.032295,
    injury: "hand",

  },{
    id: 2,
    color: "red",
    lat: 51.109147,
    lng: 17.031609,
    injury: "leg",

  },{
    id: 3,
    color: "yellow",
    lat: 51.108877,
    lng: 17.033186,
    injury: "eye",
  }],
}

const victimsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_VICTIMS':
            state={
                ...state,
                victims: action.victims,
            }
            return state;
        default:
            return state;
    }
}
export default victimsReducer
