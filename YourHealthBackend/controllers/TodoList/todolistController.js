const todos = require('../../modals/Todolist/todoList');
exports.createTodo = async(req,res)=>{
    try {

        const { task, dueTime, date } = req.body;
        const userId = req.user;
        // Create the todo object
        const due_Date = new Date(date);
        const formattedDueDate = due_Date.toISOString().split('T')[0];
        // const formattedDueTime = time.slice(11, 16);
        console.log(dueTime)
    
        // Format the time as HH:MM
        const newTodo = {
          task: task,
          dueDate: formattedDueDate,
          dueTime: dueTime,
          userId: userId // Assuming req.user contains the user's ID
        };
    
        await todos.insertMany(newTodo);
        res.status(201).json({ message: 'Todo added successfully' });
      } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

exports.getTodos = async(req,res)=>{
    try {
        const userId = req.user; // Assuming userId is sent as a query parameter
        // Fetch todos for the given userId
        console.log(userId)
        // Example:
        const todo = await todos.find({ userId: userId });
        res.status(200).json(todo);
      } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

exports.deleteTodoList = async(req,res)=>{
  try {
    // Find the task by ID and delete it
  
    const deletedTask = await todos.deleteOne({ _id: req.body.id, userId: req.user });
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
