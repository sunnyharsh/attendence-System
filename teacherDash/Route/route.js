var express=require('express');
var route=express.Router();

route.post("/fetch" ,(request ,response)=>{
    var roll=request.body.roll;
    var semester=request.body.semester;
    var fetchModel=require('../model/fetch');
    var fetchObj=new fetchModel(roll, semester);
    var attendanceCrud=require("../db/attendance/attendance_crud");
    attendanceCrud.fetchuser(fetchObj ,response);
})

module.exports=route;