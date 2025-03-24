const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")
const cors = require('cors');
app.use(cors());
app.use(express.json());

const users = [{id: 1, username: "karthik", password: "karthik@123"}, {id:2, username: "ravi", password: "ravikumar"}];

const authenticateUser = (request, response, next) => {
    let jwtToken 
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined){
        jwtToken = authHeader.split(" ")[1];
    } 
    if (jwtToken === undefined) {
        response.status(401);
        response.send("Invalid JWT Token")
    } else {
        jwtToken.verify(jwtToken, "MY_SECRET_TOKEN",async (error, payload) => {
            if (error) {
                response.status(401);
                response.send("Invalid JWT Token")
            } else {
                request.username = username;
                next();
            }
        })
    }
}


app.post("/api/login/", async (request, response) => {
    const {username, password} = request.body;
    const user = users.find(item => item.username === username);
    if (user === undefined) {
        response.status(401);
        response.send("Invalid credentials");
    } else {
        payload = {
            username,
            password,
        }
        const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
        response.send(jwtToken);
    }
})

app.get("/api/dashboard", authenticateUser, (request, response) => {
    response.send([{id: 1, title: "Card 1"}, {id: 2, title: "Card 2"}, {id: 3, title: "Card3"}]);
})

app.get("/api/map", authenticateUser, (request, response) => {
    response.send({enter: [20.5937, 78.9629], zoom: 5});
})


app.listen(3000, () => {
    console.log("Server started");
})