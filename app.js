
const express = require('express');
const app = express();
const cors = require("cors");
const userRouter = require("./api/Users/userrouter");
const contactRouter = require("./api/Contacts/contactrouter");


const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:3001"], // Whitelist the domains you want to allow
};
app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/api/Users", userRouter)
app.use("/api/Contacts", contactRouter)
app.listen(3000,()=>{
    console.log("server is up ")
});