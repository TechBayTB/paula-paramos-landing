import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Reason.css'
// import { EducationEnglish, EducationSpanish } from "./TitleText";
const Reason = ({logo,title,descrip}) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            
            <div className="reason-container">
                {/* <img className="education-pic" src={require('../../../../assets/education.png')} alt='logo' /> */}
                <img src={require(`../../../../assets/${logo}`)} alt="logo" className="logo"/>
                <p className="title">{title}</p>
                <p className="descrip">{descrip}</p>
            </div>
        </>
    );
}

export default Reason; 