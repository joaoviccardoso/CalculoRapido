import { TempletesContainerCalculo } from "../view/templetes/templetesCalculos.js";
import { MedidasController } from "./medidasController.js";
import { RealizarCalculos } from "./realizarCalculo.js";
import { regrasDeTemplate } from "../view/regrasTempletes.js";
import { InputsTempletes } from "../view/templetes/InputsTempletes.js";
import { modal } from "../utilidades/modal.js";
import { instrucoes } from "../api/comoFazerInfo.js";
import { gerarTempleteInstrucao } from "../view/templetes/InstrucaoTemplete.js";


export class TempletesController{
    constructor(){
        this.templeteCalculo = new TempletesContainerCalculo();
        this.regras = regrasDeTemplate(InputsTempletes);
    }

    exibirCalculos(idDoBtnCalculo) {
        const containerExibirCalculo = document.querySelector(".container-calculo");

        const calculos = {
            soma: { titulo: "Somar", campos: ["Número 1", "Número 2"], id: "btnSoma" },
            subtracao: { titulo: "Subtrair", campos: ["Número 1", "Número 2"], id: "btnSubtracao" },
            multiplicacao: { titulo: "Multiplicação", campos: ["Número 1", "Número 2"], id: "btnMultiplicacao" },
            divisao: { titulo: "Divisão", campos: ["Número 1", "Número 2"], id: "btnDivisao" },
            porcentagem: { titulo: "Porcentagem %", campos: ["Valor R$:", "Porcentagem %"], id: "btnPorcentagem" },
            regradetres: { titulo: "Regra de Três", campos: ["Valor A (A --esta para--> B)", "Valor B", "C (C --Esta Para--> X)"], id: "btnRegraDeTres" },
            mediaaritmetica: { titulo: "Média Aritmética", campos: ["Número 1", "Número 2", "Número 3"], id: "btnMediaAritmetrica" },
            jurossimples: { titulo: "Juros Simples", campos: ["Capital", "Taxa Anual(%)", "Tempo em anos"], id: "btnJurosSimples" },
            juroscompostos: { titulo: "Juros Compostos", campos: ["Capital", "Taxa (%)", "Tempo em meses", "Aporte Mensal"], id: "btnJurosCompostos" },
            descontocomercial: { titulo: "Desconto Comercial", campos: ["Valor Original", "Desconto(%)"], id: "btnDescontoComercial" },
            calculodeparcelasefinanciamentos: { titulo: "Parcelas e Financiamento (Sistema Price)", campos: ["Valor", "Juros (%) Anual", "Tempo em meses", "Valor Entrada"], id: "btnCalculoDeParcelasFinanciamento" },
            calculodeferias: { titulo: "Cálculo de Férias", campos: ["Salário Base", "Meses Trabalhados", "Dias vendidos"], id: "btnCalculoFerias" },
            salario13º: { titulo: "13º Salário", campos: ["Salário Base", "Meses Trabalhados"], id: "btnTrezeSalario" },
            horaextra: { titulo: "Hora Extra", campos: ["Salário Hora", "Horas Extras"], id: "btnHoraExtra" },
            rescisaotrabalhista: { titulo: "Rescisão Trabalhista", campos: ["Salário Base", "Saldo FGTS" , "Data de Início", "Data Final" , "Tipo de Rescisão", "Aviso Previo", "Ferias Vencidas"], id: "btnRescisaoTrabalhista" },
            calculodeconsumodeenergia: { titulo: "Cálculo de Consumo de Energia", campos: ["Potência (W)", "Horas de uso", "Dias no mês", "Preço KWH"], id: "btnConsumoEnergia" },
            conversaodemoedas: { titulo: "Conversão de Moedas", campos: ["Valor em moeda", "Converter de", "Para"], id: "btnConversaoMoedas" },
            conversaodemedidas: { titulo: "Conversão de Medidas", campos: ["Tipo De Conversão"], id: "btnConversaoMedidas" },
            equacaodo1ºgrau: { titulo: "Equação do 1º Grau (equações do tipo padrão)", campos: ["Coeficiente A", "Coeficiente B"], id: "btnEquacao1Grau" },
            equacaodo2ºgrau: { titulo: "Equação do 2º Grau", campos: ["Coeficiente A", "Coeficiente B", "Coeficiente C"], id: "btnEquacao2Grau" },
            areaeperimetrodefigurasgeometricas: { titulo: "Área e Perímetro", campos: ["Tipo de Forma Geométricas"], id: "btnAreaPerimetro" },
        };        

        if(calculos[idDoBtnCalculo] === undefined){
            modal.mostrarDialog("Hmm... não encontramos essa operação","Para continuar, selecione um cálculo no menu lateral ou, se estiver no celular, toque no botão de menu.");
            return
        } else{
            containerExibirCalculo.innerHTML = "";
            const { titulo, campos, id} = calculos[idDoBtnCalculo];

            const templeteCalculo = this.gerarTemplate(titulo, campos, id);
            containerExibirCalculo.appendChild(templeteCalculo)

            const btnComoFazer = document.querySelector(".btn-comoFazer");
            btnComoFazer.addEventListener("click", () => {
                const containerResultado = document.querySelector(".container-templete-resultado")
                const id = btnComoFazer.id;
                console.log(id)
                const instrucao = instrucoes.find(item => item.id === id);

                if(!instrucao){
                    modal.mostrarDialog("Erro para realizar a função", "Erro do servidor")
                    location.reload();
                }

                const templeteInstrucao = gerarTempleteInstrucao(instrucao);
                containerResultado.innerHTML = templeteInstrucao;
            })
            new MedidasController();
            new RealizarCalculos();
        }
    }

    gerarTemplate(titulo, campos, id) {

        let inputsHTML = campos.map(campo => {

            const regra = this.regras.find(regra => regra.condicao(titulo, campo));
            
            if (regra) {
                return regra.template(campo);
            }
            return `<div class="label-container">
                        <label class="texto-select">${campo}</label>
                        <input type="number" class="inputs-templete" placeholder="${campo}">
                    </div>`;
        }).join("");
        

        return this.templeteCalculo.templeteCalculos(inputsHTML, titulo, id)
    }
}