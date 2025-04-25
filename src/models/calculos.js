import { api } from "../api/apiMoedas.js";
import { CalculoIrEInss } from "./calculosIrInss.js";
import { CalculosResicao } from "./calculosResicao.js";
import { CalculosConversaoModels } from "./conversaoModels.js";
import { GeometricaCalculos } from "./geometricaCalculos.js";
import { organizarValores } from "../utilidades/organizarValores.js";

export class Calculos{
    constructor(valores = []){
        const [v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0] = valores;
        this.valor1 = v1;
        this.valor2 = v2;
        this.valor3 = v3;
        this.valor4 = v4;
        this.valor5 = v5;
    }

    soma(){
        const resuldado = Number(this.valor1) + Number(this.valor2);
        return organizarValores("Primeiro Valor", this.valor1,"Segundo Valor", this.valor2, "Resuldado", resuldado.toFixed(2))
    }

    subtracao(){
        const resuldado = Number(this.valor1) - Number(this.valor2);
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Resuldado", resuldado.toFixed(2))
    }

    multiplicacao(){
        const resuldado = Number(this.valor1) * Number(this.valor2);
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Resuldado", resuldado.toFixed(2))
    }

    divisao(){
        const resuldado = Number(this.valor1) / Number(this.valor2);
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Resuldado", resuldado.toFixed(2))
    }

    porcentagem(){
        const valorPorcentagem = Number(this.valor2) / 100;
        const resultado = valorPorcentagem * Number(this.valor1)
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Resuldado", resultado.toFixed(2))
    }

    regraDeTres(){
        const multiplicarValor2e3 = Number(this.valor2) * Number(this.valor3);
        const resultado = multiplicarValor2e3 / Number(this.valor1)
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resuldado", resultado.toFixed(2))
    }

    mediaAritmetica(valores){
        const total = Number(this.valor1) + Number(this.valor2) + Number(this.valor3);
        const resultado = total / valores.length
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resuldado", resultado.toFixed(2))
    }

    jurosSimples(){
        const taxaConvertida = Number(this.valor2) / 100
        const resultado = Number(this.valor1) * taxaConvertida * Number(this.valor3)
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resultado", resultado.toFixed(2))
    }

    jurosCompostos(){
        const taxaDecimal = Number(this.valor2) / 100
        const taxaConvertida = 1 + taxaDecimal
        const taxaElevadaPotencia = taxaConvertida **  Number(this.valor3);
        const montante = Number(this.valor1) * taxaElevadaPotencia;

        console.log(montante);
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resultado", resultado.toFixed(2))
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
        const avisoPrevio = valores[5];
        const feriasVencidas = valores[6];

        console.log("Salário Bruto:", salarioBruto);
        console.log("Saldo FGTS:", saldoFgts);
        console.log("Tipo de Demissão:", tipoDeDemissao);
        console.log("Data inicial:", dataInicial);
        console.log("Data inicial:", feriasVencidas);

        return calculosResicao.calcularRescisao(salarioBruto, saldoFgts, dataInicial, dataFinal, tipoDeDemissao, avisoPrevio, feriasVencidas);
    }

    consumoEnergia(valores){
        const potenciaEmWatts = valores[0];
        const horasDeUsoPorDia = valores[1];
        const DiasDeUso = valores[2];
        const valorKwh = valores[3];

        let potenciaEmKw = potenciaEmWatts / 1000;
        let consumoDiario = potenciaEmKw * horasDeUsoPorDia;
        let consumoMensal = consumoDiario * DiasDeUso;
        let custoMensal = consumoMensal * valorKwh;
        console.log("potencia em kw:", potenciaEmKw);
        console.log("consumo diario:", consumoDiario);
        console.log("consumo mensal:", consumoMensal);
        console.log("custo de consumo:", custoMensal);

        return custoMensal;
    }

    async conversaoMoedas(valores){
        const valor = Number(valores[0]);
        const de = valores[1];
        const para = valores[2];

        console.log(valor, de, para);
        const cotacao = await api.getApi(de,para);
        const valorFinal = Number(valor * cotacao);
        console.log(valorFinal, cotacao)
        return valorFinal
    }

    conversaoMedidas(valores){
        const calculosConversao = new CalculosConversaoModels()
        const valor = valores[0];
        const de = valores[1];
        const para = valores[2];
        
        return calculosConversao.chamarCalculoConversao(valor,de,para)
        
    }

    equacao1Grau(valores){
        const coeficienteA= valores[0];
        const coeficienteB = valores[1];

        if (coeficienteA === 0) {
            alert("Isso não é uma equação do 1º grau!");
          } else {
            return -coeficienteB / coeficienteA;
          }
    }

    equacao2Grau(valores){
        const coeficienteA = valores[0];
        const coeficienteB = valores[1];
        const coeficienteC = valores[2];

        const delta = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC;

        console.log(`Delta: ${delta}`);

        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }

        const raiz1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA);
        const raiz2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA);

        return `As raízes da equação são: ${raiz1}, ${raiz2}`;
    }

    areaPerimetro(valores){
        const calculoGeometrica = new GeometricaCalculos();
        const tipoDeEquacao = document.querySelector(".tipo-de-equacao").textContent.trim();
        console.log(tipoDeEquacao)
        if(tipoDeEquacao === "quadrado"){
            return calculoGeometrica.calculoQuadrado(valores);
        }else if(tipoDeEquacao === "retangulo"){
            return calculoGeometrica.calculoRentangulo(valores);
        }else if(tipoDeEquacao === "circulo"){
            return calculoGeometrica.calculoCirculo(valores);
        }else if(tipoDeEquacao === "triangulo"){
            return calculoGeometrica.calculoTrianculo(valores);
        } else{
            alert("erro para calcular");
        }
    }
}