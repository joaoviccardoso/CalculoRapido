
export class TempletesContainerCalculo {

    templeteCalculos(inputsHTML, titulo, id){
        const container = document.createElement("div");
        container.classList.add("container-templete-calculos")
        console.log("certo")
        container.innerHTML = `
                <h2 class="texto-introducao">${titulo}</h2>
                <div class="container-templete-inputs">
                    ${inputsHTML}
                </div>
                <div class="container-templete-btns">
                    <button class="btn-realizar-calcular" id="${id}">Calcular</button>
                    <button class="btn-comoFazer">Como Fazer</button>
                </div>
                <div class="container-templete-resultado">

                </div>
        `;

        return container
    }
}
