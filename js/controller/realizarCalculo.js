export class RealizarCalculos{
    constructor(){
        this.inputs = Array.from(document.querySelectorAll(".inputs-templete"));
        this.btnEnviar = document.querySelector(".btn-realizar-calcular");

        this.pegarInputs();
    }

    pegarInputs(){
        console.log(this.inputs)
    }
}