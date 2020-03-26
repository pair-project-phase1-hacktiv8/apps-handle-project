const routes = require("./routes")
const express = require("express")
const app= express()
port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false }))
app.use(routes)

app.listen(port,()=>{
    console.log('port listening' + port);
})