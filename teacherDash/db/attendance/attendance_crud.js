const attendance = require("./attendanceSchema");

var attendanceOperation={
    addUser(userObj , response){
        console.log("adduser" ,userObj);
        attendance.create(userObj , function(err){
            if(err){
                response.send('something went wrong....')
            }
            else{
                response.send('data added ...')
            }
        });
    },

    fetchuser(userObj,response){ 
        attendance.find({roll_no:userObj.roll ,semester:userObj.semester}, function(error , docs){
            console.log(userObj);
            var fetchData=require('../../helper/helper');
            fetchData.fetch(docs);
            if(error){
                response.send("some error occured");
            }
            if(docs.length>0){
                response.send(docs)
            //   response.send("Roll:-- " + docs[0].roll_no + " name is:--" + docs[0].student_name);
            }
          else{
              response.send("not found");

          }  
        });
    }
}
module.exports=attendanceOperation;