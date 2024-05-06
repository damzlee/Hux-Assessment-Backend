const {
 createContact,
 GetContact,
 GetContactByid,
 UpdateContact,
 DeleteContact
} = require("./contactservice");

module.exports = {
  createContact: (req, res) => {
    const body = req.body;
    createContact(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          sucess: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },
  getContactById: (req, res) => {
    const id = req.params.id;
    GetContactByid(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          sucess: 0,
          message: "record not found",
        });
      }
      return res.json({
        sucess: 1,
        data: results,
      });
    });
  },
  getContact: (req, res) => {
    GetContact((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return (
        res.json({
          sucess: 1,
          data: results,
        })
      );
    });
  },
  updateContact: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    UpdateContact(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          sucess: 0,
          message: "failed to update",
        });
      }
      return res.json({
        sucess: 1,
        message: "update succesfull",
      });
    });
  },
  deleteContacts: (req, res) => {
    const data = req.body;
    DeleteContact(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          sucess: 0,
          message: "record not found",
        });
      }
      return res.json({
        sucess: 1,
        message: "Userdeleted",
      });
    });
  },
};
