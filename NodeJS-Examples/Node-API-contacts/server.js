const express = require('express')
const mongoose = require('mongoose')
const Contact = require('./models/contactModel')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Define some test routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><h2>From the NODE.js API<h2>')
})

app.get('/blurg', (req, res) => {
    res.send('<h1>Hello Blurg and Welcome to COMP-3033!</h1>')
})

// return all contacts
app.get('/contact', async(req, res) => {
    try {
        const contact = await Contact.find({});
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// return a contact by id
app.get('/contact/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findById(id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//create a contact
app.post('/contact', async(req, res) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(200).json(contact);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a contact
app.put('/contact/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body);
        // we cannot find any contact in database
        if(!contact){
            return res.status(404).json({message: `cannot find any contact with ID ${id}`})
        }
        const updatedContact = await Contact.findById(id);
        res.status(200).json(updatedContact);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a contact
app.delete('/contact/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if(!contact){
            return res.status(404).json({message: `cannot find any contact with ID ${id}`})
        }
        res.status(200).json(contact);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://armcintyre:ay16FYP0DcfiusfM@cluster0.mo54j1s.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB Atlas')
    app.listen(3000, ()=> {
        console.log(`Node API app (with CORS)is now running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
