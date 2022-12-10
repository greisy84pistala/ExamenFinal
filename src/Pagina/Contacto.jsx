import React from "react";
import { Link } from "react-router-dom";


const Contacto=()=>{
    return(<div>
       <p>Bienvenidos A Nuestro Contacto De Adomicilio 🛵</p>
       <Link to="/"> 
       <img src='./icono.png'width={100}></img>
       </Link> {"\n"}
       <p>* Empleado: Camilo Lopez</p>
       <p>📞 Telefono: 3125568471</p>

       <p>* Empleada: Marcela Apraez</p>
       <p>📞 Telefono: 3114588495</p>

      <p> Estamos ubicados  Cra. 10 ##16-39</p>
      <p>📧Coreo: pizzeriamamami@gmail.com</p>
    </div>

    )
}
export default Contacto