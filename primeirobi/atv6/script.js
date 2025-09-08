const form = document.querySelector(".adicao");
const input = document.querySelector("#tarefa");
const lista = document.querySelector(".todos");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    input.value = ""; 
    input.focus();
  }
});


lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
