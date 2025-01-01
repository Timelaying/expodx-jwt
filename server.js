// imports 
const express =  require('express') // express is needed as a middle man for the API
const app = express() // app equals to express

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

app.get('/posts', (res, req) => {
    res.json(posts) // reponds with the information of posts when the "/post" is called in url

}) //get request to read information

app.listen(3000) // localhost port process to list to for request

