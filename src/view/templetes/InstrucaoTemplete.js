export function gerarTempleteInstrucao(instrucao){
    return `
        <div class="s">
            <h2>${instrucao.titulo}</h2>
            <p>${instrucao.descricao}</p>
            <ul>
                ${instrucao.passos.map(passo => `<li>${passo}</li>`).join('')}
            </ul>
        <div>   
    `
}