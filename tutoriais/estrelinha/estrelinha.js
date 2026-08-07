/*Adicionado um "Listener" para o evento de movimento do mouse*/
window.addEventListener("mousemove", (elemento) => {
    /*Criando um elemento "div" com a classe "estrelinha" e adicionando o conteúdo da estrela (&#10022;)*/
    const estrelinha = document.createElement("div");
    estrelinha.className = "estrelinha";
    estrelinha.innerHTML = "&#10022;";
 
    estrelinha.style.left = elemento.clientX + "px";
    estrelinha.style.top = elemento.clientY + "px";
   
 
    const xAleatorio = (Math.random() - 0.5) * 50 + "px";
    estrelinha.style.setProperty("--xAleatorio", xAleatorio);
 
    document.body.appendChild(estrelinha);
 
    elemento.clientX
    elemento.clientY
 
    setTimeout(() => {
        estrelinha.remove();
    }, 800);
 
});