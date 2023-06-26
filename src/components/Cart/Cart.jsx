import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const notify = () => {
        toast.error('Carrito eliminado', {
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
    const manejadorVaciarCarrito = () => {
        vaciarCarrito();
        notify();
    }

    return (
        <div>
            {cantidadTotal === 0 ? (
                <div>
                    <h2> No hay productos en el carrito </h2>
                    <Button>
                        <Link to="/" className="no-link"> Ver Productos </Link>
                    </Button>
                </div>
            ) : (
                <>
                    {carrito.map((producto) => (
                        <CartItem key={producto.id} {...producto} />
                    ))}
                    <h3> Total: ${total} </h3>
                    <h3> Cantidad total: {cantidadTotal} </h3>
                    <Button variant="danger" onClick={manejadorVaciarCarrito}> Vaciar carrito </Button>
                    <Button>
                        <Link to="/checkout" className="no-link"> Finalizar compra </Link>
                    </Button>
                </>
            )}
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
    );
};

export default Cart;
