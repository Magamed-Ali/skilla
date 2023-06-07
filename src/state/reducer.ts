import {Dispatch} from "redux";
import {SkillaApi} from "../api/api";

export type TypeState = {
    items: Array<any>
    isLoading: boolean
}
type TypeChangeIsLoadingAC = ReturnType<typeof changeIsLoadingAC>
type TypeAddTodolistAC = ReturnType<typeof addTodolistAC>
type ActionsType = TypeChangeIsLoadingAC | TypeAddTodolistAC

const initialState: TypeState = {
    items: [],
    isLoading: true
}
export const reducer = (state  = initialState, action: ActionsType): TypeState => {
    switch (action.type) {
        case 'ADD-TODO-LIST': {
            return {
                ...state, items: action.page.results
            }
        }
        case 'CHANGE-iS-LOADING': {
                return {
                    ...state, isLoading: action.isLoading
                }
        }

        default: return state;
    }
}
const addTodolistAC = (page: any) => {
    return {
        type: "ADD-TODO-LIST",
        page
    } as const
}
const changeIsLoadingAC = (isLoading: boolean) => {
    return {
        type: "CHANGE-iS-LOADING",
        isLoading
    } as const
}
export const thinkTodoLists = (dStart: string, dEnd: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(changeIsLoadingAC(true))
        try {
            const data = await SkillaApi.getTodoList(dStart, dEnd)
            dispatch(addTodolistAC(data.data))
            dispatch(changeIsLoadingAC(false))
        }catch (error){
            console.log(error)
        }

    }
}