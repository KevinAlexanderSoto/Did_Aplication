const {v4 : uuidv4} = require('uuid');// para generar un ID unico 
const moment = require('moment');
const { saveData, showData } = require('../helpers/DB');

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

    const {id,...all} = item; // nuevo de ES9 

    this.listadoTareas[id] = all;
    saveData(this.listadoTareas);
}

mostrarTareas(){

     showData(); 

}

}

module.exports = tareas;