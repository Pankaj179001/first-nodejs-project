const { response } = require("express")
const connection=require("../database_connector")

class student{
    add_record(req,res)
    {
      if(req.method='POST')
      {
     var name,age,branch
     name=req.body.name
     age=req.body.age
     branch=req.body.branch
     console.log(req.body)
     var q=`insert into student (name,age,branch)values("${name}",${age},"${branch}")`
     connection.query(q,(err,result)=>{
         if(err){
             res.send("query error :",err)
             res.end()
         }
         else{
             res.render('student_reg',{message:name+'---your record added'})
             console.log(result)
             res.end()  
         }
     })
    }
    else{
        res.render('student_reg',{message:0})
    }
    }
    display_record(req,res){
       connection.query('select * from student',(err,result)=>{
        
     err?console.log('error in query'):res.render('display',{mydata:result})
     console.log(result)
    })
}
delete_student(req,res,name)
{

connection.query(`delete from student where name="${req.query.name}"`,(err,result)=>{
    err?console.log("error this point",err):this.display_record(req,res)
})
}

}
const obj=new student()
module.exports=obj