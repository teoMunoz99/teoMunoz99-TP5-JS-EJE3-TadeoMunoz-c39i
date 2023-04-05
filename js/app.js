//Declaro variables y traigo elementos
const tareaPendiente = document.querySelector('input'); //input
const botonAgregar = document.getElementById('botonAgregar');//boton "agregar"
const ul = document.querySelector('ul'); //ul donde voy a agregar o borrar las tareas pendientes

//funciones
function agregarTarea(e){
    e.preventDefault();
    
    //guardo en la variable tarea el valor del input
    let tarea = tareaPendiente.value;

    //creo el li que voy a meter en el ul
    const li = document.createElement('li');

    //en la variable p guardo el texto que va tener el li
    const p = document.createElement('p');

    //guardo el contenido del input que estaba en la variable tarea dentro del p
    p.textContent = tarea;

    //añado el p en el li
    li.appendChild(p);

    //ahora añado el li al ul
    ul.appendChild(li);
    //borro el valor de input luego de agregar una tarea
    tareaPendiente.value = '';
}

//agrego eventos
botonAgregar.addEventListener('click', agregarTarea);