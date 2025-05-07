import { api } from "../api/apiMoedas.js";
import { CalculoIrEInss } from "./calculosIrInss.js";
import { CalculosResicao } from "./calculosResicao.js";
import { CalculosConversaoModels } from "./conversaoModels.js";
import { GeometricaCalculos } from "./geometricaCalculos.js";
import { organizarValores } from "../utilidades/organizarValores.js";

export class Calculos{
    constructor(valores = []){
        const [v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = 0] = valores;
        this.valor1 = v1;
        this.valor2 = v2;
        this.valor3 = v3;
        this.valor4 = v4;
        this.valor5 = v5;
        this.valor6 = v6;
        this.valor7 = v7;
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
        return organizarValores("Valor R$", this.valor1 ,"Porcentagem", `${this.valor2}%`, "Resuldado", resultado.toFixed(2))
    }

    regraDeTres(){
        const multiplicarValor2e3 = Number(this.valor2) * Number(this.valor3);
        const resultado = multiplicarValor2e3 / Number(this.valor1)
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resuldado", resultado.toFixed(2))
    }

    mediaAritmetica(){
        const total = Number(this.valor1) + Number(this.valor2) + Number(this.valor3);
        let resultado
        if(this.valor2 === 0 && this.valor3 === 0){
            return alert("Coloque pelo menos dois valores para fazer a media.")
        }else if(!Number(this.valor1) == 0 && !Number(this.valor2) == 0 && !Number(this.valor3) == 0){
            resultado = total / 3
        } else {
            resultado = total / 2
        }
        
        return organizarValores("Primeiro Valor", this.valor1 ,"Segundo Valor", this.valor2, "Terceiro Valor", this.valor3, "Resuldado", resultado.toFixed(2))
    }

    jurosSimples(){
        const taxaConvertida = Number(this.valor2) / 100
        const resultado = Number(this.valor1) * taxaConvertida * Number(this.valor3)
        return organizarValores("Capital Inicial", this.valor1 ,"Taxa Anual", this.valor2, "Tempo em Anos", this.valor3, "Total em Juros", resultado.toFixed(2))
    }

    //Corrigir codigo 
    jurosCompostos(){
        const taxaDecimalAnual = Number(this.valor2) / 100;
        const taxaMensal = taxaDecimalAnual / 12; // converte para taxa mensal
    
        const montanteCapital = Number(this.valor1) * Math.pow(1 + taxaMensal, Number(this.valor3));
        const montanteAportes = Number(this.valor4) * ((Math.pow(1 + taxaMensal, Number(this.valor3)) - 1) / taxaMensal);
        const montanteTotal = montanteCapital + montanteAportes;

        return organizarValores(
            "Capital Inicial", this.valor1,
            "Taxa Anual (%)", this.valor2,
            "Tempo (meses)", this.valor3,
            "Aporte Mensal", this.valor4,
            "Montante Final", montanteTotal.toFixed(2))
    }

    descontoComercial(){
        const taxaDecimal = Number(this.valor2) / 100;
        const Desconto = Number(this.valor1) * taxaDecimal;
        const valorDesconto = Number(this.valor1) - Desconto
        return organizarValores(
            "Valor original", this.valor1 ,
            "Desconto", this.valor2, 
            "Valor Com Desconto", valorDesconto.toFixed(2))
    }


    calculoDeParcelasFinanciamento(){
        let valorFinanciado = Number(this.valor1) - Number(this.valor4);
    
        // Calculando a taxa de juros mensal
        let i = (Number(this.valor2) / 12) / 100;
        
        // Calculando o valor da parcela
        let parcela = (valorFinanciado * i) / (1 - Math.pow(1 + i, -Number(this.valor3)));
        return organizarValores(
            "Valor do Financiamento", this.valor1 ,
            "Juros Anual(%)", this.valor2, 
            "Tempo em Meses", this.valor3,
            "Valor Entrada", this.valor4,
            "Valor de cada parcela", parcela.toFixed(2))
    }

