export function gerarTempleteInstrucao(instrucao){
    return `
        <div class="container-instrucao">
            <h2 class="texto-instrucao">${instrucao.titulo}</h2>
            <p class=".font-texto">${instrucao.descricao}</p>
            <ul class="">
                ${instrucao.passos.map(passo => `<li>${passo}</li>`).join('')}
            </ul>
        <div>   
    `
}