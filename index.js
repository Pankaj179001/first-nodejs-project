//body parse package is used to get the form data
//ejs is called embeded java script
const express=require('express')
const app=express()
const ourrouter=require('./route')
app.set('view engine','ejs')
// app.use(express.static(__dirname+'/public'))
//to access the static pages

app.use(ourrouter)


app.listen(1043,()=>{
    console.log('click here http://localhost:1043')
})