require("colors");

const { menu , getNewTask, pausa} = require("./helpers/menuinquire");
const listTareas = require("./class/tarea");

const principal = async () => {
  try {
    let resmenu;
    do {
        
    resmenu = await menu();
   const lista = new listTareas();

    switch (resmenu) {
      case "1": // agregar tarea
      const {description} = await getNewTask();
      
      lista.nuevaTarea(description);
   
      break;

      case "2":// ver tareas
      console.clear();
      lista.mostrarTareas();
      await pausa();
      
      break;
      case "3"://borrar tareas
       
      break;
    }

  } while (resmenu != 0);

  } catch (error) {
    console.log(error);
  }
};

principal();
