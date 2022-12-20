class Logic
{
    find_subtraction_of_two_no(req,res)
    {
            if(req.method=="POST"){
            var a=req.body.ist
            var b=req.body.iind
            var c=parseInt(a)-parseInt(b)
            res.render('subtract',{message:"result is :"+c})
            res.end()
            }
            else{
                res.render('subtract',{message:0})
                res.end()
            }
        }
    }

const obj=new Logic()

module.exports=obj