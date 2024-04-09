// const http = require('http');
// const fs = require('fs');
// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

// const server = http.createServer((req, res) => {
//     // res.write('Hello');
//     const data =fs.readFileSync('file.html').toString();
//     res.end(data);
// });

// server.listen(3100,()=>{
//     console.log('server is listening on port 3100')
// });

const app = express();
const PORT = 8080;

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/firstdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define the moongose schema

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
})

const Todo = mongoose.model('Todo',todoSchema);

app.use(bodyParser.json());

// create new todo 

app.post('/todos',async (req, res) => {
    try {
        const { title, description} = req.body;
        const todo = new Todo ({ title, description});
        await todo.save();
        res.status(201).json(todo);
    } catch (error){
        res.status(500).json({ error: 'Failed to create todo' });
    }
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})