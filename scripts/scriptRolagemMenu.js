function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Adicionar evento de clique para os itens do menu web
  document.querySelectorAll("#menuWeb a").forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault(); // Evitar o comportamento padrão do link
      const sectionId = item.getAttribute("href").substring(1); // ID da seção a ser rolada
      scrollToSection(sectionId); // Rolar até a seção
    });
  });

  // Adicionar evento de clique para os itens do menu mobile
  document.querySelectorAll("#divMenuMobile a").forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault(); // Evitar o comportamento padrão do link
      const sectionId = item.getAttribute("href").substring(1); // ID da seção a ser rolada
      scrollToSection(sectionId); // Rolar até a seção
      document.getElementById("pageMenuMobile").style.visibility = "hidden"; // Fechar menu mobile após clicar
      document.getElementById("pageSobreBody").style.visibility = "hidden"; // Ocultar overlay do modal
    });
  });