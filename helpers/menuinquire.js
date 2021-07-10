require('colors');
const moment = require('moment');
const inquerer = require('inquirer');


const preguntas =[/* vector de preguntas menu */
    {
      type: "list",
      name: "opciones",
      message: "que quiere hacer? \n",
      loop : true,
      choices: [
        {
          value: "1",
          name: `${"1.".blue}) registrar tarea`,
        },
        {
          value: "2",
          name: `${"2.".blue}) Listar tareas del dia`,
        },
        {
          value: "3",
          name: `${"3.".blue}) Borrar tareas`,
        },
        {
          value: "0",
          name: `${"0.".green}) SALIR`,
        }
  
      ]
    }
  ];

const menu = async()=>{

    console.log(`${'======================='.brightBlue}`);
    console.log(`   ToDid ${'Aplication'.brightBlue}`);
    console.log(`${'======================='.brightBlue}`);
    console.log(moment().format('dddd Do MMMM'));

    const {opciones} = await inquerer.prompt(preguntas)
    
    return opciones

}

const getNewTask = async ()=>{

  const description = await inquerer.prompt({ 
    type : 'input',
    name : 'description',
    message : 'Ingrese la Tarea',
    validate: function (input) {
      // Declare function as asynchronous, and save the done callback
      var done = this.async();

        input = input.trim();// quita los espacios solo para la validacion
        
        if (input == '') {
          // Pass the return value in the done callback
          done('You need to provide a description');
          return;
        }
        // Pass the return value in the done callback
        done(null, true);
      
    }
  })

  return description;
}


module.exports = {menu,
  getNewTask};