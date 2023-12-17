import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './WhyMe.css'
import Reason from "./components/WhyMe/Reason";


const WhyMe = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    const reason = [
        {logo:"experiencia.png",title:"Experiencia",descrip:"Más de 20 años trabajando en el rubro"},
        {logo:"reloj.png",title:"Entregas a Tiempo",descrip:"Cumplimiento puntual de plazos pautados"},
        {logo:"profesional.png",title:"Profesionalismo",descrip:"Asumo cada proyecto conseriedad y responsabilidad"},
        {logo:"compromiso.png",title:"Compromiso",descrip:"Puedes confiar en mi dedicación constante"},
        {logo:"flexibilidad.png",title:"Flexibilidad",descrip:"Me adapto dinámicamente para cumplir con tus expectativas"},
        {logo:"confidencial_2.png",title:"Confidencialidad",descrip:"Absoluta privacidad con respecto al material recibido"},
    ];

    return (
        <>
            <div className="WhyMe" id="WhyMe">
                <div>
                    <h2 className="whyme-title">¿Por qué elegirme?</h2>
                    <div className="whyme-container" id="whyme-container">
                        {reason.map((data, index) => (
                            <Reason
                                key={index}
                                logo={data.logo}
                                title={data.title}
                                descrip={data.descrip}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}


export default WhyMe; 