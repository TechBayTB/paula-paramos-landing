import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './AboutMe.css'
import { AboutMeEnglish, AboutMeSpanish } from "./AboutMeText";
const AboutMe = () => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="AboutMe" id='about-me'>
                <div className="about-me-background">
                    <div className="about-me-title">
                        <h2>{language === LanguageTypes.SPANISH ? AboutMeSpanish.h2 : AboutMeEnglish.h2}</h2>
                        <h3>{language === LanguageTypes.SPANISH ? AboutMeSpanish.h3 : AboutMeEnglish.h3}</h3>
                        <p>{language === LanguageTypes.SPANISH ? AboutMeSpanish.p : AboutMeEnglish.p}</p>
                        <p>{language === LanguageTypes.SPANISH ? AboutMeSpanish.p2 : AboutMeEnglish.p2}</p>
                    </div>
                    <img className="about-me-pic" src={require('../../assets/about-me-pic.png')} alt='logo' />
                </div>
            </div>
        </>
    );
}

export default AboutMe; 