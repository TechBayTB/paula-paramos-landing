import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Info.css'
import InfoBox from "./components/Certification/Certification";
import { reasonES, reasonEN } from "./InfoText";
import Certification from "./components/Certification/Certification";
import DigitalSignature from "./components/DigitalSignature/DigitalSignature";

const Info = () => {
    const { language } = useContext(LanguageContext);
    
    return (
        <>
            <div class="info-container" id="Firma">
                <div className="info" id="Info">
                    <DigitalSignature/>
                    <Certification/>
                </div>
            </div>
        </>
    );
}


export default Info; 