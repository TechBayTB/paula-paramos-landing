import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Info.css'
import InfoBox from "./components/InfoBox/InfoBox";
import { reasonES, reasonEN } from "./InfoText";

const Info = () => {
    const { language } = useContext(LanguageContext);
    
    const logo = "nb"
    const titlee = "hola"
    return (
        <>
            <div class="info-container">
                <div className="info" id="Info">
                    <InfoBox logo={logo} title={titlee}/>
                    <InfoBox logo={logo} title={titlee}/>
                </div>
            </div>
        </>
    );
}


export default Info; 