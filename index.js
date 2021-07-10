require("colors");

const { menu , getNewTask} = require("./helpers/menuinquire");
const listTareas = require("./class/tarea");

const principal = async () => {
  try {
    const resmenu = await menu();
   
    switch (resmenu) {
      case "1": // agregar tarea
      const {description} = await getNewTask();
      
      const lista = new listTareas();
      lista.nuevaTarea(description);
      break;

      case "2":// ver tareas
       
      break;
      case "3"://borrar tareas
       
      break;
      case "0":// salir 
       
      break;
    }

    
  } catch (error) {
    console.log(error);
  }
};

principal();
