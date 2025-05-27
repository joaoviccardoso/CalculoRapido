import { modal } from "../../utilidades/modal.js";

export function gerarTempletesDosCalculosRealizados(valores){
   return valores.map(valor => {
            // Gera os templates dos cálculos realizados, adaptando-se dinamicamente à quantidade de valores no objeto de resposta
            console.log(valores)
            const resposta = valor.resposta || {};

            if (!valor.resposta) {
                modal.mostrarDialog("Objeto sem resposta:", valor);
            }

            const camposResposta = Object.entries(resposta).map(([chave, valorCampo]) => {
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
