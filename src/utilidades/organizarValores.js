export function organizarValores(...args){
    let resultado = {};
    for (let i = 0; i < args.length; i += 2) {
        const chave = args[i];
        const valor = args[i + 1];
        resultado[chave] = valor;
      }
    
    return resultado
}