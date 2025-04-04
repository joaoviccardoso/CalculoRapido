export class CalculosResicao {
    calculosDosAnosTrabalhado(dataInicial, dataFinal) {
        const inicio = new Date(dataInicial);
        const fim = new Date(dataFinal);
        const anos = fim.getFullYear() - inicio.getFullYear();
        return anos
    }

    calcularMesesTrabalhados(dataInicial, dataFinal) {
        let inicio = new Date(dataInicial);
        let fim = new Date(dataFinal);
        let diffEmDias = (fim - inicio) / (1000 * 60 * 60 * 24);
        return Math.floor(diffEmDias / 30); // Aproximação melhor para meses
    }

    mesesTrabalhadoNumero(dataFinal){
        let data = dataFinal;
        let mesesTrabalhado = data.split("-")[1] 
        return mesesTrabalhado
    }

    valorDoDiaTrabalhado(salario){
        return salario / 30
    }

    //testar melhor esse calculo
    avisoPrevioDias(anos){
        return 30 + (anos * 3);
    }

    saldoDeSalarioDosdiasTrabalhadoNoMesDaDemissao(dataFinal, valorDoDiaTrabalhado){
        let data = dataFinal;
        console.log(data)
        let diasTrabalhado = data.split("-")[2]
        console.log(diasTrabalhado)
        return valorDoDiaTrabalhado * diasTrabalhado;
    }

    avisoPrevioIndenizadoCalculo(avisoPrevio, valorDoDiaTrabalhado){
        return valorDoDiaTrabalhado * avisoPrevio
    }

    feriasProporcionaisCalculo(salarioBruto,dataFinal){
        let mesesTrabalhado = this.mesesTrabalhadoNumero(dataFinal);
        let valorPorMesSalario = salarioBruto / 12;
        let feriasProporcionais =  mesesTrabalhado * valorPorMesSalario;
        return feriasProporcionais
    }

    decimoTerceiro(salario, dataFinal){
        let mesesTrabalhado = this.mesesTrabalhadoNumero(dataFinal);
        return (salario / 12) * mesesTrabalhado
    }

    calcularRescisao(salarioBruto, saldoFgts, dataInicial, dataFinal, tipoDeDemissao) {
        let anosTrabalhado = this.calculosDosAnosTrabalhado(dataInicial, dataFinal);

        let valorDoDiaTrabalhado = this.valorDoDiaTrabalhado(salarioBruto);
        let saldoDoSalarioTrabalhadoNoMes = this.saldoDeSalarioDosdiasTrabalhadoNoMesDaDemissao(dataFinal, valorDoDiaTrabalhado);

        let avisoPrevioDias = this.avisoPrevioDias(anosTrabalhado);
        let avisoPrevioIndenizado = this.avisoPrevioIndenizadoCalculo(avisoPrevioDias, valorDoDiaTrabalhado);

        let feriasVencidas = salarioBruto;
        let feriasProporcionais = this.feriasProporcionaisCalculo(salarioBruto,dataFinal)
        let feriasAvisoPrevio = salarioBruto / 12;
        let umTerzoDFerias = (feriasVencidas + feriasProporcionais + feriasAvisoPrevio) / 3
        
        let decimoTerceiro = this.decimoTerceiro(salarioBruto, dataFinal)
        let decimoTerceiroAvicoPrevio = (salarioBruto/12) * 1

        let multaFGTS = saldoFgts * 0.4;
        let multaFGTSmaisFGTS = multaFGTS + saldoFgts
        console.table({
            AvisoPrévioDias: avisoPrevioDias,
            ValorDiaTrabalhado: valorDoDiaTrabalhado,
            AvisoPrévioIndenizado: avisoPrevioIndenizado,
            SaldoSalarioMesTrabalhado: saldoDoSalarioTrabalhadoNoMes,
            FériasProporcionais: feriasProporcionais,
            UmTerçoFérias: umTerzoDFerias,
            DécimoTerceiro: decimoTerceiro,
            DecimoAvisoPrevio: decimoTerceiroAvicoPrevio,
            fgts: multaFGTSmaisFGTS
          });
          

        // Tratamento do aviso prévio
        /*if (avisoPrevio === "indenizado") {
            avisoPrevioValor = salarioBruto;
        } else if (avisoPrevio === "descontado") {
            avisoPrevioValor = -salarioBruto; // Desconta do total
        }

        switch (tipoDeDemissao) {
            case "Dispensa sem justa causa":
                multaFGTS = saldoFGTS * 0.4;
                totalRescisao = saldoSalario + salarioBruto + feriasProporcionais + decimoTerceiro + multaFGTS + avisoPrevioValor;
                break;
            case "Pedido de demissão":
                totalRescisao = saldoSalario + feriasProporcionais + decimoTerceiro + avisoPrevioValor;
                break;
            case "Demissão de comum acordo":
                multaFGTS = saldoFGTS * 0.2;
                totalRescisao = saldoSalario + (salarioBruto / 2) + feriasProporcionais + decimoTerceiro + multaFGTS + avisoPrevioValor;
                break;
            case "Dispensa com justa causa":
                totalRescisao = saldoSalario;
                break;
            default:
                totalRescisao = 0;
        }*/

        return totalRescisao;
    }
}
