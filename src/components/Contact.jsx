import style from "../styles/Contact.module.css"
import leaf from "../images/leaf.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
import whatsapp from "../images/whatsapp.png"
import { useState } from "react"
import Swal from "sweetalert2"
import { useTranslation } from 'react-i18next'

export default function Contact() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    })

    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState({})


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (errors.name === "Name is required" || errors.name === "Name must be at least 4 characters long" || errors.email === "Email is required" || errors.message === "Message is required" || errors.email === "Enter a message with more than 50 characters") {
            setErrorMessage(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please complete all required fields',
            })

        } else if (input.name === "" && input.email === "" && input.number === "" && input.message === "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please complete all required fields',
            })
        }
        else {
            /*  emailjs.sendForm('service_x9qa78n', 'template_i858qck', e.target, 'qqNBv-ncC62HiS998' )
                 .then(response => console.log(response))
                 .catch(error => console.log(error))
  */
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Message sent successfully',
            })
            setInput({
                name: "",
                email: "",
                number: "",
                message: ""
            })

        }
    }

    function validate(input) {
        let errors = []
        if (!input.name) {
            errors.name = "Name is required"
        } else if (input.name.length < 4) {
            errors.name = "Name must be at least 4 characters long"
        }


        if (!input.email) {
            errors.email = "Email is required"
        } else if (!input.email.includes("@")) {
            errors.email = "Enter a valid email address"
        }

        if (!input.number) {
            errors.number = "Phone number is required"
        } else if (input.number.length < 8) {
            errors.number = "Enter a valid phone number"
        }
        if (!input.message) {
            errors.message = "Message is required"
        } else if (input.message.length < 50) {
            errors.message = "Enter a message with more than 50 characters"
        }

        return errors
    }
    const { t } = useTranslation()


    return (
        <div>
            <div className={style.Banner}>
                <h1>{t("contact.title")}</h1>
            </div>
            <div className={style.Attributes}>
                <div className={style.Attribute}>
                    <img src={phone} />
                    <h4>{t("contact.highlight_1_title")}</h4>
                    <p>{t("contact.highlight_1_subtitle")}</p>
                </div>
                <div className={style.Attribute}>
                    <img src={email} />
                    <h4>{t("contact.highlight_2_title")}</h4>
                    <p>{t("contact.highlight_2_subtitle")}</p>
                </div>
                <div className={style.Attribute}>
                    <img src={whatsapp} />
                    <h4>{t("contact.highlight_3_title")}</h4>
                    <p>{t("contact.highlight_3_subtitle")} </p>
                </div>
            </div>
            <div className={style.Contact}>
                <div className={style.TitleForm}>
                    <h2>{t("contact.title_form")}</h2>
                    <p>{t("contact.subtitle_form")}</p>
                </div>
                <form onSubmit={e => handleSubmit(e)} className={style.ContactContainer}>
                    <div className={style.BlockForm}>
                        <div className={style.Input}>
                            <span>{t("contact.name")}</span>
                            <input type="text" id="name" name="name" value={input.name} placeholder="John Smith..." onChange={e => handleChange(e)} />
                            {errorMessage === true && (
                                <p className={style.Errors}>{errors.name}</p>
                            )
                            }
                        </div>
                        <div className={style.Input}>
                            <span>{t("contact.email")}</span>
                            <input type="email" id="email" name="email" value={input.email} placeholder="john.smith@example.com..." onChange={(e) => handleChange(e)} />
                            {errorMessage === true && errors.email && (
                                <p className={style.Errors}>{errors.email}</p>
                            )}
                        </div>
                        <div className={style.Input}>
                            <span>{t("contact.phone")}</span>
                            <input type="text" id="number" name="number" value={input.number} placeholder="+1 234 567-8900..." onChange={(e) => handleChange(e)} />
                            {errorMessage === true && errors.number && (
                                <p className={style.Errors}>{errors.number}</p>
                            )}
                        </div>
                    </div>
                    <div className={style.BlockForm}>

                        <div className={style.Input}>
                            <span className={style.SpanSecondColumn}>{t("contact.message")}</span>
                            <textarea type="text" id="message" name="message" value={input.message} placeholder={t("contact.message_example")} onChange={(e) => handleChange(e)} className={style.MessageInput} />
                            {errorMessage === true && errors.message && (
                                <p className={style.ErrorsMessage}>{errors.message}</p>
                            )}
                        </div>
                        <button type="submit" className={style.SubmitButton}>{t("contact.btn")}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}