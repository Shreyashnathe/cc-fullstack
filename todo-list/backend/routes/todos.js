import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    description: req.body.description,
    completed: req.body.completed || false,
    priority: req.body.priority,
    dueDate: req.body.dueDate
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    if (req.body.task != null) todo.task = req.body.task;
    if (req.body.description != null) todo.description = req.body.description;
    if (req.body.completed != null) todo.completed = req.body.completed;
    if (req.body.priority != null) todo.priority = req.body.priority;
    if (req.body.dueDate != null) todo.dueDate = req.body.dueDate;
    const updated = await todo.save();
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    await todo.deleteOne();
    res.json({ message: 'Todo deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

export default router;
