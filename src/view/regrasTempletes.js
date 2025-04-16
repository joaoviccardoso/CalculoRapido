import { InputsTempletes } from "./templetes/InputsTempletes.js";

let templetesInputs = new InputsTempletes()

export const regrasDeTemplate = () => [
    {
        condicao: (titulo, campo) => titulo === "Rescisão Trabalhista" && campo === "Tipo de Rescisão",
        template: (campo) => templetesInputs.templeteSelectRescisao(campo)
    },
    {
        condicao: (titulo, campo) => titulo === "Rescisão Trabalhista" && campo === "Aviso Previo",
        template: (campo) => templetesInputs.templeteSelectAvisoPrevio(campo)
    },
    {
        condicao: (titulo, campo) => titulo === "Rescisão Trabalhista" && campo === "Ferias Vencidas",
        template: (campo) => templetesInputs.templeteFeriasVencidas(campo)
    },
    {
        condicao: (titulo, campo) => titulo === "Conversão de Medidas" || campo === "Tipo De Conversão",
        template: (campo) => templetesInputs.templeteTipodeConversao(campo)
    },
    {
        condicao: (titulo, campo) => campo === "Tipo de Forma Geométricas",
        template: (campo) => templetesInputs.templeteAreaGeometricas(campo)
    },
    {
        condicao: (titulo, campo) => campo === "Data de Início" || campo === "Data Final",
        template: (campo) => templetesInputs.templeteDatas(campo)
    }
];
