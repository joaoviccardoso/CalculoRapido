export class TempleteGeometrica{
    quadrado(formadoInputTemplete){
        return `
        <label class="label-container"  style="margin: 0;">
            <h6 class="tipo-de-equacao">${formadoInputTemplete}</h6>
            <label class="label-container">Lado
                <input type="number" class="inputs-templete" placeholder="lado">
            </label>
        </label>
        `
    }

    retangulo(formadoInputTemplete){
        return `
        <div class="label-container"  style="margin: 0;">
            <h6 class="tipo-de-equacao">${formadoInputTemplete}</h6>
            <label class="label-container">Base
                <input type="number" class="inputs-templete" placeholder="base">
            </label>
            <label class="label-container">Altura
                <input type="number" class="inputs-templete" placeholder="altura">
            </label>
        </div>
        `
    }

    circulo(formadoInputTemplete){
        return `
        <div class="tipo-de-equacao label-container" style="margin: 0;">
            <h6 class="tipo-de-equacao">${formadoInputTemplete}</h6>
            <label class="label-container">Raio
                <input type="number" class="inputs-templete" placeholder="raio">
            </label>
        </div>
        `
    }

    triangulo(formadoInputTemplete){
        return `
        <div class="tipo-de-equacao label-container" style="margin: 0;">
            <h6 class="tipo-de-equacao">${formadoInputTemplete}</h6>
            <label class="label-container">Base
                <input type="number" class="inputs-templete" placeholder="Base">
            </label>

            <label class="label-container">Altura
                <input type="number" class="inputs-templete" placeholder="Altura">
            </label>

            <label class="label-container">Lado 1
                <input type="number" class="inputs-templete" placeholder="Lado 1">
            </label>

            <label class="label-container">Lado 2
                <input type="number" class="inputs-templete" placeholder="Lado 2">
            </label>

            <label class="label-container">Lado 3
                <input type="number" class="inputs-templete" placeholder="Lado 3">
            </label>
        </div>
        `
    }
}