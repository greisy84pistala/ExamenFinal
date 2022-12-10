import './App.css';
import Cuerpo from './Componentes/Cuerpo';
import Header from './Componentes/Header';
import Pie from './Componentes/Pie';
import { ReactDOM } from "react";
import Menu from './Pagina/Menu';
import Informacion from './Pagina/Informacion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './Pagina/Contacto';
import Camara from './Pagina/Camara';
import Player1 from './Pagina/Player1';



function App() {
    return ( 
        
        <div className = "App" >
            <header className = "App-header" >

                <BrowserRouter >
                <Header/>
                <Routes >
                <Route path = "/Menu"element = {<Menu/>}/>  
                <Route path = "/"element = {<Cuerpo/>}/>  
                <Route path = '/informacion'element = {<Informacion/>}/>  
                <Route path = '/contacto'element = {<Contacto/>}/>  
                <Route path = '/camara'element = {<Camara/>}/> 
                <Route path = '/Player1'element = {<Player1/>}/>     
                <Route path = "/"element = {<Pie/>}/>   
                </Routes >   
                </BrowserRouter>  
               

             </header>

        </div>
    );
}
export default App;