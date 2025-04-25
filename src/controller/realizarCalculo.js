import { Calculos } from "../models/calculos.js";
import { CalculoIrEInss } from "../models/calculosIrInss.js";

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
        let resposta

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
                resposta = calculos.regraDeTres(valores);
                break
            case "btnMediaAritmetrica":
                resposta = calculos.mediaAritmetica(valores);
                break
            case "btnJurosSimples":
                resposta = calculos.jurosSimples(valores)
                break  
            case "btnJurosCompostos":
                resposta = calculos.jurosCompostos(valores)
                break
            case "btnDescontoComercial":
                resposta = calculos.descontoComercial(valores)
                break 
            case "btnCalculoDeParcelasFinanciamento":
                resposta = calculos.calculoDeParcelasFinanciamento(valores)
                break  
            case "btnCalculoFerias":
                resposta = calculos.calculoFerias(valores)
                break
            case "btnTrezeSalario":
                resposta = calculos.trezeSalario(valores)
                break 
            case "btnHoraExtra":
                resposta = calculos.horaExtra(valores)
                break   
            case "btnRescisaoTrabalhista":
                resposta = calculos.rescisaoTrabalhista(valores)
                break
            case "btnConsumoEnergia":
                resposta = calculos.consumoEnergia(valores)
                break
            case "btnConversaoMoedas":
                resposta = await calculos.conversaoMoedas(valores)
                break
            case "btnConversaoMedidas":
                resposta = calculos.conversaoMedidas(valores)
                break
            case "btnEquacao1Grau":
                resposta = calculos.equacao1Grau(valores)
                break
            case "btnEquacao2Grau":
                resposta = calculos.equacao2Grau(valores)
                break
            case "btnAreaPerimetro":
                resposta = calculos.areaPerimetro(valores)
                break                         
            default:
                console.warn("Operação não reconhecida!");
                return;
        }

        const containerResposta = this.pegarContainerResposta()
    
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