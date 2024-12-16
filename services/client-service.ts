
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

    deleteClient(id:number){
        this.clients = this.clients.filter(client => client.id !== id)
    }

    updateClient( clientEdit: Client) {
        this.clients = this.clients.map(client => {
            if(client.id === clientEdit.id){
                return clientEdit
            }
            return client
        })
    }
}