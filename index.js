const express = require("express")

const app = express();

app.use(express.json())



// ============== localy data saving the vaiable =====================//
let name = [];


// ========================== post method ============================//
// =========search postman on (http://localhost:3000/users) ==========//
app.post("/users", (req, res) => {
    req.body.id = name.length + 1
    name.push(req.body)
    res.json({ message: "ok" })
})


// ================= get method (showing all the datas) =================//
// ======== search postman on (http://localhost:3000/fullusers) =========//
app.get("/fullusers", (req, res) => {
    res.json(name)
})


// =============== put method (find the email and edit it) ==============//
// ======== search postman on (http://localhost:3000/editing) ===========//
app.put("/editing", (req, res) => {
    let data = name.find(obj => obj.email == req.body.email)
    if (data) {
        name.push(req.body)
        res.json({ message: "edited" })
    } else {
        res.json({ message: "please check your ID" })
    }
})

//==================== Delete method(find the email and delete) =============//
// ======== search postman on (http://localhost:3000/deleteusers) ===========//
app.delete("/deleteusers", (req, res) => {
    let data = name.find(obj => obj.email == req.body.email)
    if (data) {
        name.splice(data, 1)
        res.json({ message: "Deleted" })
    } else {
        res.json({ message: "please check your ID" })
    }

})

// ============== get method ( using params to get the data) ================//
// ======== search postman on (http://localhost:3000/users/id) ==============//
//======================== (substitute id : 1 ) =============================//
//================ (example:http://localhost:3000/users/1) ==================//
app.get("/users/:id", (req, res) => {
    let data = name.find(obj => obj.id == req.params.id)
    console.log(data)
    res.json(data);
})


// ============== get method ( using params to get the data) ====================//
// ======== search postman on (http://localhost:3000/users?email=) ==============//
//=================== (substitute email : abc@gmail.com ) =======================//
//======= (example:http://localhost:3000/users?email=abc@gmail.com) =============//
app.get("/users", (req, res) => {
    let data = name.find(obj => obj.email == req.query.email)
    res.json(data)

})

// =========================== our server code is 3000 ==========================//
app.listen(3000, () => {
    console.log("server is started");
})


