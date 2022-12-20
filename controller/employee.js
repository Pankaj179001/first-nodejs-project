const { json } = require('body-parser')
const connection=require('../database_connector')

class emp{
    display_record(req,res){
        
            connection.query(`select * from emp`,(err,result)=>{
               if (err)
               {
                return res.send(err)
            }
               else
               { 
                return res.send(result) 
            }
            })
          }


          add_emp(req,res){
           
            if(req.method=="POST"){
                let data=req.body
                console.log(data)
                connection.query(`insert into emp Set?`,data,(err,result)=>{
                    err?console.log('query error',err):this.display_record(req,res)
                })
            }
            else{
                this.display_record(req,res)
            }
              
        }
      employee_add(req,res){
    //  var name=req.body.name
    //  var age=req.body.age
    //  var photo=req.body.photo
    if(req.method=="POST"){
        var data =req.body
        var images=req.file.filename
         var info={...data,images}
        console.log(info)
        connection.query(`insert into emp Set?`,info,(err,result)=>{
            err?console.log("query error..",err):res.render('employee',{message:req.body.name+' your record saved successfully'})
        })
    
    }
    else{
        res.render('employee',{message:0})
    }

      }
      display_emp(req,res){
         connection.query(`select * from emp`,(err,result)=>{
            err?console.log('query error.....,',err):res.render('display_emp',{value:result})
            

         })

      }
      download(req,res){
       var name=req.params.name
       connection.query(`select * from emp where name='${name}'`,(err,result)=>{
        if(err)
        {
            console.log("the error..",err) 
         }
    else{
        var filename=result[0].images
        res.download('./public/upload/'+filename,(err)=>{
            res.send("error in path of filename,,,",err)
        })
       } 
    })
}
delete_emp(req,res){
    var name,age
    name=req.query.name
    age=req.query.age
    connection.query(`delete from emp where name='${name}' AND age=${age} `,(err,result)=>{
        err?console.log("query error>>",err):this.display_emp(req,res)
    })
}

        }

var obj= new emp()
module.exports=obj