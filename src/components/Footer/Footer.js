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
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title1 : FooterEnglish.title1}</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Translation')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text1 : FooterEnglish.text1}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Courses')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text2 : FooterEnglish.text2}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Firma')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text3 : FooterEnglish.text3}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Firma')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text4 : FooterEnglish.text4}</p>
                            </div>
                        </li>
                        <li>
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title2 : FooterEnglish.title2}</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('about-me')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text5 : FooterEnglish.text5}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('education')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text6 : FooterEnglish.text6}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('WhyMe')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text7 : FooterEnglish.text7}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('contact')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text8 : FooterEnglish.text8}</p>
                            </div>
                        </li>
                        <li>
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title3 : FooterEnglish.title3}</h2>
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