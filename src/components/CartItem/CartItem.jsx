import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);
    const notify = () => {
        toast.error('Producto eliminado', {
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

    const manejadorEliminarProdCarrito = () => {
        eliminarProducto(item.id);
        notify();
    }


    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio} </p>
            <Button variant="danger" onClick={manejadorEliminarProdCarrito} > Eliminar </Button>
        </div>
    )
}

export default CartItem