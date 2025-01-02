import { handleActions } from "redux-actions"
import { ludoGame } from "./ludo.const"
import { initialGameState } from "./initialState";

const initialState = {
    game: initialGameState,
    messages: []
}

export const storeGameInformation = handleActions(
    {
        [ludoGame.STORE_GAME_STATE]: (state, action) => {
            return { ...state, game: action.payload };
        },
        [ludoGame.STORE_MESSAGES_STATE]: (state, action) => {
            return {
                ...state,
                messages: action.payload,
            };
        }
    },
    initialState
);