const {v4 : uuidv4} = require('uuid');// para generar un ID unico 
require('colors');
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

    this.listadoTareas[id] = item;
    saveData(this.listadoTareas[id]);
}

mostrarTareas(){
     const dataObj = showData(); 
     let cont = 1;
     for (const property in dataObj) {
         const {descripcion,fecha} = dataObj[property]; 
        console.log(`${cont.toString().blue}${')'.blue}  ${descripcion} ${'creada'.green} en : ${fecha}`);
        cont++; 
    } 
      

}

}

module.exports = tareas;