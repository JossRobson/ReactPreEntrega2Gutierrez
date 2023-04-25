
import { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { mFetch } from "../../Utils/mFetch"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Hearts } from "react-loader-spinner";

export function ItemListContainer({}) {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    useEffect(()=>{
        if (!category) {
            mFetch()
            .then(resultado=>{
                setProductos(resultado)
            })
            .catch(error=> console.log(error))
            .finally(()=> setIsLoading(false))
        }else{
            mFetch()
            .then(resultado=>{
                setProductos(resultado.filter(producto => producto.category === category))
            })
            .catch(error=> console.log(error))
            .finally(()=> setIsLoading(false))
        }
    }, [category])

    return (
        isLoading ? 
            <Hearts
            height="200"
            width="200"
            color="blue"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        />
        :
            <ItemList productos= { productos}/>
    )
}


  //export default ItemListContainer (1 sola vez)