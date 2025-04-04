export class Templetes {
    gerarTemplate(titulo, campos, id) {
        let inputsHTML = campos.map(campo => {
            if (titulo === "Rescisão Trabalhista" && campo === "Tipo de Rescisão") {
                return this.templeteSelectRescisao(campo)
            }else if(titulo === "Rescisão Trabalhista" && campo === "Aviso Previo"){
                return this.templeteSelectAvisoPrevio(campo)
            }else if (campo === "Data de Início" || campo === "Data Final"){
                return this.templeteDatas(campo)
            }else {
                return `<label>${campo}<input type="number" class="inputs-templete" placeholder="${campo}"></label>`;
            }
        }).join("");
        
            
        const container = document.createElement("div");
        container.classList.add("container-templete-calculos")

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

    templeteSelectRescisao(campo){
        return `
            <label>${campo}
                <select class="inputs-templete">
                    <option value="Demissão de comum acordo">Demissão de comum acordo</option>
                    <option value="Dispensa sem justa causa">Dispensa sem justa causa</option>
                    <option value="Dispensa com justa causa">Dispensa com justa causa</option>
                    <option value="Pedido de demissão">Pedido de demissão</option>
                </select>
            </label>
                `;
    }

    templeteSelectAvisoPrevio(campo){
        return `
            <label>${campo}
                <select class="inputs-templete">
                    <option value="Trabalhado">Trabalhado</option>
                    <option value="Indenizado">Indenizado</option>
                    <option value="Pedido de demissão">Pedido de demissão</option>
                </select>
            </label>
                `;
    }

    templeteDatas(campo){
       return `<label>${campo}<input type="date" class="inputs-templete"></label>`;
    }


}
