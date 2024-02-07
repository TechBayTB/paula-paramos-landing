import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './DigitalSignature.css'
import digitalSignature from "../../../../assets/digital-signature.svg"
import check from "../../../../assets/check.svg"
// import { EducationEnglish, EducationSpanish } from "./TitleText";
import { digitalSignatureTextES, digitalSignatureTextEN, digitalSignatureTitleES, digitalSignatureTitleEN  } from "./DigitalSignatureText";

const DigitalSignature = () => {
    const { language } = useContext(LanguageContext)

    const translation = language === LanguageTypes.SPANISH ? digitalSignatureTextES : digitalSignatureTextEN;

    return (
        <>
            <div className="info-box-container">
                <img src={digitalSignature} alt="logo" className="signature-icon"/>
                <h2 class="title">{language === LanguageTypes.SPANISH ? digitalSignatureTitleES.title : digitalSignatureTitleEN.title}</h2>

                <div class="benefits-container">
                    {translation.map((data, index) => (
                        <p key={index}>
                            <span><img src={check} alt="logo" className="check-icon"/></span>
                            {data.ul}
                        </p>
                    ))}
                </div>

            </div>
        </>
    );
}

export default DigitalSignature; 