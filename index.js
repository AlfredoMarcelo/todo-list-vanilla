const nuevaTarea = document.querySelector('#agregar-tarea')
const formularioNuevaTarea = document.querySelector('#formulario-tarea')

// lista de tareas
let listaTareas = [];

// Manipulacion formulario
formularioNuevaTarea.addEventListener("submit", handleFormulario)

function handleFormulario(event){
    event.preventDefault()
    let nuevaTareaEntrante = nuevaTarea.value
    if(nuevaTareaEntrante === '' || nuevaTareaEntrante.length <= 3)return
    agregarNuevaTarea(nuevaTareaEntrante)
    nuevaTarea.value = ""
}

// agregar tarea
function agregarNuevaTarea(nuevaTarea){
    const nuevaListaTareas = [...listaTareas,nuevaTarea]
    listaTareas = nuevaListaTareas
    return
}


// Mostrar Lista de Tareas
