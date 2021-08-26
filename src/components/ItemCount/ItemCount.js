import React from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock,}) => {

    const [counter, setCounter] = React.useState(1);
    const [onAdd, setOnAdd] = React.useState();

    let agregar = () =>{

        if(counter <= stock){

            let cantidadAgregar = counter;
            
            let resultado = stock - cantidadAgregar;
            
            setOnAdd(resultado);
        }
        
    }
    
    let aumentarValor = () =>{

        setCounter(counter + 1);
    }

    
   
    let reducirValor = () =>{

        setCounter(counter - 1);
    }

    if (counter >= stock){
        aumentarValor = () =>{
            setCounter(counter)
        }
    }
    

    if (counter <= initial){
        reducirValor = () =>{
            setCounter(counter)
        }
    }

    return (
        <div className="contenedor-contador">
        <p className="stockDisponible">Stock disponible: {stock}</p>
        <p className="agregarAlCarrito">Agregar al carrito: {counter}</p>
        <p className="unidades-sobrantes">Quedan {onAdd} unidades</p>
        <button className="botonPlus" onClick={aumentarValor}>+</button>
        <button className="botonRest" onClick={reducirValor}>-</button>
        <button className="botonAgregar2" onClick={agregar}>Agregar</button>  
        </div>
    )
}

export default ItemCount