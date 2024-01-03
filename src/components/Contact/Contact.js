import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Contact.css'


const Contact = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    

    // const reason = language === LanguageTypes.SPANISH ? reasonES : reasonEN;

    const title = language === LanguageTypes.SPANISH ? "Contáctame" : "Contact me";
    
    return (
        <>
            <div className="contact" id="contact">
            <h2 className="section-tittle">{title}</h2>
            <div class="section-tittle-design"></div>
      
            <div id="form-container">
                <div id="form-contact">
                    <input class="input" id="name" type="text"  placeholder="Nombre" required></input>
                    <input class="input" id="email" type="email"  placeholder="Email" required></input>
                    <input class="input" id="text" type="text"  placeholder="Ingrese su comentario"></input>
                    <button class="btnform input" id="form_btn">Enviar</button>
                    <p id="form-mensaje-alert"> </p>
                </div>
            </div>
            </div>
        </>
    );
}


export default Contact; 