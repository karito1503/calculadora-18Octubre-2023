function calcular() {

  const numero1 = parseFloat(document.getElementById("numero1").value);
  console.log(numero1);
  console.log(typeof numero1);

  const numero2 = parseFloat(document.getElementById("numero2").value);
  console.log(numero2);
  console.log(typeof numero2);

  const operacion = parseInt(document.getElementById("operacion").value);
  console.log(operacion);
  console.log(typeof operacion);

  
let resultado = 0;
  
  switch(operacion) {

    case 1:

        resultado = numero1 + numero2;

        break;

    case 2:

        resultado = numero1 - numero2;


        break;

    case 3:

       resultado = numero1 * numero2;

        break;

    case 4:  

       resultado = numero1 / numero2;

        break;

  }
  

  //alert(`El resultado es ${resultado}`);

  document.getElementById("resultado").innerHTML = `El resultado es ${resultado}`;
}

function limpiar() {
  
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";

  document.getElementById("resultado").innerHTML = "";
}
