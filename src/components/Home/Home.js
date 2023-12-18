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
            <div className="Home" id='home'>
                <div className="home-background">
                    {/* <img className="home-logo" src={require('../../assets/fondo2.jpg')} alt='logo' /> */}
                    <div className="home-title">
                        <h2>{language === LanguageTypes.SPANISH ? HomeSpanish.h2 : HomeEnglish.h2}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 