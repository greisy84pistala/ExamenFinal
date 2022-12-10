import { Link } from "react-router-dom";

const Header =()=>{
    return <div>
        <nav className="barra">
            <Link to='/'>
                <img src='/pizza.png' width='80'/>
            </Link>

            <label></label>
            <ul className="menu">
                <li>
                <Link className="link" to="menu">Menu</Link> 
                </li>
                <li>
                <Link className="link" to="informacion">Informacion</Link>
                </li>
                <li>
                <Link className="link" to="contacto">Contacto</Link> 
                </li>
                <li>
                <Link className="link" to="camara">Camara</Link> 
                </li>
                <li>
                <Link className="link" to="player1">Musica</Link> 
                </li>
            </ul>
        </nav>
    </div>
}

export default Header;
