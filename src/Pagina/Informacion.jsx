import { Link } from "react-router-dom";
import marineraImg from "../assets/img/marinera.jpg"
import quesosImg from "../assets/img/quesos.jpg"
import hawaianaImg from "../assets/img/hawaiana.jpg"
import napolitanaImg from "../assets/img/napolitana.jpg"
import pepperoniImg from "../assets/img/pepperoni.jpg"
import brocoliImg from "../assets/img/brocoli.jpg"
import remolachaImg from "../assets/img/remolacha.jpg"

const Informacion=()=>{
    return(<div>
    <br />
    <br />
    <br />
      <h2>Descripcion Del Menu:</h2>
      
      <h1>LA MARINARA </h1>
      <img src={marineraImg} width={200}/>
      <p>Es la pizza más antigua, con salsa de tomate, orégano, ajo, aceite de oliva, albahaca y una pizca de sal. Su principal característica es que no tiene queso.
      Su nombre se debe a que los marineros la elegían para llevar a alta mar por sus propiedades de conservación.
      </p>
      <h1>CUATRO QUESOS</h1>
      <img src={quesosImg} width={200}/>
      <p>La pizza cuatro quesos, generalmente son la mozarela, el gorgonzola, el fontina y el parmesano. Todos estos quesos son fundibles.
      Se derriten sobre una base de salsa de tomate, o también hay recetas sin tomate.</p>
      <h1>PIZZA HAWAIANA</h1>
      <img src={hawaianaImg} width={200}/>
      <p>La pizza hawaiana es una pizza que contiene una base de queso fundido y tomate que se aliñan con jamón y piña.​</p>
      <h1>PIZZA NAPOLITANA</h1>
      <img src={napolitanaImg} width={200}/>
      <p> La pizza Napolitana contiene tomate, mozzarella, anchoas, orégano, alcaparras y aceite.</p>
      <h1>PIZZA DE PEPPERONI</h1>
      <img src={pepperoniImg} width={200}/>
      <p>El pepperoni es una variedad de salami con pimiento de la cocina estadounidense</p>
      <br />
      <h2>Pizzas Vegetarianas </h2>
      <h1>PIZZA DE BROCOLI</h1>
      <img src={brocoliImg} width={220}/>
      <p> la pizza de brocoli tiene una variedad, brocoli, queso, chanpiñones, tomates cherry</p>
      <h1>PIZZA DE REMOLACHA</h1>
      <img src={remolachaImg} width={220}/>
      <p>tiene una vaiedad como, Queso mozzarella, Espinacas frescas, Champiñones, Aceitunas negras, Orégano</p>
      <br />
      <p>Para mas informacion llamar: 3154871256</p>
      <br />

    </div>
       
    )
}
export default Informacion