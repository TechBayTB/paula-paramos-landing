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
            <div id='home'>
                <div className="Home">
                    <div className="home-background">
                        {/*<img className="home-logo" src={require('../../assets/logo.png')} alt='logo' />*/}
                        <div className="home-title">
                            <h2>{language === LanguageTypes.SPANISH ? HomeSpanish.h2 : HomeEnglish.h2}</h2>
                        </div>
                        <button className="home-button" onClick={() => handleNavigation('service')} >{language === LanguageTypes.SPANISH ? HomeSpanish.button : HomeEnglish.button}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 