export class TempeltesMedidas{
    constructor(){
        this.inputTipo = document.querySelector(".inputs-templete");
        this.containerInput = document.querySelector(".container-templete-inputs");

        this.selecionado()
    }

    selecionado(){
        this.inputTipo.addEventListener("change", () => this.pegarValor())
    }

    pegarValor(){
        let tipoDeConversao = this.inputTipo.value
        console.log(tipoDeConversao)
        let templete;
        switch(tipoDeConversao){
            case "comprimento":
                templete = this.comprimento(tipoDeConversao);
                this.containerInput.innerHTML += templete;
                break
            case "peso/massa":
                templete = this.pesoMassa(tipoDeConversao);
                break  
            case "volume":
                templete = this.volume(tipoDeConversao);
                break
            case "temperatura":
                templete = this.temperatura(tipoDeConversao);
                break  
            default:
                console.warn("Operação não reconhecida!");
                return;
        }
    }  

    comprimento(tipoDeConversao){
        return `
        <label>${tipoDeConversao}</label>
        <div class="input-group">
            <select class="inputs-templete unidade-de">
                <option value="mm">Milímetros</option>
                <option value="cm">Centímetros</option>
                <option value="m">Metros</option>
                <option value="km">Quilômetros</option>
            </select>
            
            <input type="number" class="valor-converter" placeholder="Digite o valor">
        </div>

            <select class="inputs-templete unidade-para">
                <option value="mm">Milímetros</option>
                <option value="cm">Centímetros</option>
                <option value="m">Metros</option>
                <option value="km">Quilômetros</option>
            </select>`
    }
}