import express from "express";
const app= express()


import userRutes from "./routes/user.js";
import rolesRutes from "./routes/roles.js";



import morgan from "morgan";
//midlewares
app.use(express.json())
app.use(express.urlencoded({extended:false})) //datos simples
app.use(morgan("dev"))




//routes
app.use("/users", userRutes)
app.use("/roles", rolesRutes)

//controlerError
app.use((err, req, res, next)=>{
    return res.json({
        message: err.message
    })

})

app.set("port", 3000)
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"))
})