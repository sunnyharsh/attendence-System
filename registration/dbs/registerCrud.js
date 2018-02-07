const RegisterUser=require('./registerSchema');
var RegistrationOperation={
    addUser(userObj , response){
        RegisterUser.create(userObj , function(err){
            if(err){
                response.send('something went wrong....')
            }
            else{
                response.send('data added ...')
            }
        });
    }
}
module.exports=RegistrationOperation;