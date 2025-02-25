function assinar() {
    const button = document.querySelector(".subscribe-button");
    button.textContent = "Assinado!";
    button.classList.add("subscribed");
    button.disabled = true;
  }