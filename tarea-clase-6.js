/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

$form=document.querySelector("#calculador-edades");

document.querySelector("#siguiente-paso").onclick = function(event){
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrates");
    const cantidadIntegrantes = Number ($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();

    const errorCantidadIngegrantes = validarCantidadIntegrantes(cantidadIntegrantes);
    const errores = {
        "cantidad-integrantes": errorCantidadIngegrantes
    }

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        agregarIntegrantes(cantidadIntegrantes);
    }

    event.preventDefault();
};

function agregarIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes>0){
        mostrarBotonCalculo();
    }else{
        resetear();
    }
    for(let i = 0; i < cantidadIntegrantes; i++){
        crearIntegrantes(i);
    }
}

function crearIntegrantes(indice){
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $label = document.createElement("label");
    $label.textContent = "Edad del integrante #: " + (indice + 1);

    const $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);
}

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante");
    for(let i = 0; i< $integrantes.length ; i++){
        $integrantes[i].remove();
        ocultarBotonCalculo();
    }
}
function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarAnalisis();
}

function mostrarBotonCalculo(){
    document.querySelector("#calcular").className =("");
}
function ocultarBotonCalculo(){
    document.querySelector("#calcular").className =("oculto");
}

function mostrarAnalisis(){
    document.querySelector("#analisis").className =("");
}
function ocultarAnalisis(){
    document.querySelector("#analisis").className=("oculto");
}

document.querySelector("#calcular").onclick = function(event){
    const $edadIntegrantes = document.querySelectorAll(".integrante input");
    const edadIntegrantes = Number($edadIntegrantes.value)
    const numeros = obtenerEdadesIntegrantes();
    const errorEdades = validarEdadIntegrantes(edadIntegrantes);

    const erroresEdadIntegrante = {
        "edades-integrantes": errorEdades
    }

    const esExito = manejarErrores(erroresEdadIntegrante) === 0;

    if(esExito){
    mostrarEdad("mayor", obtenerMayorNumero(numeros));
    mostrarEdad("menor", obtenerMenorNumero(numeros));
    mostrarEdad("promedio", promedioNumero(numeros));
    mostrarAnalisis();
    }

    event.preventDefault();
}



function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll(".integrante input");
    const edades=[];
    for(let i = 0;i<$integrantes.length;i++){
        if($integrantes[i].value === ""){
            continue;
        }
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function obtenerMayorNumero(numeros){
    let mayorNumero = numeros[0]
    for(let i = 0; i<numeros.length;i++){
        if(numeros[i]>mayorNumero){
            mayorNumero = numeros[i]
        }
    }
    return mayorNumero
}

function obtenerMenorNumero(numeros){
    let menorNumero = numeros[0];
    for(let i =0;i<numeros.length;i++){
        if(numeros[i]<menorNumero){
            menorNumero = numeros[i];
        }
    }
    return menorNumero
}

function promedioNumero(numeros){
    let acumulador = 0;
    for(let i = 0;i<numeros.length;i++){
        acumulador += numeros[i];
    }
    return (acumulador / numeros.length)
}

function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}


document.querySelector("#resetear").onclick = function(event){
    ocultarBotonCalculo();
    ocultarAnalisis();
    borrarIntegrantesAnteriores();

    event.preventDefault();
}


function validarCantidadIntegrantes(cantidadIntegrantes){
    if(!/^[0-9]+$/.test(cantidadIntegrantes)){
    return "El campo solo puede tener numeros";
    }
    return "";
}

function validarEdadIntegrantes(edadIntegrantes){
    if(!/^[0-9]+$/.test(edadIntegrantes)){
    return "El campo solo puede tener numeros";
    }
    return "";
}

function manejarErrores(errores){
    const llaves = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    llaves.forEach(function(llaves){
        const error = errores[llaves];
        if(error){
            cantidadErrores++
            $form[llaves].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;

            $errores.appendChild($error);
        }else{
            $form[llaves].className = "";
        }
    })
    return cantidadErrores
}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
