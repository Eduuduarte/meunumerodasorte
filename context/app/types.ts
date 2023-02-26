import { type } from "os";
import { Dispatch, ReactNode } from "react";
import { results } from "../../types/dataType";

export type DataType = {
    allResults: results[] | null;
    numberGenerate: string;
    seemsResults : results[] | null;
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
    SET_SEEMSRESULTS
}