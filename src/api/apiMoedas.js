import { modal } from "../utilidades/modal.js";

export const api = {

    async getApi(de, para){
        try {
            const api = await fetch(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
            const resposta = await api.json();
            const chave = `${de}${para}`;

            if (!resposta[chave] || !resposta[chave].bid) {
                throw new Error(`Cotação não encontrada para ${chave}`);
            }

            const cotacao = resposta[chave].bid;
            return cotacao;
        } catch (error) {
            modal.mostrarDialog("Erro ao buscar a cotação:", error);
            return
        }
        
    }
}