import express from 'express';  
import clientRouter from './routes/client-routes';  
import cors from "cors"

//Create an instance of express
const app = express()

// Enable express to read data in json format
app.use(express.json())

// Accept requests from anywhere for every client IP
app.use(cors())

//Basic end point to check if the api is available
app.get ("api", (req, res)=>{
    res.send("Api working")
})

app.use("/client", clientRouter )


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})