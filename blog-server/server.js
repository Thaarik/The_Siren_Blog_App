const express = require('express')
const app = express()
const PORT = 3001;


app.get('/api/contents',(req,res)=>{
    const contents=[
        {
            "id":0,
            "heading":"Joshua Tree Overnight Adventure",
            "content":"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
        },
        {
            "id":1,
            "heading":"Catch waves with an adventure guide",
            "content":"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
        },
        {
            "id":2,
            "heading":"Catch waves with an adventure guide",
            "content":"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
        },
        {
            "id":3,
            "heading":"Title of verticle gallery"
        },
        {
            "id":4,
            "heading":"The Sound cloud You Loved is doomed"
        },

    ];
    res.json(contents)
})
app.listen(PORT,()=>{
    console.log("express server is running...")
})