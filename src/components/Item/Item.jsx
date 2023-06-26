import './Item.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='titulo'>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <Button>
                <Link to={`/item/${id}`} className='no-link'> Ver Detalles </Link>
            </Button>
        </div>
    )
}

export default Item



