import { api } from "./api/apiMoedas.js";
import { TempletesController } from "./controller/templenteController.js";

const btnsCalculos = document.querySelectorAll(".btn-escolher-calculo");
const templetesController = new TempletesController();

btnsCalculos.forEach(btnCalculo => {
    btnCalculo.addEventListener("click", function(){
        const idDoBtnCalculo = btnCalculo.id;
        templetesController.exibirCalculos(idDoBtnCalculo)
    })
});


api.getApi("USD", "BRL")

