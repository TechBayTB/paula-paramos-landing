import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './WhyMe.css'
import Reason from "./components/WhyMe/Reason";
import { reasonES, reasonEN } from "./WhyMeText";

const WhyMe = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    

    const reason = language === LanguageTypes.SPANISH ? reasonES : reasonEN;

    const title = language === LanguageTypes.SPANISH ? "¿Por qué elegirme?" : "Why Me?";
    
    return (
        <>
            <div className="WhyMe" id="WhyMe">
                <h2 className="whyme-title">{title}</h2>
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
        </>
    );
}


export default WhyMe; 