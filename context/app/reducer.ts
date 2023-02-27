import { DataType, ActionType, Actions } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
    switch(action.type){
        case Actions.SET_ALLRESULTS:
            return { ...state, allResults: action.payload.allResults}
        case Actions.SET_NUMBERGENERATE:
            return { ...state, numberGenerate: action.payload.numberGenerate}
        case Actions.SET_SEEMSRESULTS:
            return { ...state, seemsResults: action.payload.seemsResults}
        case Actions.SET_COUNTCHOICES:
            return { ...state, countsChoices: action.payload.countsChoices}
        default: return state;
    }
}