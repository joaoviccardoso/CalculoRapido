export const api = {

    async getApi(de, para){
        const api = await fetch(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
        const resposta = await api.json();
        const chave = `${de}${para}`;
        const cotacao = resposta[chave].bid;
        return cotacao;
    }
}