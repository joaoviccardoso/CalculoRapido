export class InputsTempletes{
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
                    <option value="descontado">descontado</option>
                    <option value="Indenizado">Indenizado</option>
                    <option value="Pedido de demissão">Pedido de demissão</option>
                </select>
            </label>
                `;
    }

    templeteFeriasVencidas(campo){
        return `
            <label>${campo}
                <select class="inputs-templete">
                    <option value="Vencida">Vencida</option>
                    <option value="Paga">Paga</option>
                </select>
            </label>
                `;
    }

    templeteTipodeConversao(campo){
        return `
            <label class="label-select-conversao">${campo}
                <select class="inputs-templete" id="conversao">
                    <option value="escolha">Escolha um Valor</option>
                    <option value="comprimento">Comprimento</option>
                    <option value="peso/massa">Peso/Massa</option>
                    <option value="volume">Volume</option>
                    <option value="temperatura">Temperatura</option>
                </select>
            </label>
                `;
    }

    templeteAreaGeometricas(campo){
        return `
            <label class="label-select-conversao">${campo}
                <select class="inputs-templete" id="geometrica">
                    <option value="">Escolha um valor</option>
                    <option value="quadrado">Quadrado</option>
                    <option value="retangulo">Retângulo</option>
                    <option value="circulo">Círculo</option>
                    <option value="triangulo">Triângulo</option>
                </select>
            </label>
                `;
    }

    templeteDatas(campo){
       return `<label>${campo}<input type="date" class="inputs-templete"></label>`;
    }
}