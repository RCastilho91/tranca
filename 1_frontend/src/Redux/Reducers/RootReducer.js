import {combineReducers} from "redux";
import scoringReducer from './ScoringReducer'

const rootReducer = combineReducers({
    teamScoring: scoringReducer
})

export default rootReducer