import { useContext, useState } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Education.css'
import { EducationEnglish, EducationSpanish } from "./EducationText";
import Title from "./components/Title/Title";

const Education = () => {
    const { language } = useContext(LanguageContext);

    const translation = language === LanguageTypes.SPANISH ? EducationSpanish : EducationEnglish;
    
    

    return (
        <>
            <div className="Education" id='education'>
                <div className="education-background">
                    {translation.map((data, index) => (
                        <Title
                            key={index}
                            title={data.title}
                            titledesc={data.titledesc}
                            year={data.year}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


export default Education; 