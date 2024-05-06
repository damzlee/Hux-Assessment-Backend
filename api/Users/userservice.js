const pool = require("../../configuration/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into signup (email,phonenumber,Username,password ) values(?,?,?,?)`,
      [data.email, data.phonenumber, data.Username, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  GetUser: (callBack) => {
    pool.query(
      `select id,email,phonenumber,Username,password from signup`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  GetUserByid: (id, callBack) => {
    pool.query(
      `select id,email,phonenumber,Username,password from signup where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  UpdateUser: (data, callBack) => {
    pool.query(
      `update signup set email=?,phonenumber=?,Username=?,password=? where id=?`,
      [data.email, data.phonenumber, data.Username, data.password, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      },
    );
  },
  DeleteUser:(data,callBack)=>{
   pool.query(
      `delete from signup where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {  
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  GetUserByEmail:(email, callBack)=>{
    pool.query(
        `select * from signup where email=?`,
        [email],
        (error,results,fields)=>{
            if (error){
                return callBack(error);
            }
            return callBack(null,results[0])
        });
  },
}; 