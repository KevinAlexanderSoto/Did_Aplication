require('colors');
const moment = require('moment');
const inquerer = require('inquirer');

const preguntas =[/* vector de preguntas menu */
    {
      type: "list",
      name: "opciones",
      message: "Registra o borra tus tareas echas en el dia \n",
      loop : true,
      choices: [
        {
          value: "1",
          name: `${"1.".blue}) registrar tarea`,
        },
        {
          value: "2",
          name: `${"2.".blue}) Listar tareas `,
        },
        {
          value: "3",
          name: `${"3.".blue}) Borrar tareas`,
        },
        {
          value: "0",
          name: `${"0.".red}) SALIR`,
        }
  
      ]
    }
  ];

const menu = async()=>{
    console.clear();
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.brightBlue}`);
    console.log(`   ${'ToDid'.underline} ${'Aplication'.brightBlue}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°° \n'.blue}`);
    console.log( `Hoy es : `+moment().format('dddd Do MMMM'));
  console.log(`${'-------------------------'.yellow}`);
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

const pausa = async (mensaje)=>{
  const {pause} = await inquerer.prompt(
      [{type : 'cuestion',
        name : 'pausa',
        message : mensaje          
  
  }])
  return pause;
}

const menuBorrar = async (tareas = [])=>{ // menu de items a borrar 
  // lista las tareas en el apartado de borrar
    const choices = tareas.map( (tarea, i) => {
  
        const idx = `${i + 1}.`.green;
  
        return {
            value: tarea,
            name:  `${ idx } ${ tarea.descripcion } : : agregada el ${'DIA '.cyan} :${tarea.fecha}`
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });
  
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            pageSize: 20,
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquerer.prompt(preguntas);
    return id.id;
  }
  const confirmar = async(message) => {// confirmacion para borrar tareas

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
  
    const { ok } = await inquerer.prompt(question);
    return ok;
  } 

module.exports = {menu,
  getNewTask,
  pausa,
  menuBorrar,
  confirmar
};