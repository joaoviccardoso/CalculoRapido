export class TempeltesMedidas{
    comprimento(tipoDeConversao){
        return `
        <label class="label-container">Unidade de Conversao ${tipoDeConversao}
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </label>

        <div class="label-container">
            <label class="texto-select">De</label>
            <select class="inputs-templete select-padrao unidade-de">
                <option value="mm">Milímetros</option>
                <option value="cm">Centímetros</option>
                <option value="m">Metros</option>
                <option value="km">Quilômetros</option>
            </select>
        </div>

        <div class="label-container">
            <label class="texto-select">Para</label>
            <select class="inputs-templete select-padrao unidade-para">
                <option value="mm">Milímetros</option>
                <option value="cm">Centímetros</option>
                <option value="m">Metros</option>
                <option value="km">Quilômetros</option>
            </select>
        </div>`
    }

    pesoMassa(tipoDeConversao){
        return `

        <label class="label-container">Unidade de Conversao ${tipoDeConversao}
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </label>

        <div class="label-container">
            <label class="texto-select">De</label>
            <select class="inputs-templete select-padrao unidade-de">
                <option value="mg">Miligramas</option>
                <option value="g">Gramas</option>
                <option value="kg">Quilogramas</option>
                <option value="t">Toneladas</option>
            </select>
        </div>

        <div class="label-container">
            <label class="texto-select">Para</label>
            <select class="inputs-templete select-padrao unidade-para">
                <option value="mg">Miligramas</option>
                <option value="g">Gramas</option>
                <option value="kg">Quilogramas</option>
                <option value="t">Toneladas</option>
            </select>
        </div>    
            `
    }

    volume(tipoDeConversao){
        return `
        <label class="label-container">Unidade de Conversao ${tipoDeConversao}
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </label>

        <div class="label-container">
            <label class="texto-select">De</label>
            <select class="inputs-templete select-padrao unidade-de">
                <option value="ml">Mililitros</option>
                <option value="l">Litros</option>
                <option value="m3">Metros cúbicos</option>
                <option value="gal">Galões</option>
            </select>
        </div>
            
        <div class="label-container">
            <label class="texto-select">Para</label>
            <select class="inputs-templete select-padrao unidade-para">
                <option value="ml">Mililitros</option>
                <option value="l">Litros</option>
                <option value="m3">Metros cúbicos</option>
                <option value="gal">Galões</option>
            </select>
        </div>`
    }

    temperatura(tipoDeConversao){
        return `
        <label class="label-container">Unidade de Conversao ${tipoDeConversao}
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </label>

        <div class="label-container">
            <label class="texto-select">De</label>
            <select class="inputs-templete select-padrao unidade-de">
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>
        </div>
            
        <div class="label-container">
            <label class="texto-select">Para</label>
            <select class="inputs-templete select-padrao unidade-para">
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>
        </div>`
    }
}