import '../../css/contact/contactForm.css';
import { useEffect, useState } from 'react';

export default function ContactForm() {

    // For email input
    const [userEmail, setUserEmail] = useState(null);

    // For message input
    const [userMessage, setUserMessage] = useState(null);

    // On change the userEmail is updated
    const emailChange = (e) => {
        const email = e.currentTarget.value;
        setUserEmail(email);
    };

    // On change the userMessage is updated
    const messageChange = (e) => {
        const message = e.currentTarget.value;
        setUserMessage(message);
    };

    // checks message input
    // if null or empty it throws an error
    const checkMessage = () => {
        if(userMessage === null || userMessage === ''){
            const msg = document.querySelector('.error-msg');
            msg.classList.remove('unactive-msg');
            msg.classList.add('active-msg');
            msg.textContent = 'Message is required.'
        }else{
            const msg = document.querySelector('.error-msg');
            msg.classList.remove('active-msg');
            msg.classList.add('unactive-msg');
        }
    }

    // checks email
    const checkEmail = () => {
        const regex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.]+)\.([\w-]{2,6})$/;
        // Checks email for null or empty if not throw error
        if(userEmail === null || userEmail === ''){
            const msg = document.querySelector('.error-msg');
            msg.classList.remove('unactive-msg');
            msg.classList.add('active-msg');
            msg.textContent = 'Email is required'
        }

        // Checks to make sure it matches the regex
        else if(userEmail.match(regex)){
            const msg = document.querySelector('.error-msg');
            msg.classList.remove('active-msg');
            msg.classList.add('unactive-msg');

        // throw an error message 
        }else{
            const msg = document.querySelector('.error-msg');
            msg.classList.remove('unactive-msg');
            msg.classList.add('active-msg');
            msg.textContent = 'Your email is invalid.'
        };
    };

    return(
        <div  className="contact-form">
            <form id="contact-input">
                <div  className="mb-3">
                    <label htmlFor="name"  className="form-label">Name</label>
                    <input type="text"  className="form-control" name='name'/>
                </div>
                <div  className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input type="email" onBlur={checkEmail} onChange={emailChange} className="form-control" name="email" placeholder="name@example.com"/>
                </div>
                <div  className="mb-3">
                    <label htmlFor="message"  className="form-label">Message</label>
                    <textarea className="form-control" onBlur={checkMessage} onChange={messageChange} name="message" rows="5"></textarea>
                </div> 
                <div className="error-msg unactive-msg">
                    <p className="msg">
                        
                    </p>
                </div>
                <div className="btn-container">
                    <button type='submit' className="btn contact-btn">Submit</button>
                </div> 
            </form>
        </div>
    )
}