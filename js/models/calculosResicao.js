export class CalculosResicao{

    calcularDiasTrabalhados(dataInicial, dataFinal) {
        const inicio = new Date(dataInicial);
        const fim = new Date(dataFinal);
        const diffEmMs = Math.abs(fim - inicio);
        return Math.floor(diffEmMs / (1000 * 60 * 60 * 24)) + 1;
    }

    calcularMesesTrabalhados(dataInicial, dataFinal) {
        let inicio = new Date(dataInicial);
        let fim = new Date(dataFinal);
        
        let anos = fim.getFullYear() - inicio.getFullYear();
        let meses = fim.getMonth() - inicio.getMonth();
        let dias = fim.getDate() - inicio.getDate();
        
        if (dias < 0) meses--; // Ajusta se o dia final for menor que o inicial
        
        return anos * 12 + meses;
    }

    calcularRescisao(salarioBruto, diasTrabalhados, mesesTrabalhados, saldoFGTS, tipoDeDemissao) {
        let saldoSalario = (salarioBruto / 30) * 30;
        let feriasProporcionais = (salarioBruto / 12) * mesesTrabalhados;
        let decimoTerceiro = (salarioBruto / 12) * mesesTrabalhados;
        let multaFGTS = saldoFGTS * 0.4;
        let totalRescisao = 0;

        switch (tipoDeDemissao) {
            case "Dispensa sem justa causa":
                totalRescisao = saldoSalario + salarioBruto + feriasProporcionais + decimoTerceiro + multaFGTS;
                break;
            case "Pedido de demissão":
                totalRescisao = saldoSalario + feriasProporcionais + decimoTerceiro;
                break;
            case "Demissão de comum acordo":
                totalRescisao = saldoSalario + (salarioBruto / 2) + feriasProporcionais + decimoTerceiro + (multaFGTS / 2);
                break;
            case "Dispensa com justa causa":
                totalRescisao = saldoSalario;
                break;
            default:
                totalRescisao = 0;
        }

        return totalRescisao;
    }
}