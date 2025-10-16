const inputLado = document.getElementById('Lado');
const resultado = document.getElementById('resultado');
const btnAccion = document.getElementById('btnAccion');

function calcularArea(){
    const lado = inputLado.value;
    const ladoFloat = parseFloat(lado);

    if(isNaN(ladoFloat) || ladoFloat <= 0){
     resultado.textContent = "Ingresa datos válidos"
     resultado.className = "mensaje-error";
    }
    else{
          const area = ladoFloat * ladoFloat;
        resultado.textContent = `El area del cuadrado es ${area}`;
        resultado.className = "mensaje-correcto";
    }


}
  btnAccion.addEventListener('click', calcularArea);
