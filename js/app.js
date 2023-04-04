//==========Declaro variables===========//
let i = 0; //uso esta variable como contador
let arregloTareas = [];//aqui guardo las tareas ingresadas

//===============funciones=============//

//funcion para agregar tareas en el arreglo
function agregarTarea(){
    arregloTareas[i] = document.getElementById('inputTareas').value;
    i++;
}
