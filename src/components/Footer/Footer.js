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
            <div class="footer-top-container">
                <div class="footer-top">
                    <a href='https://www.aati.org.ar/aati' target="_blank"><img class="img-footer" src={require(`../../assets/matricula1.jpg`)}></img></a>
                    <a href='https://sanisidro.traductorespba.org.ar/traductor/paramos-paula-andrea/' target="_blank"><img class="img-footer" src={require(`../../assets/matricula2.jpg`)}></img></a>
                    <a href='https://www.traductores.org.ar/traductor/paramos-paula-andrea/' target="_blank"><img class="img-footer" src={require(`../../assets/matricula3.jpg`)}></img></a>
                </div>
            </div>
            <div id='footerBackground'>
                <div class="footer">
                    <ul>
                        <li id='footerTechbay'>
                            <h2>PAULA PÁRAMOS</h2>
                            <p>{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p>
                        </li>
                        <li>
                            <h2>SERVICIOS</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Translation')}>Traducciones</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Courses')}>Cursos</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Firma')}>Firma Digital</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Firma')}>Certificación</p>
                            </div>
                        </li>
                        <li>
                            <h2>SOBRE MÍ</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('about-me')}>¿Quien Soy?</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('education')}>Mi educación</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('WhyMe')}>¿Por qué elegirme?</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('contact')}>Contáctame</p>
                            </div>
                        </li>
                        <li>
                            <h2>CONTACTO</h2>
                            <div className='footerGrid'>
                                <p>Paula Páramos</p>
                                <p>+54 9 15  5471  7868</p>
                                <p>paulaparamos@yahoo.com.ar</p>
                                <p>Buenos Aires, Argentina</p>
                            </div>
                        </li>
                    </ul>
                    <div id='footerLogos'>
                        <p>Powered by TechBay</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer; 