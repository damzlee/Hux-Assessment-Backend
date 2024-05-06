const {
  createContact,
  getContact,
  getContactById,
  updateContact,
  deleteContacts
 
} = require("./contactcontroller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createContact);
router.get("/", getContact);
router.get("/:id", checkToken, getContactById);
router.patch("/", checkToken, updateContact);
router.delete("/", checkToken, deleteContacts);
module.exports = router;
