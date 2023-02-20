import { formatterNumber } from "../libs/formatter";
import { numeroDaSorte } from "../libs/randomNumber";

export const genarateNumber = () => {
    const random = numeroDaSorte();
    const numero = formatterNumber();

    let numberArray = [];
    let n1;
    let n2;
    let n3;
    let n4;
    let n5;
    let n6;

    do {
        n1 = random.randomNumber();
        n2 = random.randomNumber();
        n3 = random.randomNumber();
        n4 = random.randomNumber();
        n5 = random.randomNumber();
        n6 = random.randomNumber();
  
      } while (
        n1 === n2 ||
        n1 === n3 || n2 === n3 ||
        n1 === n4 || n2 === n4 || n3 === n4 ||
        n1===n5 || n2===n5 || n3===n5 || n4===n5 ||
        n1===n6 || n2===n6 || n3===n6 || n4===n6 || n5===n6
      );

      n1 = numero.addZero(n1);
      n2 = numero.addZero(n2);
      n3 = numero.addZero(n3);
      n4 = numero.addZero(n4);
      n5 = numero.addZero(n5);
      n6 = numero.addZero(n6);

      numberArray.push(n1, n2, n3, n4, n5, n6);
      numberArray.sort();
      
      n1 = numberArray[0];
      n2 = numberArray[1];
      n3 = numberArray[2];
      n4 = numberArray[3];
      n5 = numberArray[4];
      n6 = numberArray[5];

    const myNumber =`${n1} ${n2} ${n3} ${n4} ${n5} ${n6}`

    return myNumber;
}