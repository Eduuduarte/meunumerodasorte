import { formatterNumber } from "../libs/formatter";

const formatter = formatterNumber()

export const valueTrue = (number: number, numberGenerate: string) => {
        let removeFirst = numberGenerate.split(" ")
        removeFirst.shift();
        removeFirst.push(formatter.addZero(number))
        removeFirst.sort();

        return `${removeFirst[0]} ${removeFirst[1]} ${removeFirst[2]} ${removeFirst[3]} ${removeFirst[4]} ${removeFirst[5]}`
}

export const valueFalse = (number: number, numberGenerate: string) => {
    let removeNumber = numberGenerate.split(" ")
      const newValue = removeNumber.filter(value => value !== formatter.addZero(number));
      newValue.push("00");
      newValue.sort();

      return `${newValue[0]} ${newValue[1]} ${newValue[2]} ${newValue[3]} ${newValue[4]} ${newValue[5]}`
}