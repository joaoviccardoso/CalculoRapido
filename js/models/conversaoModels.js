export class CalculosConversaoModels{
    
    chamarCalculoConversao(valor, de, para){
        let resposta;
        switch (de) {
            case "mm": // Milímetros
                if (para === "cm") {
                    resposta = valor / 10;
                } else if (para === "m") {
                    resposta = valor / 1000;
                } else if (para === "km") {
                    resposta = valor / 1_000_000;
                }
                break;
    
            case "cm": // Centímetros
                if (para === "mm") {
                    resposta = valor * 10;
                } else if (para === "m") {
                    resposta = valor / 100;
                } else if (para === "km") {
                    resposta = valor / 100_000;
                }
                break;
    
            case "m": // Metros
                if (para === "mm") {
                    resposta = valor * 1000;
                } else if (para === "cm") {
                    resposta = valor * 100;
                } else if (para === "km") {
                    resposta = valor / 1000;
                }
                break;
    
            case "km": // Quilômetros
                if (para === "mm") {
                    resposta = valor * 1_000_000;
                } else if (para === "cm") {
                    resposta = valor * 100_000;
                } else if (para === "m") {
                    resposta = valor * 1000;
                }
                break;
    
            case "mg": // Miligramas
                if (para === "g") {
                    resposta = valor / 1000;
                } else if (para === "kg") {
                    resposta = valor / 1_000_000;
                } else if (para === "t") {
                    resposta = valor / 1_000_000_000;
                }
                break;
    
            case "g": // Gramas
                if (para === "mg") {
                    resposta = valor * 1000;
                } else if (para === "kg") {
                    resposta = valor / 1000;
                } else if (para === "t") {
                    resposta = valor / 1_000_000;
                }
                break;
    
            case "kg": // Quilogramas
                if (para === "mg") {
                    resposta = valor * 1_000_000;
                } else if (para === "g") {
                    resposta = valor * 1000;
                } else if (para === "t") {
                    resposta = valor / 1000;
                }
                break;
    
            case "t": // Toneladas
                if (para === "mg") {
                    resposta = valor * 1_000_000_000;
                } else if (para === "g") {
                    resposta = valor * 1_000_000;
                } else if (para === "kg") {
                    resposta = valor * 1000;
                }
                break;
    
            case "ml": // Mililitros
                if (para === "l") {
                    resposta = valor / 1000;
                } else if (para === "m3") {
                    resposta = valor / 1_000_000;
                }
                break;
    
            case "l": // Litros
                if (para === "ml") {
                    resposta = valor * 1000;
                } else if (para === "m3") {
                    resposta = valor / 1000;
                }
                break;
    
            case "m3": // Metros cúbicos
                if (para === "ml") {
                    resposta = valor * 1_000_000;
                } else if (para === "l") {
                    resposta = valor * 1000;
                }
                break;
    
            case "gal": // Galões (considerando galão americano)
                if (para === "l") {
                    resposta = valor * 3.785;
                } else if (para === "ml") {
                    resposta = valor * 3785;
                }
                break;
    
            case "c": // Celsius para outras temperaturas
                if (para === "f") {
                    resposta = (valor * 9/5) + 32;
                } else if (para === "k") {
                    resposta = valor + 273.15;
                }
                break;
    
            case "f": // Fahrenheit para outras temperaturas
                if (para === "c") {
                    resposta = (valor - 32) * 5/9;
                } else if (para === "k") {
                    resposta = (valor - 32) * 5/9 + 273.15;
                }
                break;
    
            case "k": // Kelvin para outras temperaturas
                if (para === "c") {
                    resposta = valor - 273.15;
                } else if (para === "f") {
                    resposta = (valor - 273.15) * 9/5 + 32;
                }
                break;
    
            default:
                console.warn("Unidade não reconhecida!");
                return null;
        }

        return resposta !== undefined ? resposta : "Conversão não suportada!";
    }
    
}
