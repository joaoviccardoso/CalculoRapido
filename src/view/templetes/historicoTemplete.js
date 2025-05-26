export function gerarTempletesDosCalculosRealizados(valores){
   return valores.map(valor => {
            // Gera os templates dos cálculos realizados, adaptando-se dinamicamente à quantidade de valores no objeto de resposta
            console.log(valores)
            const camposResposta = Object.entries(valor.resposta).map(([chave, valorCampo]) => {
                return `<tr>
                            <td>${chave}</td>  
                            <td>${valorCampo}</td>
                        </tr>`;
            }).join("");

        return `
            <table class="tabela-resposta">
                <thead class="tabela-head">
                    <th class="texto-instrucao">${valor.calculoRealizado}</th>
                </thead>
                <tbody class="tabela-corpo">
                    ${camposResposta}
                </tbody>
                
            </table>
        `;
    }).join("");
}
