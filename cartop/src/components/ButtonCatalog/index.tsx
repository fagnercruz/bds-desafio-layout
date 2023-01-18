import { Link } from 'react-router-dom';
import './style.css';

const ButtonCatalog = () => {
    return (
        <div className="btn btn-site">
            <Link to="/catalogo">VER CATÁLOGO</Link>
        </div>
    );

};

export default ButtonCatalog;