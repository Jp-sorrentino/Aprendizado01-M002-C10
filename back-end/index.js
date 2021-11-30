// SERVER (API)
// Import express so that we can use its functions in our application
const express = require('express')

//Init express in our js file so it can cotrol the server functions 
const app = express();

const blueJobs = [
    {
        id: 1,
        company: "Blue",
        salary: 3000,
        oportunity: "Front-End Jr",
        type: "estágio"
    },
    {
        id: 2,
        company: "Google",
        salary: 10000,
        oportunity: "Front-End Jr",
        type: "CLT"
    },
    {
        id: 3,
        company: "Facebook",
        salary: 20000,
        oportunity: "Full Stack Sr",
        type: "PJ"
    },
    {
        id: 4,
        company: "Amazon",
        salary: 15000,
        oportunity: "Full Stack Pl",
        type: "CLT"
    }
]
// CORS - allow swap between resources of diferent sources
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})


// JSON - js object notation
// tell express to comunicate with JSON (Middleware)
app.use(express.json());

// API - comunication form between systems that contains endpoints
// REST - GET/POST/PUT/DELETE
// Create endpoint to return mesage to client
app.get('/', (req, res) => {
    res.send('Hello Bluemers!');
});



// Endpoint [GET] /vagas - Return job list
app.get('/jobs', (req, res) => {
    res.send(blueJobs);
})

// Endpoint [GET] /vagas/{id} - Return to client job by id
app.get('/jobs/:id', (req, res) => {
    //acess id via req
    const idParam = req.params.id;
    const jobfound = blueJobs.find(job => job.id == idParam);

    // sent job to front-end
    res.send(jobfound);
})



// PORT - where the server is runing
const port = 3000;
// Function to start the server at defined port
app.listen(port, () =>{
    console.log(`Server running in port ${port}`)
});