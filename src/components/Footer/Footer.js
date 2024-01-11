import { useContext } from 'react';
import LanguageContext from '../../Context/Language';
import { LanguageTypes } from '../Types/LanguageTypes';
import './Footer.css'
import { FooterEnglish, FooterSpanish } from './FooterText';
const Footer = () => {

    const { language } = useContext(LanguageContext)
    const handleNavigation = (link) => {
        document.getElementById(link).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <footer class="footer">
                <div class="footer-top-container">
                    <div class="footer-top">
                        <img class="img-footer" src={require(`../../assets/matricula1.jpg`)}></img>
                        <img class="img-footer" src={require(`../../assets/matricula2.jpg`)}></img>
                        <img class="img-footer" src={require(`../../assets/matricula3.jpg`)}></img>
                    </div>
                </div>
                <div class="main-footer-container">
                    <div class="main-footer">
                        <div class="footer-left">
                            <h2>PAULA PÁRAMOS</h2>
                            <p id="p-footer">{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p>
                        </div>
                        <ul class="footer-right">
                            <li>
                                <h2 class="footer-titles" id="h2_footer_resources">SERVICIOS</h2>
                                <ul class="footer-box">
                                    <li><button onClick={() => handleNavigation('service')}>Traducciones</button></li>
                                    <li><button onClick={() => handleNavigation('service')} >Cursos</button></li>
                                    <li><button onClick={() => handleNavigation('service')}>Firma Digital</button></li>
                                </ul>
                            </li>
                            <li>
                                <h2 class="footer-titles" id="h2_footer_us">SOBRE MÍ</h2>
                                <ul class="footer-box">
                                    <li>
                                        <button onClick={() => handleNavigation('about-me')}>¿Quien Soy?</button></li>
                                    <li><button onClick={() => handleNavigation('contact')}>Contactame</button></li>
                                </ul>
                            </li>
                            <li>
                                <h2 class="footer-titles" id="h2_footer_contact">CONTACTO</h2>
                                <ul class="footer-box">
                                    <li><p>info@paulaparamos.com</p></li>
                                    <li><p >+54 9 11 3669-9874</p></li>
                                    <li><p>Paula Páramos</p></li>
                                    <li><p>Buenos Aires, Argentina</p></li>

                                </ul>
                            </li>
                        </ul>
                        <div class="footer-bottom">
                            <p id="rights">Powered by TechBay</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer; 