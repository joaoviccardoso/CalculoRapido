

export class InputsTempletes{
    templeteSelectRescisao(campo){
        return `
            <div class="label-container">
            <label class="texto-select">${campo}</label>
                <select class="inputs-templete select-padrao">
                    <option value="Dispensa sem justa causa">Dispensa sem justa causa</option>
                    <option value="Dispensa com justa causa">Dispensa com justa causa</option>
                    <option value="Pedido de demissão">Pedido de demissão</option>
                </select>
            </div>
                `;
    }

    templeteSelectAvisoPrevio(campo){
        return `
            <div class="label-container">
            <label class="texto-select">${campo}</label>
                <select class="inputs-templete select-padrao">
                    <option value="Trabalhado">Trabalhado</option>
                    <option value="descontado">descontado</option>
                    <option value="Indenizado">Indenizado</option>
                </select>
            </div>
                `;
    }

    templeteFeriasVencidas(campo){
        return `
            <div class="label-container">
            <label class="texto-select">${campo}</label>
                <select class="inputs-templete select-padrao">
                    <option value="Vencida">Vencida</option>
                    <option value="Paga">Paga</option>
                </select>
            </div>
                `;
    }

    templeteTipodeConversao(campo){
        return `
            <div class="label-select-conversao label-container">
            <label class="texto-select">${campo}</label>
                <select class="inputs-templete select-padrao" id="conversao">
                    <option value="escolha">Escolha um Valor</option>
                    <option value="comprimento">Comprimento</option>
                    <option value="peso/massa">Peso/Massa</option>
                    <option value="volume">Volume</option>
                    <option value="temperatura">Temperatura</option>
                </select>
            </div>
                `;
    }

    templeteAreaGeometricas(campo){
        return `
            <div class="label-select-conversao label-container">
            <label class="texto-select">${campo}</label>
                <select class="inputs-templete select-padrao" id="geometrica">
                    <option value="">Escolha um valor</option>
                    <option value="quadrado">Quadrado</option>
                    <option value="retangulo">Retângulo</option>
                    <option value="circulo">Círculo</option>
                    <option value="triangulo">Triângulo</option>
                </select>
            </div>
                `;
    }

    templeteConversaoMoedas(campo){
        return `
        <div class="label-select-moedas label-container">
        <label class="texto-select">${campo}</label>
            <select class="inputs-templete select-padrao" id="conversao">
                <option value="escolha">Escolha um Valor</option>
                <option value="USD">Dólar Americano (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">Libra Esterlina (GBP)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ARS">Peso Argentino (ARS)</option>
                <option value="BRL">Real Brasileiro (BRL)</option>
            </select>
        </div>
            `;
    }

    templeteDatas(campo){
       return `<div class="label-container">
       <label class="texto-select">${campo}</label><input type="date" class="inputs-templete select-padrao"></div>`;
    }
}