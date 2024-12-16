import {Router, Request, Response} from 'express';  
import { ClientService } from '../services/client-service';


const clientRouter = Router()
const clientService = new ClientService()

clientRouter.post("/", (req: Request, res: Response)=>{
   
    clientService.addClient({name: req.body.name, email: req.body.email});
    res.status(201).send("Client added")
})

clientRouter.get("/", (req: Request, res: Response)=>{
    
    res.status(200).json(clientService.getClients())
})

clientRouter.delete("/:id", (req: Request, res: Response)=>{

    clientService.deleteClient(parseInt(req.params.id))
    res.status(200).send("Client deleted")
})

clientRouter.put("/:id", (req: Request, res: Response)=>{
    clientService.updateClient({id: parseInt(req.params.id), name: req.body.name, email: req.body.email})
    res.status(200).send("Client updated")
})

export default clientRouter
//More routes