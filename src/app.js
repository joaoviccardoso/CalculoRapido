import { TempletesController } from "./controller/templenteController.js";
import { formatarTexto } from "./utilidades/formatarTexto.js";
import { gerarTempletesDosCalculosRealizados } from "./view/templetes/historicoTemplete.js";

    const btnsCalculos = document.querySelectorAll(".btn-escolher-calculo");
    const templetesController = new TempletesController();

    btnsCalculos.forEach(btnCalculo => {
        btnCalculo.addEventListener("click", function(){
            const idDoBtnCalculo = formatarTexto(btnCalculo.id);
            templetesController.exibirCalculos(idDoBtnCalculo)
        })
    });

const btnsEscolherCalculoHeader = document.querySelectorAll(".btn-escolher-calculo-header");

btnsEscolherCalculoHeader.forEach(btnHeader => {
    btnHeader.addEventListener("click", function(){
        const textBtn = formatarTexto(btnHeader.textContent);
        console.log(textBtn)
        templetesController.exibirCalculos(textBtn)
    })
});

const btnHistorico = document.querySelector(".btn-historico");

btnHistorico.addEventListener("click", () =>{
    let calculosSalvos = JSON.parse(localStorage.getItem('calculo'));
    let containerHistorico = document.querySelector(".modal-body");
    let historico = gerarTempletesDosCalculosRealizados(calculosSalvos)
    containerHistorico.innerHTML = historico
})

const btnLimparHistorico = document.querySelector(".btnLimparHistorico");

btnLimparHistorico.addEventListener("click", () =>{
    localStorage.clear()
    location.reload();
})