    //corrigir o codigo se vender as ferais tem q calcular o salario das ferias com os dias que ele saio de ferias
    calculoFerias(){
        const IrOuInss = new CalculoIrEInss()
        if (Number(this.valor2) > 12) Number(this.valor2) = 12;
        

        //ferias
        let feriasProporcionais = (Number(this.valor1) * Number(this.valor2)) / 12;

        // Adicional de 1/3 
        let adicionalTerco = feriasProporcionais / 3;
        
        // Cálculo do abono pecuniário (dias vendidos)
        let abonoPecuniario = (Number(this.valor1) / 30) * Number(this.valor3) * (4 / 3); // Inclui 1/3 do terço constitucional
        
         // Valor bruto total
        let totalBruto = feriasProporcionais + adicionalTerco + abonoPecuniario;
        
        let inss = IrOuInss.calcularInss(feriasProporcionais)

        let baseIR = totalBruto - inss;
        let impostoDeRenda = IrOuInss.calcularIR(baseIR);
        
         // Valor final líquido
        let totalLiquido = totalBruto - inss - impostoDeRenda;
        return organizarValores(
            "Salario Bruto", this.valor1 ,
            "Meses Trabalhado", this.valor2, 
            "Dias Vendidos", this.valor3, 
            "Ferais Proporcionais" , feriasProporcionais.toFixed(2), 
            "Adiconal 1/3", adicionalTerco.toFixed(2), 
            "Abono Pecuniário", abonoPecuniario.toFixed(2),
            "INSS",inss.toFixed(2),
            "Imposto De Renda", impostoDeRenda.toFixed(2),
            "Total a Receber", totalLiquido.toFixed(2))
    }

    trezeSalario(){
        const IrOuInss = new CalculoIrEInss()

        if (Number(this.valor2) > 12) Number(this.valor2) = 12;

        let trezeSala = (Number(this.valor1) / 12) * Number(this.valor2);

        let inss = IrOuInss.calcularInss13(trezeSala);
        let baseIR = trezeSala - inss;

        let ir = IrOuInss.calcularIR(baseIR);
        let valorFinal = trezeSala - inss - ir;

        return organizarValores("Salario Bruto", this.valor1 ,"Meses Trabalhado", this.valor2,"INSS", inss.toFixed(2),"IR", ir.toFixed(2), "Total a Receber", valorFinal.toFixed(2))
      }

    horaExtra(){
        let valorDaHoraTrabalhada = Number(this.valor1) / 220;
    
        let valorDaHoraExtra = valorDaHoraTrabalhada * 1.5;

        const valorReceber = valorDaHoraExtra * Number(this.valor2)
        return organizarValores("Salario Bruto", this.valor1 ,"Horas Extras", this.valor2, "Total a Receber", valorReceber.toFixed(2))
    }

    //arrumar a operação matematica dos dias trabalhados esta funcionadondo de forma errada estou pegando os dias e os meses trabalhodo de forma errada
    rescisaoTrabalhista() {
        const calculosResicao = new CalculosResicao();
        const ValorReceber = calculosResicao.calcularRescisao(Number(this.valor1), Number(this.valor2), this.valor3, this.valor4, this.valor5, this.valor6, this.valor7);
        return organizarValores("Salario Bruto", this.valor1 ,
                                "Saldo FGTS", this.valor2, 
                                "Data Inicial", this.valor3, 
                                "Data Final", this.valor4 ,
                                "Tipo de Demissão", this.valor5 , 
                                "Total a Receber",ValorReceber.toFixed(2)
                            )
                                               
    }

    consumoEnergia(){
        let potenciaEmKw = Number(this.valor1) / 1000;
        let consumoDiario = potenciaEmKw * Number(this.valor2);
        let consumoMensal = consumoDiario * Number(this.valor3);
        let custoMensal = consumoMensal * Number(this.valor4);
        console.log("potencia em kw:", potenciaEmKw);
        console.log("consumo diario:", consumoDiario);
        console.log("consumo mensal:", consumoMensal);
        console.log("custo de consumo:", custoMensal);

        return organizarValores("Potencia em Kw", potenciaEmKw ,
                                "Consumo Diario", consumoDiario, 
                                "Consumo Mensal", consumoMensal, 
                                "Custo Mensal" ,custoMensal.toFixed(2)
                            )
    }

