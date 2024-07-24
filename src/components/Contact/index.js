import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    //function to send emails after submittin the form 
    const sendEmail = (e) => {
        e.preventDefault()
        
        console.log(form.current)
        emailjs
          .sendForm('service_vroy8zr', 'template_kmq3qsa', form.current, 'Rd1gruoHdmgnm3PXO')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 className=''>Contact Me</h1>
                <h2>Contact me here or using my contact information on my resume.</h2>
            </div>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required /> 
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required /> 
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required /> 
                        </li>
                        <li>
                            <textarea name='message' placeholder='Message' required /> 
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND" /> 
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default Contact