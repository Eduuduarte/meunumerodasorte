import { useContext } from "react";
import { AppContext } from ".";
import { results } from "../../types/dataType";
import { Actions } from "./types";

export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext);

    return {
        ...state,
        setAllResults: (allResults: results[]) => {
            dispatch({
                type: Actions.SET_ALLRESULTS,
                payload: { allResults }
            });
        },
        setNumberGenerate: (numberGenerate: string) => {
            dispatch({
                type: Actions.SET_NUMBERGENERATE,
                payload: { numberGenerate}
            })
        },
        setSeemsResults: (seemsResults: results[]) => {
            dispatch({
                type: Actions.SET_SEEMSRESULTS,
                payload: { seemsResults }
            })
        },
        setCountsChoices: (countsChoices: number) => {
            dispatch({
                type: Actions.SET_COUNTCHOICES,
                payload: { countsChoices }
            })
        }
    }
}