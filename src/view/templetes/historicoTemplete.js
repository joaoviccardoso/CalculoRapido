export function gerarTempletesDosCalculosRealizados(valores){
   return valores.map(valor => {
            // Gera os templates dos cálculos realizados, adaptando-se dinamicamente à quantidade de valores no objeto de resposta
            const camposResposta = Object.entries(valor.resposta)
            .map(([chave, valorCampo]) => {
                return `<p class="font-texto">${chave}: ${valorCampo}</p>`;
            }).join("");

        return `
            <div class="container-historico-resultado">
                <h2 class="texto-instrucao">${valor.calculoRealizado}</h2>
                ${camposResposta}
            </div>
        `;
    }).join("");
}
