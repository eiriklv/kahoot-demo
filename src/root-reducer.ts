import { combineReducers } from "redux";
import gameReducer, { NAME as gameStateName } from "./features/game/duck";

const rootReducer = combineReducers({
  [gameStateName]: gameReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
