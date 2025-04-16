export class GeometricaCalculos{
    calculoQuadrado(valores){
        const lado = valores[0];
        let area = lado * lado;
        let perimetro = 4 * lado;
        console.log(area, perimetro)
        return area, perimetro;
    }

    calculoRentangulo(valores){
        const base = valores[0];
        const altura = valores[1];
        let area = base * altura;
        let perimetro = 2 * (base + altura);
        return  area, perimetro ;
    }

    calculoCirculo(valores){
        const raio = valores[0];
        const pi = Math.PI;
        let area = pi * raio * raio;
        let perimetro = 2 * pi * raio;
        return  area, perimetro ;
    }

    calculoTrianculo(valores){
        let base = valores[0];
        let altura = valores[1];
        let lado1 = Number(valores[2]);
        let lado2 = Number(valores[3]);
        let lado3 = Number(valores[4]);

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

        return  area, perimetro ;
    }
}