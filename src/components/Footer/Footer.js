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
                        <a href='https://www.aati.org.ar/aati' target="_blank"><img class="img-footer" src={require(`../../assets/matricula1.jpg`)}></img></a>
                        <a href='https://sanisidro.traductorespba.org.ar/traductor/paramos-paula-andrea/' target="_blank"><img class="img-footer" src={require(`../../assets/matricula2.jpg`)}></img></a>
                        <a href='https://www.traductores.org.ar/traductor/paramos-paula-andrea/' target="_blank"><img class="img-footer" src={require(`../../assets/matricula3.jpg`)}></img></a>
                    </div>
                </div>
                <div class="main-footer-container">
                    <div class="main-footer">
                        {/* <div class="footer-left">
                            <h2>PAULA PÁRAMOS</h2>
                            <p id="p-footer">{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p>
                        </div> */}
                        <ul class="footer-right">
                            <li id='footerPaula'>
                                <h2 class="footer-titles" id="h2_footer_resources">PAULA PÁRAMOS</h2>
                                <ul class="footer-box">
                                    <li><p>{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_resources">SERVICIOS</h2>
                                <ul class="footer-box">
                                    <li><p onClick={() => handleNavigation('Translation')}>Traducciones</p></li>
                                    <li><p onClick={() => handleNavigation('Courses')} >Cursos</p></li>
                                    <li><p onClick={() => handleNavigation('Firma')}>Firma Digital</p></li>
                                    <li><p onClick={() => handleNavigation('Firma')}>Certificación</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_us">SOBRE MÍ</h2>
                                <ul class="footer-box">
                                    <li><p onClick={() => handleNavigation('about-me')}>¿Quien Soy?</p></li>
                                    <li><p onClick={() => handleNavigation('education')}>Mi educación</p></li>
                                    <li><p onClick={() => handleNavigation('WhyMe')}>¿Por qué elegirme?</p></li>
                                    <li><p onClick={() => handleNavigation('contact')}>Contáctame</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_contact">CONTACTO</h2>
                                <ul class="footer-box">
                                    <li><p>paulaparamos@yahoo.com.ar</p></li>
                                    <li><p >+54 9 15  5471  7868</p></li>
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