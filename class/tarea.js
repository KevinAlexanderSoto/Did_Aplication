const {v4 : uuidv4} = require('uuid');// para generar un ID unico 
const moment = require('moment');

class tarea {
    constructor(desc = ''){
    this.id = uuidv4(),
    this.descripcion = desc,
    this.fecha = moment().format('dddd Do MMMM') 
    }
    

}

class tareas {
    constructor(){
        this.listadoTareas = {};
    }

nuevaTarea(desc){
    const item = new tarea(desc);
    this.listadoTareas[item.id] = item;
    console.log(this.listadoTareas);
}

}

module.exports = tareas;