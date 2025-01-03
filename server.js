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

app.get('/posts', authenticateToken, (req, res) => {
    res.json(post.filter(posts => post.username === req.user.name)) //filtering post only by username inputed
    //res.json(posts) // reponds with the information of posts when the "/post" is called in url
}) //get request to read information

app.post('/login', (req, res) => { //Authenticate user(this is done separatly, encryting the credentials basicaally)
     
    const username = req.body.username
    const user = { name: username }
    //serializing user object
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) //signing the token with env variables
    res.json({ accessToken: accessToken})
})

function authenticateToken(req, res, next){ // this is a middleware, should acctually be in another script for modularizarion
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000) // localhost port process to list to for request

