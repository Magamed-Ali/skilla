import { useDispatch } from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer} from "./reducer";


const rootReducer = combineReducers({
    reducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>();

export type AppRootStateType = ReturnType<typeof rootReducer>



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;