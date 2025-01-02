import { configureStore } from "@reduxjs/toolkit";
import { environment } from "../config/constants";
import { createBrowserHistory } from "history";
import { rootReducer } from "../reducers";

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: rootReducer(history),
    devTools: environment === 'development',
});