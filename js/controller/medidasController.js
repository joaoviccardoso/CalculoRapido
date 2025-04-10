import { TempeltesMedidas } from "../view/templetesMedidas.js";

export class MedidasController {
    constructor(){
        this.containerInput = document.querySelector(".container-templete-inputs");

        this.templeteMedidas = new TempeltesMedidas()
        this.selecionado()
    }

    selecionado(){
        this.inputTipo = document.querySelector(".inputs-templete");
        this.inputTipo.addEventListener("change", () => this.pegarValor())
    }

    pegarValor(){
        let tipoDeConversao = this.inputTipo.value
        console.log(tipoDeConversao)
        let templete;
        switch(tipoDeConversao){
            case "comprimento":
                templete = this.templeteMedidas.comprimento(tipoDeConversao);
                break
            case "peso/massa":
                templete = this.templeteMedidas.pesoMassa(tipoDeConversao);
                break  
            case "volume":
                templete = this.templeteMedidas.volume(tipoDeConversao);
                break
            case "temperatura":
                templete = this.templeteMedidas.temperatura(tipoDeConversao);
                break  
            default:
                console.warn("Operação não reconhecida!");
                return;
        }
        this.containerInput.innerHTML += templete;
    }  
}