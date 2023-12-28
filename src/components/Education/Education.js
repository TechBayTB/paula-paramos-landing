import { useContext, useState } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Education.css'
import { EducationEnglish, EducationSpanish } from "./EducationText";
import Title from "./components/Title/Title";

const Education = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    const titlesData = [
        { title: 'Traductora Literaria y\n Técnico - Científica', titledesc: "Inglés - Español", year: "2002" },
        { title: 'Profesora\n de Idiomas', titledesc: "Inglés", year: "2004"  },
        { title: 'Traductora\n Pública', titledesc: "Inglés - Español", year: "2007" },
    ];

    

    return (
        <>
            <div className="Education" id='education'>
                <div className="education-background">
                    {titlesData.map((data, index) => (
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