let productos = [
    {id: '1', name:"Lentes Berlin", category: "Nuevo Ingreso", description:"", price: "14000", foto:'../public/Berlin.jpg'},
    {id: '2', name:"Lentes Budapest", category: "Nuevo Ingresp", description:"", price: "15000", foto:"../Buudapest.jpg"},
    {id: '3', name:"Lentes Monaco", category: "Nuevo Ingreso", description:"", price: "30000", foto:"../public/Monaco.jpg"},
    {id: '4', name:"Lentes NewYork", category: "2x1", description:"", price: "24000", foto:"../public/NewYork.jpg"},
    {id: '5', name:"Lentes Neón",category: "2x1", description:"", price: "35000", foto:"../public/LentesNeon.jpg"},
    
    
]

export const mFetch = (id) => {
    return new Promise ((res, rej) =>{
        setTimeout (()=> {
            res(!id ? productos : productos.find(producto =>producto.id === id))
            },1000)
    })
}