    async conversaoMoedas(){
        const cotacao = await api.getApi(this.valor2,this.valor3);
        const valorFinal = Number(this.valor1 * cotacao);
        console.log(valorFinal, cotacao)
        return organizarValores("Valor Para Conversão", this.valor1 ,
                                "De", this.valor2, 
                                "Para", this.valor3, 
                                "Valor Convertido", valorFinal.toFixed(2)
                            )
    }

    conversaoMedidas(){
        const calculosConversao = new CalculosConversaoModels()
        const valorConvertido = calculosConversao.chamarCalculoConversao(Number(this.valor1),this.valor2,this.valor3)
        return organizarValores("Valor", this.valor1 ,
                                "De", this.valor2, "Para", this.valor3, 
                                "Valor Convertido", 
                                valorConvertido.toFixed(2)
                            )
    }

    //forma de fazer melhoria esta aceitando apenas o calculo simples
    equacao1Grau(){
        if (Number(this.valor1) === 0) {
            alert("Isso não é uma equação do 1º grau!");
          } else {
            const resultado = -Number(this.valor2) / Number(this.valor1);
            return organizarValores("coeficiente A", this.valor1 ,
                                    "coeficienteB", this.valor2,
                                    "Valor", resultado.toFixed(2)
                                )
          }
    }

    equacao2Grau(){
        const delta = Number(this.valor2) * Number(this.valor2) - 4 * Number(this.valor1) * Number(this.valor3);

        console.log(`Delta: ${delta}`);

        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }

        const raiz1 = (-Number(this.valor2) + Math.sqrt(delta)) / (2 * Number(this.valor1));
        const raiz2 = (-Number(this.valor2) - Math.sqrt(delta)) / (2 * Number(this.valor1));

        return organizarValores("coeficiente A", this.valor1 ,"coeficienteB", this.valor2,"coeficienteC", this.valor3,"Raiz 1", raiz1.toFixed(2),"Raiz 2", raiz2.toFixed(2) )
    }

    areaPerimetro(){
        const calculoGeometrica = new GeometricaCalculos();
        const tipoDeEquacao = document.querySelector(".tipo-de-equacao").textContent.trim();
        console.log(tipoDeEquacao)
        switch (tipoDeEquacao) {
            case "quadrado":
                const resultadoQuadrado = calculoGeometrica.calculoQuadrado(this.valor1);
                return organizarValores(
                    "Lado", this.valor1,
                    "Area", resultadoQuadrado.area.toFixed(2),
                    "Perimetro", resultadoQuadrado.perimetro.toFixed(2)
                );
        
            case "retangulo":
                const resultadoRetangulo = calculoGeometrica.calculoRentangulo(this.valor1, this.valor2);
                return organizarValores(
                    "Base", this.valor1,
                    "Altura", this.valor2,
                    "Area", resultadoRetangulo.area,
                    "Perimetro", resultadoRetangulo.perimetro
                );
        
            case "circulo":
                const resultadoCirculo = calculoGeometrica.calculoCirculo(this.valor1);
                return organizarValores(
                    "Raio", this.valor1,
                    "Area", resultadoCirculo.area,
                    "Perimetro", resultadoCirculo.perimetro
                );
        
            case "triangulo":
                const resultadoTriangulo = calculoGeometrica.calculoTrianculo(
                    Number(this.valor1),
                    Number(this.valor2),
                    Number(this.valor3),
                    Number(this.valor4),
                    Number(this.valor5)
                );
                return organizarValores(
                    "Base", this.valor1,
                    "Altura", this.valor2,
                    "Lado 1", this.valor3,
                    "Lado 2", this.valor4,
                    "Lado 3", this.valor5,
                    "Area", resultadoTriangulo.area.toFixed(2),
                    "Perimetro", resultadoTriangulo.perimetro.toFixed(2)
                );
        
            default:
                alert("erro para calcular");
                break;
        }
        
    }
}