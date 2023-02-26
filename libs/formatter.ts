export const formatterNumber = () => ({
    addZero: (numero: number) => {
        if(numero.toString().length == 2) return numero.toString();

        return `0${numero}`;
    },
    formatterData: (data: string) => {

        const newData = Date.parse(data);

        const rightData = new Date(newData)

        const dia = rightData.getDate().toString().padStart(2, "0");
        const mes = (rightData.getMonth()+1).toString().padStart(2, "0");
        const ano = rightData.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
});