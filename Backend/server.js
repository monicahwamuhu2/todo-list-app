const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data storage path
const DATA_DIR = path.join(__dirname, 'data');
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// Initialize tasks file if it doesn't exist
if (!fs.existsSync(TASKS_FILE)) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify([]));
}

// Load tasks from file
let tasks = [];
try {
  const tasksData = fs.readFileSync(TASKS_FILE, 'utf8');
  tasks = JSON.parse(tasksData);
} catch (error) {
  console.error('Error loading tasks:', error);
}

// Save tasks to file
function saveTasks() {
  try {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
}

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { name, category, priority, dueDate, createdAt } = req.body;
  
  if (!name) {
    return res.status(400).send('Task name is required');
  }
  
  // Create new task with default values for missing fields
  const newTask = {
    name,
    category: category || 'adventure',
    priority: priority || 'medium',
    dueDate: dueDate || null,
    createdAt: createdAt || new Date().toISOString()
  };
  
  tasks.push(newTask);
  saveTasks();
  
  res.status(201).send('Task added');
});

// Delete a task by index
app.delete('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    saveTasks();
    res.send('Task deleted');
  } else {
    res.status(404).send('Task not found');
  }
});

// Update a task
app.put('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { name, category, priority, dueDate } = req.body;
  
  if (index >= 0 && index < tasks.length) {
    // Update only provided fields
    if (name) tasks[index].name = name;
    if (category) tasks[index].category = category;
    if (priority) tasks[index].priority = priority;
    if (dueDate !== undefined) tasks[index].dueDate = dueDate;
    
    saveTasks();
    res.send('Task updated');
  } else {
    res.status(404).send('Task not found');
  }
});

// Get tasks by category
app.get('/tasks/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredTasks = tasks.filter(task => task.category === category);
  res.json(filteredTasks);
});

// Get tasks by priority
app.get('/tasks/priority/:priority', (req, res) => {
  const priority = req.params.priority;
  const filteredTasks = tasks.filter(task => task.priority === priority);
  res.json(filteredTasks);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task Quest server running on http://localhost:${PORT}`);
});