import React from "react";
import "./contactForm.css";
import emailjs from '@emailjs/browser';

export default function ContactForm(props) {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [isSubmitted, setIsSubmitted] = React.useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        setIsSubmitted(isSubmitted => !isSubmitted);

        emailjs.send('service_fiys2dr', 'template_iz54nkt', formData, 'kDJTFrwZ2QKQ2yuPZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className="contactForm" id="contact">
            <div className="modal-background" onClick={props.handleClick}></div>
            {isSubmitted ?
                <div className="thank-you">
                    <p className="thank-heading">MESSAGE RECEIVED!</p>
                </div> :
                < div className="contact-wrapper">
                    <div className="contact-text-wrapper">
                        <p className="heading">Contact Us</p>
                        <p className="content">
                            Interested in working with us?<br />
                            Get in touch with this form and we'll get back to you as soon as possible
                        </p>
                    </div>
                        
                    <form onSubmit={handleSubmit} className="form-wrapper">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                                
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <textarea 
                            name="message"
                            placeholder="Your Message"
                            rows={40}
                            value={formData.query}
                            onChange={handleChange}
                        />
                        <button className="btn">Submit</button>
                    </form>
                    
                    
                </div>
            }
        </div>     
    )
}