export class CalculoIrEInss {
    calcularInss(salario){
        let desconto = 0;
        if (salario <= 1412.00){
            desconto = salario * 0.075;
        } else if(salario <= 2666.68){
            desconto = (salario - 1412.00) * 0.09 + 105.90;
        } else if (salario <= 4000.03){
            desconto = (salario - 2666.68) * 0.12 + 105.90 + 112.92;
        } else if(salario <= 7786.02){
            desconto = (salario - 4000.03) * 0.14 + 105.90 + 112.92 + 159.99;
        }else desconto = 908.86;
        return desconto
    }   

    calcularIR(base) {
        switch (true) {
            case base <= 1903.98:
                return 0;
            case base <= 2826.65:
                return base * 0.075 - 169.44;
            case base <= 3751.05:
                return base * 0.15 - 381.44;
            case base <= 4664.68:
                return base * 0.225 - 662.77;
            default:
                return base * 0.275 - 896.00;
        }
    }
}