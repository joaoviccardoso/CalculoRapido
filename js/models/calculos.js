export class Calculos{
    soma(valores){
        return valores.reduce((acc, num) => acc + num, 0);
    }

    subtracao(valores){
        return valores.reduce((acc, num) => acc - num);
    }

    multiplicacao(valores){
        return valores.reduce((acc, num) => acc * num)
    }

    divisao(valores){
        return valores.reduce((acc, num) => acc / num)
    }

    porcentagem(valores){
        const valor = valores[0];
        const porcentagem = valores[1];

        const valorPorcentagem = porcentagem / 100;
        return valorPorcentagem * valor
    }

    regraDeTres(valores){
        const valor1 = valores[0];
        const valor2 = valores[1];
        const valor3 = valores[2];

        const multiplicarValor2e3 = valor2 * valor3;
        return multiplicarValor2e3 / valor1
    }

    mediaAritmetica(valores){
        const total = valores.reduce((acc, num) => acc + num);
        return total / valores.length
    }

    jurosSimples(valores){
        const capital = valores[0];
        const taxa = valores[1];
        const tempoMeses = valores[2];

        const taxaConvertida = taxa / 100
        return capital * taxaConvertida * tempoMeses
    }

    jurosCompostos(valores){
        const capital = valores[0];
        const taxa = valores[1];
        const tempoMeses = valores[2];

        const taxaDecimal = taxa / 100
        const taxaConvertida = 1 + taxaDecimal
        const taxaElevadaPotencia = taxaConvertida ** tempoMeses;

        const montante = capital * taxaElevadaPotencia;

        console.log(montante);
        return montante;
    }

    descontoComercial(valores){
        const valorDoProduto = valores[0];
        const taxa = valores[1];

        const taxaDecimal = taxa / 100;
        const Desconto = valorDoProduto * taxaDecimal;
        return valorDoProduto - Desconto
    }

    calculoDeParcelasFinanciamento(valores){
        const valor = valores[0];
        const taxa = valores[1];
        const tempo = valores[2];

        let i = (taxa / 12) / 100;
        let parcela = (valor * i) / (1 - Math.pow(1 + i, -tempo));
        return parcela.toFixed(2);
    }

}