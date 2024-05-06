const {createUser, deleteUser,updateUsers,getUserById,getUsers, login } = require ('./usercontroller');
const router = require("express").Router();
const  {checkToken} = require("../../auth/token_validation")

router.post("/",createUser);
router.get("/", getUsers);
router.get("/:id", checkToken, getUserById);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken,  deleteUser);
router.post("/login", login);
module.exports =router;