const nuevaTarea = document.querySelector('#agregar-tarea')
const formularioNuevaTarea = document.querySelector('#formulario-tarea')
const contenedorTareas = document.querySelector('#tasks-container')


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


//agregar tarea a lista de tareas
function recorrerArreglo(){
    contenedorTareas.innerHTML = '';
    listaTareas.forEach(function(tarea){
        const deleteTaskBtn = document.createElement("button")
        deleteTaskBtn.setAttribute("id", "delete-task")
        deleteTaskBtn.innerHTML = "x"
        
        const task = document.createElement("li")
        task.classList.add("task")
        task.textContent = tarea 

        task.appendChild(deleteTaskBtn)
        contenedorTareas.appendChild(task)
        deleteTaskBtn.addEventListener("click", saludar(tarea))
    })
}

function saludar(a){
    console.log(a)
}