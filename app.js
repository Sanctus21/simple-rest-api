const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample data
let items = [];

// Routes
// GET / - Returns a Hello World message
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// GET /items - Retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
});

// GET /items/:id - Retrieve an item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');
    res.json(item);
});

// POST /items - Create a new item
app.post('/items', (req, res) => {
    const { name, description } = req.body;
    const newItem = { id: items.length + 1, name, description };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT /items/:id - Update an item by ID
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');
    
    const { name, description } = req.body;
    item.name = name || item.name;
    item.description = description || item.description;
    res.json(item);
});

// DELETE /items/:id - Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found.');

    items.splice(itemIndex, 1);
    res.status(204).send();
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample data
let items = [];

// Routes
// GET / - Returns a Hello World message
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// GET /items - Retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
});

// GET /items/:id - Retrieve an item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');
    res.json(item);
});

// POST /items - Create a new item
app.post('/items', (req, res) => {
    const { name, description } = req.body;
    const newItem = { id: items.length + 1, name, description };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT /items/:id - Update an item by ID
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');
    
    const { name, description } = req.body;
    item.name = name || item.name;
    item.description = description || item.description;
    res.json(item);
});

// DELETE /items/:id - Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found.');

    items.splice(itemIndex, 1);
    res.status(204).send();
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
