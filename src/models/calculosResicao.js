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

    valorDoDiaTrabalhado(salario, dataFinal){
        let diasTrabalhadoNoMes = new Date(dataFinal).getDate()
        return (salario / 30) * diasTrabalhadoNoMes
    }

    avisoPrevioDias(anos){
        console.log(anos)
        return 30 + (anos * 3);
    }
///
    saldoDeSalarioDosdiasTrabalhadoNoMesDaDemissao(dataFinal, salarioBruto){
        let data = dataFinal;
        console.log(data)
        let diasTrabalhado = data.split("-")[2]
        console.log(diasTrabalhado)
        return this.salarioPorDia(salarioBruto) * diasTrabalhado;
    }

    avisoPrevioValorAhReceber(avisoPrevio, salarioBruto){
        return this.salarioPorDia(salarioBruto) * avisoPrevio
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

    salarioPorDia(salarioBruto){
        return salarioBruto / 30
    }

    calcularRescisao(salarioBruto, saldoFgts, dataInicial, dataFinal, tipoDeDemissao, avisoPrevio, feriasEstaVencidas) {
        let anosTrabalhado = this.calculosDosAnosTrabalhado(dataInicial, dataFinal);

        let valorDoDiaTrabalhado = this.valorDoDiaTrabalhado(salarioBruto, dataFinal);
        let saldoDoSalarioTrabalhadoNoMes = this.saldoDeSalarioDosdiasTrabalhadoNoMesDaDemissao(dataFinal, salarioBruto);

        let avisoPrevioDias = this.avisoPrevioDias(anosTrabalhado);
        let avisoPrevioIndenizado = this.avisoPrevioValorAhReceber(avisoPrevioDias, salarioBruto);

        let feriasVencidas = salarioBruto;
        let feriasVencidasUmTerzo = feriasVencidas / 3

        let feriasProporcionais = this.feriasProporcionaisCalculo(salarioBruto,dataFinal);
        let umTerzoDeFeriasProporcionais = feriasProporcionais / 3 
        
        let decimoTerceiro = this.decimoTerceiro(salarioBruto, dataFinal)
        let decimoTerceiroAvicoPrevio = (salarioBruto/12) * 1

        let multaFGTS = saldoFgts * 0.4;
        let multaFGTSmaisFGTS = multaFGTS + saldoFgts

        let totalRescisao = 0;

        console.table({
            AvisoPrévioDias: avisoPrevioDias,
            ValorDosDiasTrabalhado: valorDoDiaTrabalhado, 
            AvisoPrévioIndenizado: avisoPrevioIndenizado, //utilizado nas contiçoes sem justa causa,
            SaldoSalarioMesTrabalhado: saldoDoSalarioTrabalhadoNoMes, //utilizado nas contiçoes sem justa causa,

            FériasProporcionais: feriasProporcionais, //utilizado nas contiçoes sem justa causa,
            umTerzoFeriasProporcionai: umTerzoDeFeriasProporcionais, //utilizado nas contiçoes sem justa causa,
            feriasVencidas: feriasEstaVencidas, 
            feriasVencidasUmTerzo: feriasVencidasUmTerzo, //utilizado nas contiçoes sem justa causa,
            valorFeriasVencida: feriasVencidas, //utilizado nas contiçoes sem justa causa,

            DécimoTerceiro: decimoTerceiro, //utilizado nas contiçoes sem justa causa,
            DecimoAvisoPrevio: decimoTerceiroAvicoPrevio, //utilizado nas contiçoes sem justa causa,
            fgts: multaFGTSmaisFGTS, //utilizado nas contiçoes sem justa causa,
          });

        switch (tipoDeDemissao) {
            case "Dispensa sem justa causa":
                totalRescisao +=  saldoDoSalarioTrabalhadoNoMes + avisoPrevioIndenizado + feriasProporcionais + umTerzoDeFeriasProporcionais + decimoTerceiro + multaFGTS;
                //Tratamento das ferias venciadas
                if (avisoPrevio === "descontado") {
                    totalRescisao -= salarioBruto;
                }

                //Tratamento das ferias venciadas
                if(feriasEstaVencidas === "Vencida"){
                    totalRescisao += feriasVencidas + feriasVencidasUmTerzo;
                }

                break;
            case "Pedido de demissão":
                totalRescisao = saldoDoSalarioTrabalhadoNoMes + feriasProporcionais + umTerzoDeFeriasProporcionais + decimoTerceiro;
                 //Tratamento das ferias venciadas
                if(feriasEstaVencidas === "Vencida"){
                    totalRescisao += feriasVencidas;
                }
                 //Tratamento das ferias venciadas
                if (avisoPrevio === "descontado") {
                    totalRescisao -= salarioBruto;
                }
                break;
                
            case "Dispensa com justa causa":
                totalRescisao = saldoDoSalarioTrabalhadoNoMes
                //Tratamento das ferias venciadas
                if(feriasEstaVencidas === "Vencida"){
                    totalRescisao += feriasVencidas + feriasVencidasUmTerzo;
                }
                break;

            default:
                totalRescisao = 0;
        }

        return totalRescisao;
    }
}
