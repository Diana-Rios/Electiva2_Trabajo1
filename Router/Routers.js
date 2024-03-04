const { Router } = require('express');
const { listTask, createTask, updateTask, deleteTask } = require ('../Controllers/Controllers'); // importación de las variables

const router = Router();//variable router 

router.get('/tasks', listTask);  //Array de  tareas
router.post('/tasks' , createTask); // crea una nueva tarea
router.put('/tasks/:id', updateTask); //recibe el id de la tarea a editar y lo pasa al controlador para actualizarla     
router.delete('/tasks/:id' , deleteTask); // recibe el id de la tarea para ser eliminada


module.exports = router
