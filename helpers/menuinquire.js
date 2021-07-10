require('colors');
const moment = require('moment');
const inquerer = require('inquirer');


const preguntas =[/* vector de preguntas menu */
    {
      type: "list",
      name: "opciones",
      message: "que quiere hacer? \n",
      choices: [
        {
          value: "1",
          name: `${"1.".blue}registrar tarea`,
        },
        {
          value: "2",
          name: `${"2.".blue}Listar tareas del dia`,
        },
        {
          value: "3",
          name: `${"3.".blue}Borrar tareas`,
        },
        {
          value: "0",
          name: `${"0.".green}SALIR`,
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


module.exports = menu;