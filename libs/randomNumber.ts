export const numeroDaSorte = () => ({

    randomNumber: () => {
        let numero = Math.floor(Math.random() * 61);
        for (let i = numero; i == 0; i = numero) {
            numero = Math.floor(Math.random() * 61)
        }
        return numero;
    }

})