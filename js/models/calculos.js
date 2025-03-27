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

}