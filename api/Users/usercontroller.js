const{create, GetUser,GetUserByid,UpdateUser,DeleteUser, GetUserByEmail}= require("./userservice");
 const {genSaltSync,hashSync,compareSync} = require('bcrypt')
const {sign} =require("jsonwebtoken")
module.exports={

    createUser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        console.log(res.body);
        create(body,(err,results)=>{
            if (err){
              console.log(err);
              return res.status(500).json({
                sucess:0,
                message:"Database Connection error"
              });
            }
            return res.status(200).json({
                sucess:1,
                data:results
            });
        });
    },
    getUserById:(req,res)=>{
        const id= req.params.id;
        GetUserByid(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if (!results){
                return res.json({
                    sucess:0,
                    message:"record not found"
                });
            }
            return res.json({
                sucess:1,
                data:results
            });
        });
    },
    getUsers:(req,res)=>{
    GetUser((err,results)=>{
        if (err){
            console.log(err);
            return;
        }
        return res.json({
            sucess:1,
            data:results
        });
    });
    },
    updateUsers:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password=hashSync(body.password,salt);
        UpdateUser(body,(err,results)=>{
            if (err){
                console.log(err);
                return;
            }
            if (!results){
               return res.json({
                 sucess: 0,
                 message: "failed to update",
               });
            }
            return res.json({
                sucess:1,
                message:"update succesfull"
            });
        });
    },
    deleteUser:(req,res)=>{
   const data= req.body;
   DeleteUser(data,(err,results)=>{
    if (err){
        console.log(err);
        return; 
    }
    if (!results){
return res.json({
sucess:0,
message:"record not found"
});
    }
    return res.json({
        sucess:1,
        message:"Userdeleted"
    });
   });
    },
    login:(req,res)=>{
    const body = req.body;
    GetUserByEmail(body.email,(err,results)=>{
        if(err){
            console.log(err);
        }
        if (!results){
            return res.json({
                sucess:0,
                data:"Invalid email or password"
            });
        }
        const result = compareSync(body.password,results.password);
        if (result){
            results.password= undefined;
            const jsontoken = sign({result:results}, "qwe2673", {
                expiresIn:"1h"
            });
            return res.json  ({
                sucess:1,
                message:"login successfully",
                token: jsontoken
            });
        }else{
            return res.json({
                sucess:0,
                data:"invalid mail"
            });
        }
    });
    },
};