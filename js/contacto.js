const form = document.getElementById("formulario");
const btn = document.getElementById("botonSubmit");
const inputs = document.getElementsByTagName("input");
const state = document.getElementById("state");

const btnHandleSubmit = (e) => {
  e.preventDefault();
  obtenerInfo();
  borrarDatos();
  cambioColorBtn();
  msgText();
};

btn.addEventListener("click", btnHandleSubmit);

function obtenerInfo() {
  for (const input of inputs) console.log(input.value);
  console.log(state.value);
}

function borrarDatos() {
  for (const input of inputs) input.value = "";
}

function msgText() {
  setTimeout(() => {
    alert("Datos Enviados Correctamente, a la brevedad sera contactado");
  }, 200);
}

const cambioColorBtn = () => {
  btn.classList.replace("btn-primary", "btn-success");
  btn.style.transition = ".2s all";
};
