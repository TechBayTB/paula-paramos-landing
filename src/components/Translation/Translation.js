import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Translation.css'


import { translationsTextES, translationsTextEN } from "./TranslationText";
import TranslationsText from "./components/TranslationsText";

const Translation = () => {
    const { language } = useContext(LanguageContext);

    
    const translation = language === LanguageTypes.SPANISH ? translationsTextES : translationsTextEN;

    const handleNavigation = (link) => {
        document.getElementById(link).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <div className="Translation" id="Translation">
                <h2 className="h2-translations rosa">{language === LanguageTypes.SPANISH ? "Traducciones" : "Translations"}</h2>
                <div className="flex">
                    <div className="translation-text-container">
                        {translation.map((translationTextES) => (
                            <TranslationsText
                                text={translationTextES.text}
                            />   
                        ))}
                    </div>
                    <div className="translate-img-container">
                        <img src={require(`../../assets/traducciones.jpg`)} alt="img-translation" className="img-translation"/>
                        <button className="button" onClick={() => handleNavigation('contact')}>{language === LanguageTypes.SPANISH ? "CONTÁCTAME" : "CONTACT ME"}</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Translation; 