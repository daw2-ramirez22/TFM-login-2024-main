import Task from "../models/task.model.js"


export const getTasks = async  (req, res) => {
    //peticion para que busque en todas las tareas
   const tasks = await Task.find({
    user: req.user.id
   }).populate('user')
   res.json(tasks)
}

export const createTask = async  (req, res) => {
    const { title, description, date } = req.body
    //crear una nueva tarea como objeto con la estructura del modelo
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const savedTask = await newTask.save()
    //devuelvo al cliente la tarea que se ha guardado
    res.json(savedTask)
}

export const getTask = async  (req, res) => {
    //el request param es basicamente el dato de la url en este caso el id
   const task = await Task.findById(req.params.id).populate('user')
   //si no encontro nada y envio mensaje por consola
   if(!task) return res.status(404).json({message : 'Task not found'})
   //si lo encontro devuelvo la tarea de lo que acaba de encontrar que contendra el id
   res.json(task)

}

export const deleteTask = async  (req, res) => {
    //busca y elimina por el id 
    const task = await Task.findByIdAndDelete(req.params.id)
    //si no encontro nada y envio mensaje por consola
    if(!task) return res.status(404).json({message : 'Task not found'})
    //si lo encontro devielve un estado un estado
    return res.sendStatus(204)
}


export const updateTask = async  (req, res) => {
    //new true es para que me de el dato mas nuevo y no el penultimo 
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    //si no encontro nada y envio mensaje por consola
    if(!task) return res.status(404).json({message : 'Task not found'})
    //si lo encontro devuelve la tare actualizada
    res.json(task)
}
