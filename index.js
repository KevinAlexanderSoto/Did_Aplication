require("colors");

const menu = require("./helpers/menuinquire");
const listTareas = require("./class/tarea"); 



const principal = async()=>{
    try {
        const resmenu =  await menu();
        const lista = new listTareas;
        console.log(lista.mostrartarea());        
    } catch (error) {
        console.log(error);
    }


}


principal();