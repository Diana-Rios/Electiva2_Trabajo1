const { response } = require ('express');

// creación de tareas 
const tasks= [ 
    {
        id: 12,
        description:"Tarea 1",
        createDate: "15 febrero",
        dueDate:" 15 marzo",
        Status: "En progreso"
    },
    {
        id: 13,
        description:"Tarea 2",
        createDate: "15 febrero",
        dueDate:" 20 marzo",
        Status: "En progreso"
    },
    {
        id: 14,
        description:"Tarea 3",
        createDate: "17 febrero",
        dueDate:" 22 marzo",
        Status: "En progreso"
    },
    {
        id: 15,
        description:"Tarea 4",
        createDate: "20 febrero",
        dueDate:" 25 marzo",
        Status: "En progreso"
    },
    {
        id: 16,
        description:"Tarea 5",
        createDate: "27 febrero",
        dueDate:" 30 marzo",
        Status: "En progreso"
    },
]

//Lista de tareas iniciales
const listTask = (req, res = response) => {
        res.statusCode = 200;
        res.json(tasks);
    };

//Creación nueva tarea

const createTask = (req,res=response )=>{
        res.json ({message:'La tarea fue creada',
    ...req.body});
 };
    
//Modificación Tarea
const updateTask = (req,res)=>{
    const id = parseInt(req.params.id); // se va a capturar el id de la tarea
    const task1 = tasks.find(task => task.id === id);  // Busca la tarea con el id capturado en el paso anterior
    if (!task1) { //verificar si la tarea existe
        return res.status(404).send('Tarea no encontrada'); // uso el códigos de estado HTTP  para indicar que no se encuentra
      }
      const { description, createDate, dueDate, status } = req.body; //capturar los datos actualizados de la solicitud
      task1.description = description;
      task1.createDate = createDate;
      task1.dueDate = dueDate;
      task1.Status = status;
      res.status(200).send(task1);
      res.json ({message:'La tarea actualizada'}); // uso el códigos de estado HTTP  para indicar que la tarea se actualizó
    };
    // Eliminar tarea
    const deleteTask = (req,res) => {
       const id = parseInt(req.params.id); //Obtengo el id
       const idFind= tasks.findIndex(task => task.id == id); //Busca la tarea con el id capturado en el paso anterior
       if (!idFind) {
        return res.status(404).send('Tarea no existe');// uso el códigos de estado HTTP  para indicar que la tarea existe
        } else {
            tasks.splice(idFind, 1); //Elimina la tarea del array
            res.status(200).send('Se elimino la tarea'); //Envio resultado de éxito al eliminar tarea
                }
        
};





    module.exports = {  
        listTask,
        createTask,
        updateTask,
        deleteTask
    }
