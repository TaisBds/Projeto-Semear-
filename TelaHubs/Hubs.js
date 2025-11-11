// Função de carrossel funcional
document.querySelectorAll(".carrossel-container").forEach(container => {
  const carrossel = container.querySelector(".carrossel");
  const btnEsquerda = container.querySelector(".seta.esquerda");
  const btnDireita = container.querySelector(".seta.direita");

  btnEsquerda.addEventListener("click", () => {
    carrossel.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

  btnDireita.addEventListener("click", () => {
    carrossel.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
});
