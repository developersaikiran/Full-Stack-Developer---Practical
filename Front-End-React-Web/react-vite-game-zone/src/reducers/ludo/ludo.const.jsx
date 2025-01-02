import { createAction } from 'redux-actions';

export const ludoGame = {
    STORE_GAME_STATE: "STORE_GAME_STATE",
    STORE_MESSAGES_STATE: "STORE_CHAT_STATE"
};

export const STORE_GAME_STATE = createAction(ludoGame.STORE_GAME_STATE);
export const STORE_MESSAGES_STATE = createAction(ludoGame.STORE_MESSAGES_STATE);