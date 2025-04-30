export const modal = {
    mostrarDialog(){
        const dialog = document.getElementById("myDialog");

        dialog.innerHTML = `
                <h2 class="avisoModal">Funcionalidade em Desenvolvimento 🛠️</h2>
                <p class="mensagemModal">Obrigado pelo seu interesse!</p>
                <p class="mensagemModal">Esta funcionalidade ainda não está disponível, mas estamos trabalhando duro para trazê-la até você em breve. Pedimos desculpas pelo inconveniente e agradecemos sua paciência.</p>
                <button class="btn-modal" id="closeDialog">Fechar</button>
            `
        
            dialog.showModal();
            requestAnimationFrame(() => {
                dialog.style.opacity = "1";
                dialog.style.transform = "scale(1)";
            });
            document.getElementById("closeDialog").addEventListener("click", () => this.fecharDialog(dialog))
    },

    fecharDialog(dialog){
        dialog.style.opacity = "0";
        dialog.style.transform = "scale(0.8)";
        
        // Espera a animação antes de fechar de fato
        setTimeout(() => {
            dialog.close();
        }, 300);
    }
}