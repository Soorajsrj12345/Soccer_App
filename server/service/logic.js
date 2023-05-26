const db=require('./db')

const allPlayer=()=>{
   return db.Player.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                player:result
            }
        }
        else{
            return{
                statuscode:400,
                message:"no data is available"
            }
        }
    })
}

const addPlayer=(id,name,age,photo,position,club,nationality,foot,exact,sort)=>{
    return db.Player.findOne({id}).then(result=>{
       if(result){
        return{
            statusCode:400,
            message:"Player Already Exist"
        }
       }
       else{
        //create object of player model for new player
        const newPlayer=new db.Player({
            id,
            name,
            age,
            photo,
            position,
            club,
            nationality,
            foot,
            exact,
            sort
        })

        newPlayer.save()       

        return{
            statusCode:200,
            message:"Player Added Successfully"
        }
       }
    })
 }

  const removePlayer=(pid)=>{
    return db.Player.deleteOne({id:pid}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Removed Player"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Player Not Present"
            }
        }
    })
  }

  const getPlayer=(id)=>{
    return db.Player.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                player:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Player Not Present"
            }
        }
    })
  }

  const viewPlayers=(eid)=>{
    return  db.Player.find({sort:eid}).then(result=>{
          if(result){
           return{
               statusCode:200,
               player:result
           }
          }
          else{
           return{
               statusCode:404,
               message:"Player Not exist"
           }
          } 
       })
   }

  const editPlayer=(id,name,age,photo,position,club,nationality,foot,exact)=>{
    return db.Player.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.name=name
            result.age=age
            result.photo=photo
            result.position=position
            result.club=club
            result.nationality=nationality
            result.foot=foot
            result.exact=exact


            result.save()
            return{
                statusCode:200,
                message:'Player data updated' 
            }
        }
        else{
            return{
                statusCode:404,
                message:'Player not present'
            }
        }
    })
  }

module.exports={
    allPlayer,addPlayer,removePlayer,getPlayer,editPlayer,viewPlayers
}