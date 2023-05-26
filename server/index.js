//import express
const express=require('express')

const server=express()

//import cors -- used to connect with front end
const cors=require('cors')

//importing logic file
const logic=require('./service/logic')

//connect with frontend
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

//port setting for server

server.listen(8000,()=>{
    console.log("server started at port 8000");
})

server.get('/allPlayer',(req,res)=>{
   logic.allPlayer().then(result=>{
    res.status(result.statusCode).json(result)
   })
})

server.delete('/deletePlayer/:id',(req,res)=>{
    logic.removePlayer(req.params.id).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })
 

//store new Player
server.post('/addPlayer',(req,res)=>{
    logic.addPlayer(req.body.id,req.body.name,req.body.age,req.body.photo,req.body.position,req.body.club,req.body.nationality,req.body.foot,req.body.exact,req.body.sort).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 //get a Player
 server.get('/getPlayer/:id',(req,res)=>{
    logic.getPlayer(req.params.id).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 server.get('/viewPlayers/:id',(req,res)=>{
   logic.viewPlayers(req.params.id).then(result=>{
       res.status(result.statusCode).json(result)
   })
 })

 //edit an Player
 server.post('/editPlayer',(req,res)=>{
    logic.editPlayer(req.body.id,req.body.name,req.body.age,req.body.photo,req.body.position,req.body.club,req.body.nationality,req.body.foot,req.body.exact).then(result=>{
     res.status(result.statusCode).json(result)
    })
 })

 