import {Router, Request, Response} from 'express';  

const clientRouter = Router()

clientRouter.post("/", (req: Request, res: Response)=>{
    console.log(req.body)
    res.status(201).send("Client added")
})


export default clientRouter
//More routes