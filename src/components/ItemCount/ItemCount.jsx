import { useState } from "react";

const ItemCount = ( {addToCart} ) => {

    const [cantidad, setCantidad] = useState(1);
    
    const sumar = () => {
        cantidad < 15 && setCantidad(cantidad + 1);
    }

    {/*Agregue el stock maximo, pero puede que haya que hacerlo de otra forma*/}

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad -1);
    }

  return (
    <div>
      <div>
        <button onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button onClick={sumar}>+</button>
      </div>
      <div>

      {/*Falta crear funcion addToCart y pasarla a este archivo por props*/}

        <button onClick={ ()=> addToCart(cantidad)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount