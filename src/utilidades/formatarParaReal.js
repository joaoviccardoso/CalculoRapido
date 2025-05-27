export const FormatarResultado = {
    formatarParaReal(valor) {
        return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    },

    formatarPorcentagem(valor) {
        return `${valor}%`;
    }
}

