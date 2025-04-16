export class TempleteGeometrica{
    quadrado(formadoInputTemplete){
        return `
        <label class="tipo-de-equacao">${formadoInputTemplete}
            <input type="number" class="inputs-templete" placeholder="lado">
        </label>
        `
    }

    retangulo(formadoInputTemplete){
        return `
        <label class="tipo-de-equacao">${formadoInputTemplete}
            <input type="number" class="inputs-templete" placeholder="base">
            <input type="number" class="inputs-templete" placeholder="altura">
        </label>
        `
    }

    circulo(formadoInputTemplete){
        return `
        <label class="tipo-de-equacao">${formadoInputTemplete}
            <input type="number" class="inputs-templete" placeholder="raio">
        </label>
        `
    }

    triangulo(formadoInputTemplete){
        return `
        <label class="tipo-de-equacao">${formadoInputTemplete}
            <input type="number" class="inputs-templete" placeholder="Base">
            <input type="number" class="inputs-templete" placeholder="Altura">
            <input type="number" class="inputs-templete" placeholder="Lado 1">
            <input type="number" class="inputs-templete" placeholder="Lado 2">
            <input type="number" class="inputs-templete" placeholder="Lado 3">
        </label>
        `
    }
}