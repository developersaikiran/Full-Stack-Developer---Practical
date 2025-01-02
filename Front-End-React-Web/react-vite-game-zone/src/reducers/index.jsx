import { combineReducers } from "@reduxjs/toolkit"
import { connectRouter } from "connected-react-router"
import storeLudoGame from "./ludo/gameSlice"


export const rootReducer = (history) => combineReducers({
    storeHistoryReducer: connectRouter(history),
    ludoGame: storeLudoGame,
});