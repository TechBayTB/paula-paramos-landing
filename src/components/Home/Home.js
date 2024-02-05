import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Home.css'
import { HomeEnglish, HomeSpanish } from "./HomeText";
const Home = () => {
    const { language } = useContext(LanguageContext)

    const handleNavigation = (link) => {
        document.getElementById(link).scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <div className="home-background" id="home">
                <div className="home">
                    <h2 className="home-title">{language === LanguageTypes.SPANISH ? HomeSpanish.h2 : HomeEnglish.h2}</h2>
                    <button className="home-button">{language === LanguageTypes.SPANISH ? "CONTÁCTAME" : "CONTACT ME"}</button>
                </div>
            </div>
        </>
    );
}

export default Home; 