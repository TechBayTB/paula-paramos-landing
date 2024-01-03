import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Title.css'
import { EducationEnglish, EducationSpanish } from "./TitleText";
import educationPic from '../../../../assets/education.svg';


const Title = ({title, titledesc, year}) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="education-title">
                <img className="education-pic" src={educationPic} alt="logo" />
                <p className="titulo">{title}</p>
                <p className="texto">{titledesc}</p>
                <p className="texto">{year}</p>
            </div>
        </>
    );
}

export default Title; 