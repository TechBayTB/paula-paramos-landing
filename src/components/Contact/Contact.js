import { useContext, useState } from 'react';
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Contact.css'
import { useFormik } from 'formik'
import { sendMail } from './Contact.service';
import { ContactEnglish, ContactSpanish } from './ContactText';

const Contact = () => {
    const { language } = useContext(LanguageContext);

    const title = language === LanguageTypes.SPANISH ? "Contáctame" : "Contact me";
    
    const [send, setSend] = useState(false)
    const [loading, setLoading] = useState(false)


    const validate = values => {
        const errors = {};
        if (!values.name) {
        errors.name = language === LanguageTypes.SPANISH ? 'Campo Obligatorio' : 'Required Field';
        } else if (values.name.length > 15) {
        errors.name = language === LanguageTypes.SPANISH ? 'Ingrese un nombre con menos de 15 caracteres' : 'Enter a name with less than 15 characters';
        }

        if (!values.email) {
        errors.email = language === LanguageTypes.SPANISH ? 'Campo Obligatorio' : 'Required Field';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = language === LanguageTypes.SPANISH ? 'Mail Invalido' : 'Invalid Mail';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        text: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
        setLoading(true)
        sendMail(values).then(() => setSend(true))

        setTimeout(() => {
            setSend(false)
            setLoading(false)
            resetForm({ values: '' })
        }, 5000)
        },
    });

    return (
        <>
        <div className="contact" id="contact">
            <h2 className="whyme-title rosa">{title}</h2>
            <div id="form-container">
                <div id="form-contact">
                        {!send ?
                            <form onSubmit={formik.handleSubmit} className='form'>
                                <div className='inputs'>
                                    {language === LanguageTypes.SPANISH ?
                                    <>
                                        <input
                                        className="contact-inputs"
                                        id={ContactSpanish[0].name}
                                        name={ContactSpanish[0].name}
                                        placeholder={ContactSpanish[0].text}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                        <div className='formError'>{formik.errors.name}</div>
                                        ) : null}
                                        <input
                                        className="contact-inputs"
                                        id={ContactSpanish[1].name}
                                        name={ContactSpanish[1].name}
                                        placeholder={ContactSpanish[1].text}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                        <div className='formError'>{formik.errors.email}</div>
                                        ) : null}
                                        <textarea
                                        className="contact-inputs"
                                        id={ContactSpanish[2].name}
                                        name={ContactSpanish[2].name}
                                        placeholder={ContactSpanish[2].text}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.text}
                                        />
                                    </>
                                    :
                                    <>
                                        <input
                                        className="contact-inputs"
                                        id={ContactEnglish[0].name}
                                        name={ContactEnglish[0].name}
                                        placeholder={ContactEnglish[0].text}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                        <div className='formError'>{formik.errors.name}</div>
                                        ) : null}
                                        <input
                                        className="contact-inputs"
                                        id={ContactEnglish[1].name}
                                        name={ContactEnglish[1].name}
                                        placeholder={ContactEnglish[1].text}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                        <div className='formError'>{formik.errors.email}</div>
                                        ) : null}
                                        <textarea
                                        className="contact-inputs"
                                        id={ContactEnglish[2].name}
                                        name={ContactEnglish[2].name}
                                        placeholder={ContactEnglish[2].text}
                                        onChange={formik.handleChange}
                                        value={formik.values.text}
                                        />
                                    </>
                                    }
                                </div>
                                <div className='button btn-form'>
                                    {loading ?
                                    <button type='submit' disabled>
                                        {language === LanguageTypes.SPANISH ? 'Enviar' : 'Send'}
                                    </button>
                                    :
                                    <button type='submit' >
                                        {language === LanguageTypes.SPANISH ? 'Enviar' : 'Send'}
                                    </button>
                                    }
                                </div>
                            </form>
                            :
                            <div className='form-submit'>
                                <div className='form-message'>
                                    {language === LanguageTypes.SPANISH ?
                                    <p> Se envio correctamente el form  </p>
                                    :
                                    <p>The form was sent correctly</p>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact; 