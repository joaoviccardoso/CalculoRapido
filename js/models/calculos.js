export class Calculos{
    soma(valores){
        return valores.reduce((acc, num) => acc + num, 0);
    }

    subtracao(valores){
        return valores.reduce((acc, num) => acc - num);
    }

    

}