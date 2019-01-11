(function() {
  const btnSorpresa = document.querySelector("#sorpresa");
  const text = document.querySelector("#text");
  if (btnSorpresa && text) {
    btnSorpresa.addEventListener("click", e => {
      e.stopPropagation();
      e.preventDefault();
      const txt = text.value;
      if (!txt) {
        return alert("No colocaste nada en el input");
      }
      document.querySelector(
        "#dump"
      ).innerHTML = `El texto del input es ${txt}`;
    });
  }
})();
