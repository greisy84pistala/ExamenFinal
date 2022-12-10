import React from "react";
import marineraImg from "../assets/img/marinera.jpg"
import quesosImg from "../assets/img/quesos.jpg"
import hawaianaImg from "../assets/img/hawaiana.jpg"
import napolitanaImg from "../assets/img/napolitana.jpg"
import pepperoniImg from "../assets/img/pepperoni.jpg"
import brocoliImg from "../assets/img/brocoli.jpg"
import remolachaImg from "../assets/img/remolacha.jpg"
import champiñonesImg from "../assets/img/champiñones.jpg"
import rancheraImg from "../assets/img/ranchera.jpg"
import berenjenaImg from "../assets/img/berenjena.jpg"

const Menu=()=>{
    return(<div>
        <br />
        <br />
        <br />
        <h1>CARTA  🍽</h1>
        <br />
       
        <div className="item-text">
            <h1>LA MARINARA </h1> 
            </div>
            <img src={marineraImg} width={320} />
            <div className="item-text">
            <p>$15.000 *Porcion: 6.000</p>
        </div>
        
        <div className="item-text">
            <h1>CUATRO QUESOS</h1>
            </div>
            <img src={quesosImg} width={320}/>
            <div className="item-text">
            <p> $20.000  *Porcion: 5.000</p>
        </div>
       
        <div className="item-text">
            <h1>PIZZA HAWAIANA</h1>
            </div>
            <img src={hawaianaImg} width={320}/>
            <div className="item-text">
            <p> $20.000  *Porcion: 5.000</p>
        </div>
       
        <div className="item-text">
            <h1>PIZZA NAPOLITANA</h1>
            </div>
            <img src={napolitanaImg} width={320}/>
            <div className="item-text">
            <p> $10.000  *Porcion: 3.000</p>
        </div>

        <div className="item-text">
            <h1>PIZZA DE PEPPERONI</h1>
            </div>
            <img src={pepperoniImg} width={320}/>
            <div className="item-text">
            <p> $15.000  *Porcion: 3.000</p>
        </div>

        <div className="item-text">
            <h1>PIZZA DE CHAMPIÑONES</h1>
            </div>
            <img src={champiñonesImg} width={220}/>
            <div className="item-text">
            <p> $25.000</p>
        </div>

        <div className="item-text">
            <h1>PIZZA RANCHERA</h1>
            </div>
            <img src={rancheraImg} width={320}/>
            <div className="item-text">
            <p> $20.000</p>
        </div>
        <br />
        <h2>Pizzas Vegetarianas </h2>
        <div className="item-text">
            <h1>PIZZA DE BROCOLI</h1>
            </div>
            <img src={brocoliImg} width={320}/>
            <div className="item-text">
            <p> $25.000</p>
        </div>

        <div className="item-text">
            <h1>PIZZA DE REMOLACHA</h1>
            </div>
            <img src={remolachaImg} width={320}/>
            <div className="item-text">
            <p> $25.000</p>
        </div>

        <div className="item-text">
            <h1> PIZZA DE BERENJENA Y CALABACIN</h1>
            </div>
            <img src={berenjenaImg} width={320}/>
            <div className="item-text">
            <p> $25.000</p>
        </div>








    </div>

    )
}
export default Menu