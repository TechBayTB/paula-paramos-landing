import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Certification.css'
import certificationPic from "../../../../assets/certification.svg"
import { certificationTextES, certificationTextEN, certificationTitleES, certificationTitleEN } from "./CertificationText";

const Certification = () => {
    const { language } = useContext(LanguageContext)

    const translation = language === LanguageTypes.SPANISH ? certificationTextES : certificationTextEN;

    return (
        <>
            <div className="certification-container">
                <img src={certificationPic} alt="logo" className="certification-icon"/>
                <h2 class="title">{language === LanguageTypes.SPANISH ? certificationTitleES.title : certificationTitleEN.title}</h2>
                {translation.map((data, index) => (
                    <p key={index}>
                        {data.ul}
                    </p>
                ))}
            </div>
        </>
    );
}

export default Certification; 