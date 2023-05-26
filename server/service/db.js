//import monggoose
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/soccer')

//model
const Player=mongoose.model('Player',{
    
id:String,
name:String,
age:Number,
photo:String,
position:String,
club:String,
nationality:String,
foot:String,
exact:String,
sort:String
})

module.exports={
    Player
}

