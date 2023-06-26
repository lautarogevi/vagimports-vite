import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        // Ahora aca creo un objeto con el item y la cantidad:
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorCard'>
            <div className='contenedorItem'>
                <h2> Nombre: {nombre} </h2>
                <h3> ID: {id} </h3>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <img className='imgDetail' src={img} alt={nombre} />
                <h3> Stock disponible: {stock} </h3>
                <h3> Precio: ${precio} </h3>
                <hr />
                {
                    agregarCantidad > 0 ? (<Button><Link to={"/cart"} className='no-link'> Terminar compra </Link></Button>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default ItemDetail