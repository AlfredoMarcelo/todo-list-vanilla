const nuevaTarea = document.querySelector('#agregar-tarea')
const formularioNuevaTarea = document.querySelector('#formulario-tarea')
const contenedorTareas = document.querySelector('#tasks-container')



function saludar(e){
    console.log(e.target.innerHTML)
}


// lista de tareas
let listaTareas = [];

// Manipulacion formulario
formularioNuevaTarea.addEventListener("submit", handleFormulario)

function handleFormulario(event){
    event.preventDefault()
    let nuevaTareaEntrante = nuevaTarea.value
    //validar que entrada cumpla con condiciones avisandole mediante tooltip
    if(nuevaTareaEntrante === '' || nuevaTareaEntrante.length <= 3)return
    agregarNuevaTarea(nuevaTareaEntrante)
    nuevaTarea.value = ""
}

// agregar tarea
function agregarNuevaTarea(nuevaTarea){
    const nuevaListaTareas = [...listaTareas,nuevaTarea]
    listaTareas = nuevaListaTareas
    recorrerArreglo()
    return
}


//agregar tarea a contenedor
function recorrerArreglo(){
    contenedorTareas.innerHTML = '';
    listaTareas.forEach(function(tarea){
        const task = document.createElement("li")
        task.classList.add("task")
        task.addEventListener('click',saludar)
        if(task.textContent === tarea)return
        task.textContent = tarea 
        contenedorTareas.appendChild(task)
    })
}