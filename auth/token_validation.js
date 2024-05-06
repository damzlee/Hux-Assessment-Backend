const{verify, decode} = require ("jsonwebtoken")

module.exports={
    checkToken:(req,res,next)=>{
        let token = req.get("authorization");
         if( token){
            token= token.slice(7);
            verify(token, "qwe2673", (err,decoded)=>{
if (err){
res.json({
successs:0,
message:"invalid token"
});
}else{
next();
}
            })
            ;
         }else{
         res.json({
                successs:0,
                message:"access denied"
            })
         }
    }
}