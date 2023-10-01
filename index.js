const nuevaTarea = document.querySelector("#agregar-tarea");
const formularioNuevaTarea = document.querySelector("#formulario-tarea");
const contenedorTareas = document.querySelector("#tasks-container");
const contenedorPrincipalListaTareas = document.querySelector(
  ".general-container.tasks"
);

let listaTareas = [];

formularioNuevaTarea.addEventListener("submit", handleFormulario);

function handleFormulario(event) {
  event.preventDefault();
  let nuevaTareaEntrante = nuevaTarea.value;
  if (nuevaTareaEntrante === "" || nuevaTareaEntrante.length <= 3) return;
  agregarNuevaTarea(nuevaTareaEntrante);
  nuevaTarea.value = "";
}

function agregarNuevaTarea(nuevaTarea) {
  const nuevaListaTareas = [...listaTareas, nuevaTarea];
  listaTareas = nuevaListaTareas;
  actualizarListaTareas();
  return;
}

function actualizarListaTareas() {
  contenedorTareas.innerHTML = "";
  listaTareas.forEach(function (tarea, index) {
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.setAttribute("class", "delete-task");
    deleteTaskBtn.innerHTML = "x";
    deleteTaskBtn.addEventListener("click", () => eliminarTarea(index));

    const task = document.createElement("li");
    task.classList.add("task");
    task.setAttribute("data-id", index);
    task.textContent = tarea;

    task.appendChild(deleteTaskBtn);
    contenedorTareas.appendChild(task);
  });

  if (listaTareas.length > 0 && !document.querySelector("#delete-tasks")) {
    agregarBtnReinicioListaTarea();
  }
  if(listaTareas.length === 0){
    contenedorPrincipalListaTareas.removeChild(document.querySelector("#delete-tasks"));
  }
}

function agregarBtnReinicioListaTarea() {
  const deleteAllTaskBtn = document.createElement("button");
  deleteAllTaskBtn.setAttribute("id", "delete-tasks");
  deleteAllTaskBtn.innerHTML = "Vaciar lista";
  deleteAllTaskBtn.addEventListener("click", vaciarListaTareas);
  contenedorPrincipalListaTareas.appendChild(deleteAllTaskBtn);
}

function vaciarListaTareas() {
  contenedorTareas.innerHTML = "";
  contenedorPrincipalListaTareas.removeChild(document.querySelector("#delete-tasks"));
  const nuevaListaTareas = [];
  listaTareas = nuevaListaTareas;
  return;
}

function eliminarTarea(index) {
  const tareasCopia = [...listaTareas];
  tareasCopia.splice(index, 1);
  listaTareas = tareasCopia;
  actualizarListaTareas();
}
