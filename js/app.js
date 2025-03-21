import { Templetes } from "./view/templetes.js";

const btnsCalculos = document.querySelectorAll(".btn-escolher-calculo");
const templetes = new Templetes();

btnsCalculos.forEach(btnCalculo => {
    btnCalculo.addEventListener("click", function(){
        const idDoBtnCalculo = btnCalculo.id;
        templetes.exibirCalculos(idDoBtnCalculo)
    })
});