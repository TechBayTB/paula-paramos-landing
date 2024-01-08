import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './InfoBox.css'
// import { EducationEnglish, EducationSpanish } from "./TitleText";
const InfoBox = ({logo,title}) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="info-box-container">
                {/*<img src={require(`../../../../assets/${logo}`)} alt="logo" className="logo"/>*/}
                <p className="title">{title}</p>
            </div>
        </>
    );
}

export default InfoBox; 