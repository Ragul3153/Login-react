const express = require("express")
const cors = require("cors")
const app = express()

const users = []

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())

app.post("/login",function(req,res)
{
    for(i=0; i<users.length; i++){
        if(req.body.username === users[i].uname && req.body.password === users[i].pword){
            res.send(true)
        }
    }
    res.send(false)
})

app.post("/signup",function(req,res){
    const user = {}
    user["uname"] = req.body.username;
    user["pword"] = req.body.password;
    user["cpword"] = req.body.confirmpassword;
    users.push(user)
})

app.listen(5000,function(){
    console.log("Started Server")
})
