const express=require("express");
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static("public"));
app.post("/attendance" ,(request , response)=>{
    var roll_no=request.body.roll_no;
    var name=request.body.name;
    var status=request.body.status;
    var semester=request.body.sem;
    var stream=request.body.stream;
    var attendancemodel=require("./model/attendance");
    var attendanceObj=new attendancemodel(roll_no , name  ,status , semester , stream);
    var attendanceCrud=require("./db/attendance/attendance_crud");
    attendanceCrud.addUser(attendanceObj , response);
})
    var route=require('./Route/route');
    app.use('/' ,route);

app.listen(1234,()=>{
    console.log("server start....");

})
