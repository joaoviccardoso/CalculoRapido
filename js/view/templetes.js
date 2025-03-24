export class Templetes {
    exibirCalculos(idDoBtnCalculo) {
        console.log("click");
        const containerExibirCalculo = document.querySelector(".container-calculo");
        containerExibirCalculo.innerHTML = "";

        const calculos = {
            somaSubtracao: { titulo: "Somar e Subtrair", campos: ["Número 1", "Número 2", "Somar ou Subtrair"] },
            multiplicaoDivisao: { titulo: "Multiplicação e Divisão", campos: ["Número 1", "Número 2"] },
            porcentagem: { titulo: "Porcentagem", campos: ["Valor", "Porcentagem"] },
            regraDeTres: { titulo: "Regra de Três", campos: ["Valor 1", "Valor 2", "X"] },
            mediaAritmetrica: { titulo: "Média Aritmética", campos: ["Número 1", "Número 2", "Número 3"] },
            jurosSimples: { titulo: "Juros Simples", campos: ["Capital", "Taxa (%)", "Tempo"] },
            jurosCompostos: { titulo: "Juros Compostos", campos: ["Capital", "Taxa (%)", "Tempo"] },
            descontoComercial: { titulo: "Desconto Comercial", campos: ["Valor", "Taxa (%)"] },
            calculoDeParcelasFinanciamento: { titulo: "Parcelas e Financiamento", campos: ["Valor", "Juros (%)", "Tempo"] },
            calculoFerias: { titulo: "Cálculo de Férias", campos: ["Salário Base", "Meses Trabalhados"] },
            salario: { titulo: "13º Salário", campos: ["Salário Base", "Meses Trabalhados"] },
            horaExtra: { titulo: "Hora Extra", campos: ["Salário Hora", "Horas Extras"] },
            rescisaoTrabalhista: { titulo: "Rescisão Trabalhista", campos: ["Salário Base", "Tempo de Serviço"] },
            consumoEnergia: { titulo: "Cálculo de Consumo de Energia", campos: ["Potência (W)", "Horas de uso", "Dias no mês"] },
            conversaoMoedas: { titulo: "Conversão de Moedas", campos: ["Valor em moeda A", "Cotação"] },
            conversaoMedidas: { titulo: "Conversão de Medidas", campos: ["Valor", "Unidade de origem", "Unidade de destino"] },
            equacao1grau: { titulo: "Equação do 1º Grau", campos: ["Coeficiente A", "Coeficiente B"] },
            equacao2grau: { titulo: "Equação do 2º Grau", campos: ["Coeficiente A", "Coeficiente B", "Coeficiente C"] },
            areaPerimetro: { titulo: "Área e Perímetro de Figuras Geométricas", campos: ["Base", "Altura", "Raio (se for círculo)"] },
            regraTresComposta: { titulo: "Regra de Três Composta", campos: ["Valor 1", "Valor 2", "Valor 3", "X"] }
        };

        if (calculos[idDoBtnCalculo]) {
            const { titulo, campos } = calculos[idDoBtnCalculo];
            containerExibirCalculo.innerHTML = this.gerarTemplate(titulo, campos);
        } else {
            containerExibirCalculo.innerHTML = "<h4>Por Favor escolha um cálculo válido</h4>";
        }
    }

    gerarTemplate(titulo, campos) {
        let inputsHTML = campos.map(campo => `<label class="">${campo}<input type="number" class="inputs-templete" placeholder="${campo}"></label>`).join("");

        return `
            <div class="container-templete-calculos">
                <h2 class="texto-introducao">${titulo}</h2>
                <div class="container-templete-inputs">
                    ${inputsHTML}
                </div>
                <div class="container-templete-btns">
                    <button class="btn-realizar-calcular">Calcular</button>
                    <button class="btn-comoFazer">Como Fazer</button>
                </div>
            </div>
        `;
    }
}
