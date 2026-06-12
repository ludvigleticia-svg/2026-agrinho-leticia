function verificarResposta(correto) {
    const resultadoElemento = document.getElementById('resultado');
    
    if (correto) {
        resultadoElemento.innerText = "¡Correto! 🎉 O gotejamento leva a água direto à raiz da planta, evitando a evaporação e o desperdício.";
        resultadoElemento.style.color = "#2e7d32"; // Verde para acerto
    } else {
        resultadoElemento.innerText = "❌ Tente novamente! Essa opção não é a mais sustentável para o uso da água.";
        resultadoElemento.style.color = "#c62828"; // Vermelho para erro
    }
}