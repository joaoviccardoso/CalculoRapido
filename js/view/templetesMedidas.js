export class TempeltesMedidas{
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
            
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </div>

            <select class="inputs-templete unidade-para">
                <option value="mm">Milímetros</option>
                <option value="cm">Centímetros</option>
                <option value="m">Metros</option>
                <option value="km">Quilômetros</option>
            </select>`
    }

    pesoMassa(tipoDeConversao){
        return `
        <label>${tipoDeConversao}</label>
        <div class="input-group">
            <select class="inputs-templete unidade-de">
                <option value="mg">Miligramas</option>
                <option value="g">Gramas</option>
                <option value="kg">Quilogramas</option>
                <option value="t">Toneladas</option>
            </select>
            
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </div>

            <select class="inputs-templete unidade-para">
                <option value="mg">Miligramas</option>
                <option value="g">Gramas</option>
                <option value="kg">Quilogramas</option>
                <option value="t">Toneladas</option>
            </select>`
    }

    volume(tipoDeConversao){
        return `
        <label>${tipoDeConversao}</label>
        <div class="input-group">
            <select class="inputs-templete unidade-de">
                <option value="ml">Mililitros</option>
                <option value="l">Litros</option>
                <option value="m3">Metros cúbicos</option>
                <option value="gal">Galões</option>
            </select>
            
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </div>

            <select class="inputs-templete unidade-para">
                <option value="ml">Mililitros</option>
                <option value="l">Litros</option>
                <option value="m3">Metros cúbicos</option>
                <option value="gal">Galões</option>
            </select>`
    }

    temperatura(tipoDeConversao){
        return `
        <label>${tipoDeConversao}</label>
        <div class="input-group">
            <select class="inputs-templete unidade-de">
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>
            
            <input type="number" class="inputs-templete valor-converter" placeholder="Digite o valor">
        </div>

            <select class="inputs-templete unidade-para">
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>`
    }
}