const express=require("express")
const mongoose=require("mongoose")
//routes for requests
const processes= require('./routes/api/processes')

const app=express()
const path= require('path')

//express middleware
app.use(express.json())
app.use("/api/processes",processes)

//database uri
const db = require("./keys").mongoURI

//connecting to database
mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true }).then(()=>console.log("Mongoose Connected...")).catch(err => console.log(err))
// serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res) => { 
        res.sendfile(path.resolve(__dirname,'client', 'build','index.html'))
    })
}
//setting port
port = process.env.PORT || 5000

app.listen(port,()=>console.log(`server started on port ${port}`))