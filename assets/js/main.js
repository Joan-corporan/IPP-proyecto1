


const requered = () => {
  alert("Bienvenido a Beber&Comer");
  let nombre = prompt("Nombre");
  if (nombre == null || nombre== undefined || nombre=='') {
    requered()
  } else {
    alert(`Disfruta de la experiencia ${nombre}!`);
  }
};
requered();
