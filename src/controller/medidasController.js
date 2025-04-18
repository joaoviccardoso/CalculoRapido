import { TempleteGeometrica } from "../view/templetes/templetesGeometrica.js";
import { TempeltesMedidas } from "../view/templetes/templetesMedidas.js";

export class MedidasController {
    constructor(){
        this.containerInput = document.querySelector(".container-templete-inputs");
    
        this.templeteGeometrica = new TempleteGeometrica();
        this.templeteMedidas = new TempeltesMedidas();
        this.selecionado()
    }

    selecionado(){
        this.inputTipo = document.querySelector(".inputs-templete");
        if(this.inputTipo.id === "conversao" || this.inputTipo.id === "geometrica"){
            this.inputTipo.addEventListener("change", () => this.pegarValor())
        } else {
            return
        }
    }

    pegarValor(){
        this.botaoConversao = document.querySelector(".label-select-conversao");
        let formadoInputTemplete = this.inputTipo.value
        let inputId = this.inputTipo.id;
        this.botaoConversao.remove();
        console.log(formadoInputTemplete)
        let templete;

        if(inputId === "conversao"){
            switch(formadoInputTemplete){
                case "comprimento":
                    templete = this.templeteMedidas.comprimento(formadoInputTemplete);
                    break
                case "peso/massa":
                    templete = this.templeteMedidas.pesoMassa(formadoInputTemplete);
                    break  
                case "volume":
                    templete = this.templeteMedidas.volume(formadoInputTemplete);
                    break
                case "temperatura":
                    templete = this.templeteMedidas.temperatura(formadoInputTemplete);
                    break  
                default:
                    console.warn("Operação não reconhecida!");
                    return;
            }
        } else if(inputId === "geometrica"){
            switch(formadoInputTemplete){
                case "quadrado":
                    templete = this.templeteGeometrica.quadrado(formadoInputTemplete);
                    break
                case "retangulo":
                    templete = this.templeteGeometrica.retangulo(formadoInputTemplete);
                    break  
                case "circulo":
                    templete = this.templeteGeometrica.circulo(formadoInputTemplete);
                    break
                case "triangulo":
                    templete = this.templeteGeometrica.triangulo(formadoInputTemplete);
                    break  
                default:
                    console.warn("Operação não reconhecida!");
                    return;
            }
        }
        
        this.containerInput.innerHTML += templete;
    } 
}