import { Calculos } from "../models/calculos.js";

export class RealizarCalculos{
    constructor(){
        this.inputs = Array.from(document.querySelectorAll(".inputs-templete"));
        this.btnEnviar = document.querySelector(".btn-realizar-calcular");

        this.calculos = new Calculos();
        this.eventoDeclick();
    }

    pegarValores(){
        const valores = this.pegarInputs();
        const idBtn = this.pegarIdBtn();
        this.chamarCalculo(valores, idBtn)
    }

    chamarCalculo(valores, idBtn){
        let resposta

        switch(idBtn){
            case "btnSoma":
                resposta = this.calculos.soma(valores);
                break
            case "btnSubtracao":
                resposta = this.calculos.subtracao(valores);
                break  
            case "btnMultiplicacao":
                resposta = this.calculos.multiplicacao(valores);
                break
            case "btnDivisao":
                resposta = this.calculos.divisao(valores);
                break
            case "btnPorcentagem":
                resposta = this.calculos.porcentagem(valores);
                break
            case "btnRegraDeTres":
                resposta = this.calculos.regraDeTres(valores);
                break
            case "btnMediaAritmetrica":
                resposta = this.calculos.mediaAritmetica(valores);
                break
            case "btnJurosSimples":
                resposta = this.calculos.jurosSimples(valores)
                break  
            case "btnJurosCompostos":
                resposta = this.calculos.jurosCompostos(valores)
                break
            case "btnDescontoComercial":
                resposta = this.calculos.descontoComercial(valores)
                break 
            case "btnCalculoDeParcelasFinanciamento":
                resposta = this.calculos.calculoDeParcelasFinanciamento(valores)
                break  
            default:
                console.warn("Operação não reconhecida!");
                return;
        }

       const containerResposta = this.pegarContainerResposta()
       containerResposta.innerHTML = resposta;
    }

    eventoDeclick(){
        this.btnEnviar.addEventListener("click", () => this.pegarValores())
    }

    pegarInputs(){
        return this.inputs.map(input => Number(input.value || 0));
    }

    pegarIdBtn(){
        return this.btnEnviar.id;
    }

    pegarContainerResposta(){
        return document.querySelector(".container-templete-resultado");
    }
}