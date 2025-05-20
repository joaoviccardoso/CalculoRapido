import { Calculos } from "../models/calculos.js";
import { modal } from "../utilidades/modal.js";

export class RealizarCalculos{
    constructor(){
        this.btnEnviar = document.querySelector(".btn-realizar-calcular");
        this.eventoDeclick();
    }

    eventoDeclick(){
        this.btnEnviar.addEventListener("click", () => this.pegarValores())
    }

    pegarValores(){
        const valores = this.pegarInputs();
        const idBtn = this.pegarIdBtn();
        this.chamarCalculo(valores, idBtn)
    }

    async chamarCalculo(valores, idBtn){
        let historico = JSON.parse(localStorage.getItem("calculo")) || [];
        let resposta

        let arrayValores = Object.values(valores)
        let todosValoresZeros = arrayValores.every(valor => valor === 0);
        if(todosValoresZeros){
            modal.mostrarDialog("Ops! Nenhum valor válido", "Você precisa informar pelo menos um número diferente de zero para calcular.");
            return
        }

        console.log(valores)

        const calculos = new Calculos(valores)
        switch(idBtn){
            case "btnSoma":
                resposta = calculos.soma();
                break
            case "btnSubtracao":
                resposta = calculos.subtracao();
                break  
            case "btnMultiplicacao":
                resposta = calculos.multiplicacao();
                break
            case "btnDivisao":
                resposta = calculos.divisao();
                break
            case "btnPorcentagem":
                resposta = calculos.porcentagem();
                break
            case "btnRegraDeTres":
                resposta = calculos.regraDeTres();
                break
            case "btnMediaAritmetrica":
                resposta = calculos.mediaAritmetica();
                break
            case "btnJurosSimples":
                resposta = calculos.jurosSimples()
                break  
            case "btnJurosCompostos":
                resposta = calculos.jurosCompostos()
                break
            case "btnDescontoComercial":
                resposta = calculos.descontoComercial()
                break 
            case "btnCalculoDeParcelasFinanciamento":
                resposta = calculos.calculoDeParcelasFinanciamento()
                break  
            case "btnCalculoFerias":
                resposta = calculos.calculoFerias()
                break
            case "btnTrezeSalario":
                resposta = calculos.trezeSalario()
                break 
            case "btnHoraExtra":
                resposta = calculos.horaExtra()
                break   
            case "btnRescisaoTrabalhista":
                resposta = calculos.rescisaoTrabalhista()
                break
            case "btnConsumoEnergia":
                resposta = calculos.consumoEnergia()
                break
            case "btnConversaoMoedas":
                resposta = await calculos.conversaoMoedas()
                break
            case "btnConversaoMedidas":
                resposta = calculos.conversaoMedidas()
                break
            case "btnEquacao1Grau":
                resposta = calculos.equacao1Grau()
                break
            case "btnEquacao2Grau":
                resposta = calculos.equacao2Grau()
                break
            case "btnAreaPerimetro":
                resposta = calculos.areaPerimetro()
                break                         
            default:
                //adicionar dialog de erro
                modal.mostrarDialog("Algo deu errado 😕","Não conseguimos entender qual cálculo você deseja fazer. Tente escolher novamente uma opção no menu.");
                return;
        }

        //adiciona os calculos realizados no localstorage
        let calculoRealizado = document.querySelector("#nomeDoCalculo").textContent
        historico.push({calculoRealizado , resposta})
        localStorage.setItem("calculo", JSON.stringify(historico))

        const containerResposta = this.pegarContainerResposta()
        containerResposta.innerHTML = "";
        for (const chave in resposta) {
            const paragrafo = document.createElement("p");
            paragrafo.textContent = `${chave}: ${resposta[chave]}`;
            containerResposta.appendChild(paragrafo);
        }
        }

    pegarInputs(){
        this.inputs = Array.from(document.querySelectorAll(".inputs-templete"));
        return this.inputs.map(input => input.value || 0);
    }

    pegarIdBtn(){
        return this.btnEnviar.id;
    }

    pegarContainerResposta(){
        return document.querySelector(".container-templete-resultado");
    }
}

