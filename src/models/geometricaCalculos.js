export class GeometricaCalculos{
    calculoQuadrado(valor1){
        const lado = valor1;
        let area = lado * lado;
        let perimetro = 4 * lado;
        console.log(area, perimetro)
        return  {area, perimetro} ;
    }

    calculoRentangulo(valor1, valor2){
        const base = valor1;
        const altura = valor2;
        let area = base * altura;
        let perimetro = 2 * (base + altura);
        return  {area, perimetro} ;
    }

    calculoCirculo(valor1){
        const raio = valor1;
        const pi = Math.PI;
        let area = pi * raio * raio;
        let perimetro = 2 * pi * raio;
        return  {area, perimetro} ;
    }

    calculoTrianculo(valor1, valor2, valor3, valor4, valor5){
        let base = valor1;
        let altura = valor2;
        let lado1 = valor3;
        let lado2 = valor4;
        let lado3 = valor5;

        let area = (base * altura) / 2;
        let perimetro = lado1 + lado2 + lado3;
        console.log(
            `
            base: ${base}
            altura: ${altura}
            lado1:  ${lado1}
            lado2:  ${lado2}
            lado3:  ${lado3}

            resuldado: ${area} e ${perimetro}
            `
        )

        return  {area, perimetro} ;
    }
}