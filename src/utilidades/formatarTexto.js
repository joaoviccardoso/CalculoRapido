export function formatarTexto(texto) {
    return texto
      .normalize("NFD")               
      .replace(/[\u0300-\u036f]/g, "")   
      .replace(/\s+/g, "")               
      .toLowerCase();                    
}