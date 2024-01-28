import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './DigitalSignature.css'
import digitalSignature from "../../../../assets/digital-signature.svg"
import check from "../../../../assets/check.svg"
// import { EducationEnglish, EducationSpanish } from "./TitleText";

const DigitalSignature = () => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="info-box-container">
                <img src={digitalSignature} alt="logo" className="signature-icon"/>
                <h2 class="title">Firma Digital</h2>
                <div class="benefits-container">
                    <p>
                    <span><img src={check} alt="logo" className="check-icon"/></span>
                    Validez Jurídica
                    </p>
                    <p>
                    <span><img src={check} alt="logo" className="check-icon"/></span>
                    Autenticidad
                    </p>
                    <p>
                    <span><img src={check} alt="logo" className="check-icon"/></span>
                    Seguridad
                    </p>
                    <p>
                    <span><img src={check} alt="logo" className="check-icon"/></span>
                    Comodidad y Rapidez
                    </p>
                </div>
            </div>
        </>
    );
}

export default DigitalSignature; 