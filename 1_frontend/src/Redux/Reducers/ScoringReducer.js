const initialState = [{
    teamA: 0,
    teamB: 0,
    teamC: 0
}];

const scoringReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case "INCREASE_SCORE":
            return null //updated state
        default:
            return state
    }
};

export default scoringReducer