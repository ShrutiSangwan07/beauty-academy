const express = require ("express")
const path = require("path");
// created an express app
const app = express();
const port = 8000;

//express specific stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//img
app.get('/', (req, res) => {
    const images = ['indian.jpg', 'portrait.jpg', 'woman.jpg']; // Define your image URLs here
    res.render('index', { images: images });
  });

//pug specific stuff
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))


// ENDPOINTS
app.get("/",(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params)
});
//for post request
app.post('/', (req, res) => {
    name = req.body.name
    email = req.body.email
    number = req.body.number


    let outputToWrite = `The name of the student is ${name}, ${email} is email, ${number} is contact n0.`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = { 'message': 'Your form has been submitted successfully', }
    res.status(200).render('index.pug', params)
})

//STARTING THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
