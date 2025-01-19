const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const sanitizer = require('sanitizer');

const app = express();
const port = 8000;

// Middleware Setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(handleMethodOverride));

// To-do List Storage
let todolist = [];

// Routes

// Display To-Do List
app.get('/todo', (req, res) => {
  res.render('todo.ejs', {
    todolist,
    clickHandler: "func1();"
  });
});

// Add Item to To-Do List
app.post('/todo/add/', (req, res) => {
  const newTodo = sanitizer.escape(req.body.newtodo);
  if (newTodo) {
    todolist.push(newTodo);
  }
  res.redirect('/todo');
});

// Delete Item from To-Do List
app.get('/todo/delete/:id', (req, res) => {
  const { id } = req.params;
  if (id !== '') {
    todolist.splice(id, 1);
  }
  res.redirect('/todo');
});

// Edit Item: Get Specific Todo
app.get('/todo/:id', (req, res) => {
  const { id } = req.params;
  const todo = todolist[id];

  if (todo) {
    res.render('edititem.ejs', {
      todoIdx: id,
      todo,
      clickHandler: "func1();"
    });
  } else {
    res.redirect('/todo');
  }
});

// Edit Item: Save Changes
app.put('/todo/edit/:id', (req, res) => {
  const { id } = req.params;
  const editedTodo = sanitizer.escape(req.body.editTodo);

  if (id && editedTodo) {
    todolist[id] = editedTodo;
  }
  res.redirect('/todo');
});

// Redirect Undefined Routes to To-Do List
app.use((req, res) => {
  res.redirect('/todo');
});

// Start Server
app.listen(port, () => {
  console.log(`Todolist running on http://0.0.0.0:${port}`);
});

// Export app for testing
module.exports = app;

// Helper Functions

// Handle Method Override
function handleMethodOverride(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}
