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

mostrartarea(){
    const item = new tarea;
    item.descripcion = 'hola si funciona ';
    console.log(item);
}

}

module.exports = tareas;