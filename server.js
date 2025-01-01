// imports 
const express =  require('express') // express is needed as a middle man for the API
const app = express() // app equals to express

const posts = [ // dummy post fro testing
    {
        username: 'Kyle',
        title: 'Post 1'
    }
]

app.get('/posts', (res, req) => {

}) //get request to read information

app.listen(3000) // localhost port process to list to for request

