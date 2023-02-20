export const formatterNumber = () => ({
    addZero: (numero: number) => {
        if(numero.toString().length == 2) return numero.toString();

        return `0${numero}`;
    }
});