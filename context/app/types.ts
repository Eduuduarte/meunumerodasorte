import { type } from "os";
import { Dispatch, ReactNode } from "react";
import { results } from "../../types/dataType";

export type DataType = {
    allResults: results[];
    numberGenerate: string;
    seemsResults: results[] | null;
    countsChoices: number;
}

export type ActionType = {
    type: Actions,
    payload?: any;
}

export type ContextType = {
    state: DataType;
    dispatch: Dispatch<ActionType>
}

export type ProviderType = {
    children: ReactNode
}

export enum Actions {
    SET_ALLRESULTS,
    SET_NUMBERGENERATE,
    SET_SEEMSRESULTS,
    SET_COUNTCHOICES
}