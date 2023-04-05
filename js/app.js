//==============Declaro variables y traigo elementos===============//
const tareaPendiente = document.querySelector('input'); //input
const botonAgregar = document.getElementById('botonAgregar');//boton "agregar"
const ul = document.querySelector('ul'); //ul donde voy a agregar o borrar las tareas pendientes

//=================funciones=====================//
function agregarTarea(e){
    e.preventDefault();
    
    //guardo en la variable tarea el valor del input
    let tarea = tareaPendiente.value;
    if(tareaPendiente.value === ''){
        return alert('Debe ingresar una tarea');
    }

    //creo el li que voy a meter en el ul
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between ';

    //en la variable p guardo el texto que va tener el li
    const p = document.createElement('p');

    //guardo el contenido del input que estaba en la variable tarea dentro del p
    p.textContent = tarea;

    //añado el p en el li
    li.appendChild(p);

    //añado el boton de borrar dentro del li
    li.appendChild(botonBorrar());

    //ahora añado el li al ul
    ul.appendChild(li);

    //borro el valor de input luego de agregar una tarea
    tareaPendiente.value = '';
}

//funcion para agregar un boton de borrado
function botonBorrar(){
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'Borrar';
    btnBorrar.className = 'btn btn-danger';
    btnBorrar.addEventListener('click', (e) => {
        const tareaBorrar = e.target.parentElement;
        ul.removeChild(tareaBorrar);
    });
    
    return btnBorrar;
}

//==========agrego eventos=============//
botonAgregar.addEventListener('click', agregarTarea);