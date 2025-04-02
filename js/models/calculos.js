import { CalculoIrEInss } from "./calculosIrInss.js";
import { CalculosResicao } from "./calculosResicao.js";

export class Calculos{
    soma(valores){
        const valor1 = Number(valores[0])
        const valor2 = Number(valores[1])
        return valor1 + valor2
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

    calculoFerias(valores){
        const IrOuInss = new CalculoIrEInss()
        const valorBruto = valores[0];
        const mesesTrabalhado = valores[1];
        const diasVendidos = valores[2];
        if (mesesTrabalhado > 12) mesesTrabalhado = 12;
        

        //ferias
        let feriasProporcionais = (valorBruto * mesesTrabalhado) / 12;

        // Adicional de 1/3 
        let adicionalTerco = feriasProporcionais / 3;
        
        // Cálculo do abono pecuniário (dias vendidos)
        let abonoPecuniario = (valorBruto / 30) * diasVendidos * (4 / 3); // Inclui 1/3 do terço constitucional
        
         // Valor bruto total
        let totalBruto = feriasProporcionais + adicionalTerco + abonoPecuniario;
        
        let inss = IrOuInss.calcularInss(feriasProporcionais)

        let baseIR = totalBruto - inss;
        let impostoDeRenda = IrOuInss.calcularIR(baseIR);
        
         // Valor final líquido
        let totalLiquido = totalBruto - inss - impostoDeRenda;
   
        return totalLiquido.toFixed(2), feriasProporcionais.toFixed(2), adicionalTerco.toFixed(2), impostoDeRenda.toFixed(2)
    }

    trezeSalario(valores){
        const IrOuInss = new CalculoIrEInss()
        const valor = valores[0];
        const mesesTrabalhado = valores[1];

        if (mesesTrabalhado > 12) mesesTrabalhado = 12;

        let trezeSala = (valor / 12) * mesesTrabalhado;

        let inss = IrOuInss.calcularInss13(trezeSala);
        let baseIR = trezeSala - inss;

        let ir = IrOuInss.calcularIR(baseIR);
        let valorFinal = trezeSala - inss - ir;

        return valorFinal
      }

    horaExtra(valores){
        const salario = valores[0];
        const horasExtras = valores[1];
       
        let valorDaHoraTrabalhada = salario / 220;
    
        let valorDaHoraExtra = valorDaHoraTrabalhada * 1.5;

        return valorDaHoraExtra * horasExtras
    }

    //arrumar a operação matematica dos dias trabalhados esta funcionadondo de forma errada estou pegando os dias e os meses trabalhodo de forma errada
    rescisaoTrabalhista(valores) {
        const calculosResicao = new CalculosResicao();
        
        const salarioBruto = Number(valores[0]);
        const saldoFgts = Number(valores[1]);
        const dataInicial = valores[2];
        const dataFinal = valores[3];
        const tipoDeDemissao = valores[4];

        let diasTrabalhados = calculosResicao.calcularDiasTrabalhados(dataInicial, dataFinal);
        let mesesTrabalhados = calculosResicao.calcularMesesTrabalhados(dataInicial, dataFinal);

        console.log("Salário Bruto:", salarioBruto);
        console.log("Saldo FGTS:", saldoFgts);
        console.log("Dias Trabalhados:", diasTrabalhados);
        console.log("Meses Trabalhados:", mesesTrabalhados);
        console.log("Tipo de Demissão:", tipoDeDemissao);

        return calculosResicao.calcularRescisao(salarioBruto, diasTrabalhados, mesesTrabalhados, saldoFgts, tipoDeDemissao);
    }
}