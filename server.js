// imports 
require('dotenv').config()

const express =  require('express') // express is needed as a middle man for the API
const app = express() // app equals to express
const jwt = require('jsonwebtoken')

app.use(express.json())


const posts = [ // dummy post fro testing
    {
        username: 'Kyle',
        title: 'Post 1'
    }
    ,
    {
        username: 'Kyleru',
        title: 'Post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts) // reponds with the information of posts when the "/post" is called in url
}) //get request to read information

app.post('/login', (req, res) => { //Authenticate user(this is done separatly, encryting the credentials basicaally)
     
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) //signing the token with env variables
    res.json({ accessToken: accessToken})
})

app.listen(3000) // localhost port process to list to for request

