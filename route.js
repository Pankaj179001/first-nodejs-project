const express = require('express')
const router = express.Router()
// const bodyparser = require('body-parser')

//for image upload
const multer=require('multer')
const crypto=require('crypto')
const path=require('path')


const object_of = require('./controller/test.js')
const student_object = require('./controller/student.js')
const display_json=require('./controller/employee')

// const url_encoded = bodyparser.urlencoded({ extended: false })
router.use(express.urlencoded())//replacement of body parser
router.use(express.json())
router.use(express.static(path.join(__dirname+'/public')))







//for image to upload


var upload=multer(
    {storage:multer.diskStorage({
    destination:"./public/upload",
    filename:(req,file,cb)=>{
        cb(null,file.originalname+'-'+Date.now()+'.jpg')
    }
})}).single('photo')

// raw.toString('hex')+path.extname(file.originalname)











router.get('/', (req, res) => {
    res.render('home')
    res.end()
})


router.get('/chd', (req, res) => {
    res.render('about')
    res.end()
})


router.get('/addpage', (req, res) => {
    res.render('addition', { result: 0 })
    res.end()
})


router.post('/add_now', (req, res) => {
    var a = req.body.ist
    var b = req.body.iind
    var c = parseInt(a) + parseInt(b)
    res.render('addition', { result: "sum is" + c })
    res.end()
})


// query is used for get method and body is for post method to fetch the values
// router.get('/add_now',(req,res)=>{
//     var a=req.query.ist
//     var b=req.query.iind
//     var c=parseInt(a)+parseInt(b)
//     res.render('addition',{result:"sum is"+c})
//     res.end()
// })
router.use('/find_multi',(req, res) => {
    if (req.method == "GET") {
        res.render('Multiplication', { result: 0 })
        res.end()
    }
    else {
        var a, b, c
        var a = req.body.ist
        var b = req.body.iist
        var c = parseInt(a) * parseInt(b)
        res.render('Multiplication', {message: "result is" + c })
        res.end()
    }
})


router.use('/subtract', (req, res) => {
    object_of.find_subtraction_of_two_no(req, res)


})
router.get('/add_info',(req,res)=>{
    res.render('student_reg',{message:0})
})

router.use('/add_it',(req, res) => {

student_object.add_record(req,res)

})
router.use('/student_display',(req,res)=>{
    student_object.display_record(req,res)
})
router.use('/delete_stu',(req,res)=>{
    // var name=req.params.name

    student_object.delete_student(req,res)
})
router.use('/display_emp',(req,res)=>{
  
    display_json.display_record(req,res)
})
router.use('/add_emp',(req,res)=>{
    display_json.add_emp(req,res)
})
router.use('/emp',upload,(req,res)=>{
  
    display_json.employee_add(req,res)
})
router.use('/display_now',(req,res)=>{

    display_json.display_emp(req,res)
})
router.use('/download_now/:name',(req,res)=>{
    display_json.download(req,res)
})
router.use('/delete_emp',(req,res)=>{
    display_json.delete_emp(req,res)
})

module.exports = router

