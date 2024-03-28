import getProducts from "../../data/getProducts";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
  
    useEffect( ()=> {
      getProducts
        .then((res) => setProducts(res))
        .catch((err) => console.log(err))
        .finally(() => console.log("Promesa finalizada"));
    }, []);

    
    return (
      <div>
        <ItemList products={products}/>
      </div>
    );
  };
  
  export default ItemListContainer
  