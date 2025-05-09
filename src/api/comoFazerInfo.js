export const instrucoes = [
    {
      id: "somar",
      titulo: "Como fazer uma Soma",
      descricao: "A soma é a operação de adicionar dois ou mais valores.",
      passos: [
        "Escolha dois ou mais números que você quer somar.",
        "Exemplo: 10 + 5",
        "Adicione o primeiro número com o segundo.",
        "Se tiver mais de dois números, continue somando com o resultado anterior.",
        "Resultado: 10 + 5 = 15"
      ]
    },
    {
      id: "subtrair",
      titulo: "Como fazer uma Subtração",
      descricao: "A subtração é usada para diminuir um número de outro.",
      passos: [
        "Escolha dois números: o maior primeiro.",
        "Exemplo: 20 - 8",
        "Subtraia o segundo número do primeiro.",
        "Resultado: 20 - 8 = 12"
      ]
    },
    {
      id: "multiplicacao",
      titulo: "Como fazer uma Multiplicação",
      descricao: "A multiplicação é o ato de somar um número várias vezes.",
      passos: [
        "Escolha dois números para multiplicar.",
        "Exemplo: 4 × 3",
        "Multiplique o primeiro número pela quantidade indicada no segundo.",
        "4 × 3 significa somar 4 três vezes: 4 + 4 + 4 = 12",
        "Resultado: 4 × 3 = 12"
      ]
    },
    {
      id: "divisao",
      titulo: "Como fazer uma Divisão",
      descricao: "A divisão é usada para repartir um número em partes iguais.",
      passos: [
        "Escolha dois números: o número total e a quantidade de partes.",
        "Exemplo: 20 ÷ 4",
        "Divida o total igualmente entre as partes.",
        "Resultado: 20 ÷ 4 = 5 (cada parte fica com 5)"
      ]
    },
    {
      id: "porcentagem%",
      titulo: "Como calcular Porcentagem",
      descricao: "A porcentagem representa uma parte de 100.",
      passos: [
        "Pegue o valor total e a porcentagem desejada.",
        "Exemplo: 20% de 150",
        "Multiplique 150 × 20 e divida por 100: (150 × 20) ÷ 100 = 30",
        "Resultado: 20% de 150 é 30"
      ]
    },
    {
      id: "regrasdetres",
      titulo: "Como fazer Regra de Três Simples",
      descricao: "A regra de três é usada para encontrar um valor proporcional.",
      passos: [
        "Monte uma relação com três valores conhecidos e um valor desconhecido.",
        "Exemplo: Se 2 maçãs custam R$ 4, quanto custam 5 maçãs?",
        "Monte a proporção: 2 → 4 e 5 → X",
        "Multiplique cruzado: 2 × X = 4 × 5",
        "Resolva: X = (4 × 5) ÷ 2 = 10",
        "Resultado: 5 maçãs custam R$ 10"
      ]
    },
    {
      id: "mediaaritmetica",
      titulo: "Como calcular Média Aritmética",
      descricao: "A média aritmética é a soma dos valores dividida pela quantidade de valores.",
      passos: [
        "Escolha os números que deseja calcular a média.",
        "Exemplo: 7, 8 e 9",
        "Some todos os valores: 7 + 8 + 9 = 24",
        "Conte quantos números foram somados: 3",
        "Divida a soma pela quantidade: 24 ÷ 3 = 8",
        "Resultado: a média é 8"
      ]
    },

    {
      id: "jurossimples",
      titulo: "Como calcular Juros Simples",
      descricao: "O cálculo de juros simples é feito com a fórmula J = P × i × t.",
      passos: [
        "Identifique o valor principal (P), que é o valor inicial do empréstimo ou investimento.",
        "Determine a taxa de juros (i) e transforme-a em decimal, por exemplo: 2% = 0.02.",
        "Defina o tempo (t) que será utilizado para aplicar os juros.",
        "Multiplique: P × i × t. Exemplo: 1000 × 0.02 × 3 = 60.",
        "O valor dos juros é R$ 60.",
        "Para o valor total (montante), some os juros ao valor principal: 1000 + 60 = R$ 1060.",
        "Você também pode reorganizar a fórmula para descobrir outras variáveis: P = J / (i × t), i = J / (P × t) ou t = J / (P × i)."
      ]
    },
    
    {
      id: "juroscompostos",
      titulo: "Como calcular Juros Compostos",
      descricao: "Juros compostos são calculados sobre o valor acumulado do capital mais os juros dos períodos anteriores. Há duas formas comuns: com capital único e com aportes mensais.",
      passos: [
        "🔹 **Cálculo com Capital Único**",
        "1. Use a fórmula: M = C × (1 + i)^t",
        "2. C é o capital inicial, i é a taxa de juros (decimal) e t é o tempo em períodos (meses ou anos).",
        "3. Exemplo: C = 1000, i = 5% ao ano (0.05), t = 3 anos.",
        "4. (1 + 0.05)^3 = 1.157625",
        "5. M = 1000 × 1.157625 = R$ 1157,63",
        "6. Juros = 1157,63 - 1000 = R$ 157,63",
        "Resultado: R$ 157,63 de juros em 3 anos a 5% a.a.",
    
        "🔹 **Cálculo com Aportes Mensais**",
        "1. Use a fórmula: M = C × [(1 + i)^t – 1] / i",
        "2. C é o aporte mensal, i é a taxa de juros mensal (em decimal) e t é o tempo em meses.",
        "3. Exemplo: C = 200, i = 1% ao mês (0.01), t = 12 meses.",
        "4. (1 + 0.01)^12 ≈ 1.1268 → 1.1268 - 1 = 0.1268",
        "5. 0.1268 ÷ 0.01 = 12.68",
        "6. M = 200 × 12.68 = R$ 2536,00",
        "7. Valor investido: 200 × 12 = R$ 2400",
        "8. Juros = 2536 - 2400 = R$ 136",
        "Resultado: R$ 2536 acumulados, sendo R$ 136 de juros em 12 meses com 1% ao mês."
      ]
    },

    {
      id: "descontocomercial",
      titulo: "Como calcular Desconto Comercial",
      descricao: "O desconto comercial é uma redução direta sobre o valor original de um produto ou serviço, sem considerar tempo ou juros. É muito usado para pagamentos à vista ou promoções.",
      passos: [
        "1. Identifique o valor original do produto.",
        "2. Determine a porcentagem de desconto oferecida.",
        "3. Converta essa porcentagem em decimal (exemplo: 10% = 0.10).",
        "4. Multiplique o valor original pelo desconto em decimal para saber o valor a ser descontado.",
        "5. Subtraia o valor do desconto do valor original para obter o preço com desconto.",
        "Exemplo:",
        "Produto: R$ 200",
        "Desconto: 10% → 0.10",
        "Valor do desconto: 200 × 0.10 = R$ 20",
        "Preço com desconto: 200 – 20 = R$ 180"
      ]
    },

    {
      id: "parcelasefinanciamento(sistemaprice)",
      titulo: "Como calcular Parcelas de Financiamento (Sistema Price)",
      descricao: "No Sistema Price, as parcelas mensais são fixas. Este cálculo considera a entrada paga inicialmente e calcula o valor das parcelas restantes usando a fórmula de financiamento.",
      passos: [
        "1. Informe o valor total do bem ou empréstimo (ex: R$ 50.000).",
        "2. Informe o valor de entrada que será pago inicialmente (ex: R$ 10.000).",
        "3. Subtraia a entrada do valor total para obter o valor financiado:",
        "   Valor financiado = Valor total - Entrada",
        "   Exemplo: R$ 50.000 - R$ 10.000 = R$ 40.000",
        "4. Informe a taxa de juros mensal (em %). Converta para decimal dividindo por 100:",
        "   Exemplo: 2% ao mês = 0.02",
        "5. Informe o número de parcelas (ex: 24 meses).",
        "6. Aplique a fórmula para encontrar a parcela fixa:",
        "   PMT = PV × [i / (1 - (1 + i)^-n)]",
        "   Onde:",
        "   - PMT = valor da parcela mensal",
        "   - PV = valor financiado (sem a entrada)",
        "   - i = taxa de juros mensal (em decimal)",
        "   - n = número de parcelas",
        "7. Exemplo de cálculo:",
        "   PV = R$ 40.000 | i = 0.02 | n = 24",
        "   PMT = 40.000 × [0.02 / (1 - (1 + 0.02)^-24)]",
        "   PMT ≈ R$ 2.119,57",
        "Resultado: 24 parcelas fixas de aproximadamente R$ 2.119,57"
      ]
    },
    
    {
      id: "calculodeferias",
      titulo: "Como calcular Férias",
      descricao: "O cálculo de férias considera o salário bruto mensal, o adicional de 1/3 e, opcionalmente, a venda de até 10 dias de férias (abono pecuniário).",
      passos: [
        "1. Informe o salário bruto mensal (ex: R$ 3.000,00).",
        "2. Calcule o adicional de 1/3 sobre o salário: 3.000 ÷ 3 = R$ 1.000,00.",
        "3. Some o salário com o adicional para obter o valor bruto das férias: 3.000 + 1.000 = R$ 4.000,00.",
        "4. Pergunte ao trabalhador se ele quer vender dias de férias (até 10 dias).",
        "5. Se **não** vender dias, o valor final é R$ 4.000,00.",
        "6. Se **vender** dias (abono pecuniário):",
        "   a. Escolha quantos dias serão vendidos (ex: 5 dias).",
        "   b. Calcule o valor diário de férias: Salário ÷ 30 = 3.000 ÷ 30 = R$ 100,00 por dia.",
        "   c. Multiplique pelo número de dias vendidos: 100 × 5 = R$ 500,00.",
        "   d. Some esse valor ao total de férias: 4.000 + 500 = R$ 4.500,00.",
        "7. O montante final é o valor bruto das férias, já considerando o abono, se houver.",
        "Obs: descontos como INSS ou IRRF podem ser aplicados após esse cálculo."
      ]
    },

    {
      id: "13ºsalario",
      titulo: "Como calcular o 13º Salário",
      descricao: "O 13º salário, ou gratificação natalina, é um benefício pago ao trabalhador proporcional ao número de meses trabalhados no ano, baseado no salário bruto.",
      passos: [
        "1. Verifique o salário bruto do trabalhador (ex: R$ 2.400,00).",
        "2. Conte quantos meses completos a pessoa trabalhou no ano (mínimo de 15 dias no mês conta como mês cheio).",
        "3. Divida o salário por 12 para saber o valor por mês: 2.400 ÷ 12 = R$ 200,00.",
        "4. Multiplique o valor mensal pelo número de meses trabalhados. Ex: se trabalhou 8 meses: 200 × 8 = R$ 1.600,00.",
        "5. Se trabalhou o ano todo, o valor será igual ao salário bruto: R$ 2.400,00.",
        "6. O pagamento pode ser feito em uma ou duas parcelas:",
        "   a. Primeira parcela (até 30/11): geralmente corresponde à metade do total.",
        "   b. Segunda parcela (até 20/12): paga o restante com os descontos (INSS, IRRF).",
        "7. Exemplo com ano completo: salário de R$ 2.400,00 → 13º = R$ 2.400,00.",
        "8. Exemplo com 6 meses trabalhados: 2.400 ÷ 12 × 6 = R$ 1.200,00.",
        "Importante: Descontos são aplicados apenas na segunda parcela, se houver."
      ]
    },

    {
      id: "horaextra",
      titulo: "Como calcular Horas Extras",
      descricao: "Horas extras são aquelas trabalhadas além da jornada normal de trabalho. No Brasil, geralmente são remuneradas com um acréscimo de 50% sobre o valor da hora normal em dias úteis, e 100% em feriados ou domingos.",
      passos: [
        "1. Descubra o salário mensal do trabalhador.",
        "2. Calcule o valor da hora normal: divida o salário por 220 (carga horária mensal padrão).",
        "3. Determine o adicional da hora extra (exemplo: 50% = 1.5 ou 100% = 2.0).",
        "4. Multiplique o valor da hora normal pelo adicional.",
        "5. Multiplique o valor da hora extra pela quantidade de horas extras trabalhadas.",
        "Exemplo:",
        "Salário: R$ 2.200",
        "Hora normal: 2200 ÷ 220 = R$ 10",
        "Hora extra (50%): 10 × 1.5 = R$ 15",
        "Total por 5 horas extras: 15 × 5 = R$ 75"
      ]
    },

    {
      id: "rescisaotrabalhista",
      titulo: "Como calcular Rescisão Trabalhista",
      descricao: "A rescisão trabalhista ocorre quando o contrato de trabalho é encerrado. Os valores a serem pagos variam conforme o tipo de desligamento. Entre os principais direitos estão o saldo de salário, férias, 13º salário, aviso prévio e multa do FGTS, dependendo do caso.",
      passos: [
        "1. Identifique o tipo de rescisão: sem justa causa, com justa causa, pedido de demissão ou fim de contrato por prazo determinado.",
        
        "▶ Sem Justa Causa (empresa demite o funcionário):",
        "- Saldo de salário (dias trabalhados no mês)",
        "- Aviso prévio indenizado (30 dias + 3 dias por ano completo de trabalho, até 90 dias no total)",
        "- Férias vencidas + 1/3 (se houver)",
        "- Férias proporcionais + 1/3",
        "- 13º salário proporcional",
        "- Multa de 40% sobre o FGTS depositado",
        "- Direito ao saque do FGTS e seguro-desemprego (se cumprir os requisitos)",
    
        "▶ Com Justa Causa:",
        "- Saldo de salário",
        "- Férias vencidas + 1/3 (se houver)",
        "(Sem direito a férias proporcionais, 13º, aviso prévio, multa do FGTS ou saque do FGTS)",
    
        "▶ Pedido de Demissão (funcionário pede para sair):",
        "- Saldo de salário",
        "- Férias vencidas + 1/3 (se houver)",
        "- Férias proporcionais + 1/3",
        "- 13º salário proporcional",
        "- (Sem direito à multa de 40% do FGTS nem seguro-desemprego)",
        "- (Pode haver desconto do aviso prévio se o funcionário não cumprir)",
    
        "▶ Término de Contrato por Prazo Determinado:",
        "- Saldo de salário",
        "- Férias vencidas + 1/3 (se houver)",
        "- Férias proporcionais + 1/3",
        "- 13º salário proporcional",
        "- (Se o contrato for rompido antecipadamente sem justa causa, o trabalhador tem direito à multa de 40% sobre o FGTS)",
    
        "▶ Como calcular o saldo de salário:",
        "- Fórmula: (Salário ÷ 30) × dias trabalhados no mês da demissão",
    
        "▶ Como calcular o aviso prévio indenizado:",
        "- Base: 30 dias",
        "- Adicione 3 dias por ano completo de empresa",
        "- Limite máximo: 90 dias",
        "- Fórmula: (Salário ÷ 30) × total de dias de aviso prévio",
    
        "Exemplo (Demissão sem justa causa):",
        "Salário: R$ 2.400 | Tempo de empresa: 5 anos | Trabalhou 10 dias no mês",
        "Saldo de salário: (2400 ÷ 30) × 10 = R$ 800",
        "Aviso prévio: 30 + (3 × 5) = 45 dias → (2400 ÷ 30) × 45 = R$ 3.600",
        "13º proporcional (6 meses): (2400 ÷ 12) × 6 = R$ 1.200",
        "Férias proporcionais (6 meses): (2400 ÷ 12) × 6 = R$ 1.200 + 1/3 = R$ 1.600",
        "Multa 40% FGTS (supondo R$ 4.000 depositados): 4000 × 0.4 = R$ 1.600",
        "Total: somar todos os valores"
      ]
    }
    
    
  ];
  