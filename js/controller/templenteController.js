import { Templetes } from "../view/templetes.js";
import { RealizarCalculos } from "./realizarCalculo.js";

export class TempletesController{
    exibirCalculos(idDoBtnCalculo) {
        const templetes = new Templetes();
        const containerExibirCalculo = document.querySelector(".container-calculo");
        containerExibirCalculo.innerHTML = "";

        const calculos = {
            soma: { titulo: "Somar", campos: ["Número 1", "Número 2"], id: "btnSoma" },
            subtracao: { titulo: "Subtrair", campos: ["Número 1", "Número 2"], id: "btnSubtracao" },
            multiplicao: { titulo: "Multiplicação", campos: ["Número 1", "Número 2"], id: "btnMultiplicacao" },
            divisao: { titulo: "Divisão", campos: ["Número 1", "Número 2"], id: "btnDivisao" },
            porcentagem: { titulo: "Porcentagem", campos: ["Valor", "Porcentagem"], id: "btnPorcentagem" },
            regraDeTres: { titulo: "Regra de Três", campos: ["Valor 1", "Valor 2", "Valor 3"], id: "btnRegraDeTres" },
            mediaAritmetrica: { titulo: "Média Aritmética", campos: ["Número 1", "Número 2", "Número 3"], id: "btnMediaAritmetrica" },
            jurosSimples: { titulo: "Juros Simples", campos: ["Capital", "Taxa (%)", "Tempo em meses"], id: "btnJurosSimples" },
            jurosCompostos: { titulo: "Juros Compostos", campos: ["Capital", "Taxa (%)", "Tempo em meses"], id: "btnJurosCompostos" },
            descontoComercial: { titulo: "Desconto Comercial", campos: ["Valor", "Taxa (%)"], id: "btnDescontoComercial" },
            calculoDeParcelasFinanciamento: { titulo: "Parcelas e Financiamento (Sistema Price)", campos: ["Valor", "Juros (%) Anual", "Tempo em meses"], id: "btnCalculoDeParcelasFinanciamento" },
            calculoFerias: { titulo: "Cálculo de Férias", campos: ["Salário Base", "Meses Trabalhados", "Dias vendidos"], id: "btnCalculoFerias" },
            salario: { titulo: "13º Salário", campos: ["Salário Base", "Meses Trabalhados"], id: "btnTrezeSalario" },
            horaExtra: { titulo: "Hora Extra", campos: ["Salário Hora", "Horas Extras"], id: "btnHoraExtra" },
            rescisaoTrabalhista: { titulo: "Rescisão Trabalhista", campos: ["Salário Base", "Tempo de Serviço"], id: "btnRescisaoTrabalhista" },
            consumoEnergia: { titulo: "Cálculo de Consumo de Energia", campos: ["Potência (W)", "Horas de uso", "Dias no mês"], id: "btnConsumoEnergia" },
            conversaoMoedas: { titulo: "Conversão de Moedas", campos: ["Valor em moeda A", "Cotação"], id: "btnConversaoMoedas" },
            conversaoMedidas: { titulo: "Conversão de Medidas", campos: ["Valor", "Unidade de origem", "Unidade de destino"], id: "btnConversaoMedidas" },
            equacao1grau: { titulo: "Equação do 1º Grau", campos: ["Coeficiente A", "Coeficiente B"], id: "btnEquacao1Grau" },
            equacao2grau: { titulo: "Equação do 2º Grau", campos: ["Coeficiente A", "Coeficiente B", "Coeficiente C"], id: "btnEquacao2Grau" },
            areaPerimetro: { titulo: "Área e Perímetro de Figuras Geométricas", campos: ["Base", "Altura", "Raio (se for círculo)"], id: "btnAreaPerimetro" },
            regraTresComposta: { titulo: "Regra de Três Composta", campos: ["Valor 1", "Valor 2", "Valor 3", "X"], id: "btnRegraTresComposta" }
        };        

        if (calculos[idDoBtnCalculo]) {
            const { titulo, campos, id} = calculos[idDoBtnCalculo];

            const templeteCalculo = templetes.gerarTemplate(titulo, campos, id);
            containerExibirCalculo.appendChild(templeteCalculo)

            new RealizarCalculos();
        } else {
            containerExibirCalculo.innerHTML = "<h4>Por Favor escolha um cálculo válido</h4>";
        }
    }
}