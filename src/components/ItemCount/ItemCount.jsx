import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
//Toast:
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);
    const notify = () => {
        toast.success('Producto agregado', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };


    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    const manejadorAgregarCarrito = () => {
        funcionAgregar(contador);
        notify();
    }

    return (
        <>
            <div className='contenedor-contador'>
                <Button onClick={decrementar}> - </Button>
                <p> {contador} </p>
                <Button onClick={incrementar}> + </Button>
            </div>
            <Button onClick={ () => { manejadorAgregarCarrito() } }> Agregar al Carrito </Button>
        </>
    )
}

export default ItemCount