
export interface  Client {
    id?:number;
    name: string;
    email: string;
}


export class ClientService {
    private clients:Client[] = []

    addClient(client:Client){
        client.id = new Date().getTime()    
        this.clients.push(client)
    }

    getClients(){
        return this.clients
    }
}