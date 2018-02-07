const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/register", (request , response)=>{
    var name=request.body.name;
    var userid=request.body.userid;
    var email=request.body.email;
    var phone=request.body.phone;
    var semester=request.body.semester;
    var stream=request.body.stream;
    var section=request.body.section;
    var subject=request.body.subject;

    var user=require("./model/user")
    var userObj=new user(name , userid , email , phone , semester , stream , section , subject);
    const reg=require("./dbs/registerCrud");
    reg.addUser(userObj,response);
});


app.listen(1234 , ()=>{
    console.log("server start....")
});
