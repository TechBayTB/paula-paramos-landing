import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Certification.css'
import certificationPic from "../../../../assets/certification.svg"
// import { EducationEnglish, EducationSpanish } from "./TitleText";

const Certification = () => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="certification-container">
                <img src={certificationPic} alt="logo" className="certification-icon"/>
                <h2 class="title">Certificación</h2>
                <p>
                    Preparación de exámenes internacionales
                </p>
                <p>
                    Capacitación para ingresos a profesorados y traductorados
                </p>
                <p>
                    Clases de inglés general para mejorar la comunicación
                </p>
            </div>
        </>
    );
}

export default Certification; 