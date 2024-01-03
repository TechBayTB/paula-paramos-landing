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
                <div className="courses-img-container">
                    <img src={require(`../../assets/Captura_de_pantalla_2023-12-14_171802.png`)} alt="img-courses" className="img-courses"/>
                    <button className="couses-btn">{language === LanguageTypes.SPANISH ? "Contáctame" : "Contact me"}</button>
                </div>
                <div className="courses-text-container">
                    <h2 className="h2-courses">{language === LanguageTypes.SPANISH ? "Cursos de Inglés - Español" : "English courses - Spanish"}</h2>
                    {translation.map((translationTextES) => (
                        <CoursesText
                            text={translationTextES.text}
                        />   
                    ))}
                </div>
            </div>
        </>
    );
}


export default Courses; 