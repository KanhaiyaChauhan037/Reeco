import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./reducer";
export const store = legacy_createStore(Reducer, applyMiddleware(thunk));