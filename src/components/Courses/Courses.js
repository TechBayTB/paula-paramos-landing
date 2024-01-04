import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Courses.css'


import {CoursesTextES,CoursesTextEN} from "./CoursesText";
import CoursesText from "./components/CoursesInfo";

const Courses = () => {
    const { language } = useContext(LanguageContext);

    
    const translation = language === LanguageTypes.SPANISH ? CoursesTextES : CoursesTextEN;

    return (
        <>
            <div className="Courses" id="Courses">
                <h2 className="h2-courses rosa">{language === LanguageTypes.SPANISH ? "Cursos de Inglés - Español" : "English Courses - Spanish"}</h2>
                <div className="flex-courses">
                    <div className="courses-img-container">
                        <img src={require(`../../assets/Captura_de_pantalla_2023-12-14_171802.png`)} alt="img-courses" className="img-courses"/>
                        <button className="button">{language === LanguageTypes.SPANISH ? "CONTÁCTAME" : "CONTACT ME"}</button>
                    </div>
                    <div className="courses-text-container">
                        {translation.map((translationTextES) => (
                            <CoursesText
                                text={translationTextES.text}
                            />   
                        ))}
                    </div>
                </div>
            </div>
            <div className="Courses-responsive" id="Courses">
                <h2 className="h2-courses rosa">{language === LanguageTypes.SPANISH ? "Cursos de Inglés - Español" : "English Courses - Spanish"}</h2>
                <div className="flex-courses">
                    <div className="courses-text-container">
                        {translation.map((translationTextES) => (
                            <CoursesText
                                text={translationTextES.text}
                            />   
                        ))}
                    </div>
                    <div className="courses-img-container">
                        <img src={require(`../../assets/Captura_de_pantalla_2023-12-14_171802.png`)} alt="img-courses" className="img-courses"/>
                        <button className="button">{language === LanguageTypes.SPANISH ? "CONTÁCTAME" : "CONTACT ME"}</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Courses; 