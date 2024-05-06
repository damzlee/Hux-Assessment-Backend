const pool = require("../../configuration/database");

module.exports = {
  createContact: (data, callBack) => {
    pool.query(
      `insert into contacts (email,name,phonenumber) values(?,?,?)`,
      [data.email, data.name, data.phonenumber],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  GetContact: (callBack) => {
    pool.query(
      `select id,email,name,phonenumber from contacts`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  GetContactByid: (id, callBack) => {
    pool.query(
      `select id,email,name,phonenumber from contacts where id =?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  UpdateContact: (data, callBack) => {
    pool.query(
      `update contacts set email=?,name=?,phonenumber=? where id=?`,
      [data.email, data.name, data.phonenumber, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  DeleteContact: (data, callBack) => {
    pool.query(
      `delete from contacts where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
             