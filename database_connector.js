const mysql=require('mysql')
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data"
})
connection.connect((err)=>err?console.log("err in connection",err): console.log("connected"))

module.exports=connection