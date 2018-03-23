const connection=require("../connection/connection");
const Schema=connection.Schema;
const attendanceSchema=new Schema({
     roll_no:Number ,
     student_name:String , 
     status:String,
     semester:String,
     stream:String
})
var attendanceModel=connection.model("take_attend" , attendanceSchema);
module.exports=attendanceModel;