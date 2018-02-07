const connection=require("./connection");
const Schema=connection.Schema;
const registrationSchema=new Schema({name:String,userid:String,email:String,phone:String,semester:String,stream:String,section:String,subject:String});
var regModel=connection.model("registerUser",registrationSchema);
module.exports=regModel;