import { dados } from "../data/data";
import { results } from "../types/dataType";

export const verifyNumber = (numero: string) => {
    const oneArray = numero.split(" ");
    const a1 = oneArray[0];
    const a2 = oneArray[1];
    const a3 = oneArray[2];
    const a4 = oneArray[3];
    const a5 = oneArray[4];
    const a6 = oneArray[5];

    let newArray: results[] = [];
    let verifyResults;

    dados.map(value => {
        verifyResults = value.resultados.split(" ");
        let n = 0;
        for(let i in verifyResults){
            a1 == verifyResults[i] ? n++ : ""
            a2 == verifyResults[i] ? n++ : ""
            a3 == verifyResults[i] ? n++ : ""
            a4 == verifyResults[i] ? n++ : ""
            a5 == verifyResults[i] ? n++ : ""
            a6 == verifyResults[i] ? n++ : "" 
        }
        if(n>2) {
            value.counts = n;
            newArray.push(value);
        }
    });

    return newArray
}