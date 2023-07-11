import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';


const Formtest = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a3ps4s9', 'template_j6dm47k', form.current, 'c1kp6Rhm7bbndiauF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };

  return (
    <form className='test--form' ref={form} onSubmit={sendEmail}>
        <input type="text"  placeholder='full name' name='user_name'/>
        <input type="email"  placeholder='email' name='user_email'/>
        <input type="text" placeholder=' subject' name='subject'/>
        <textarea cols="30" rows="10" name='message'></textarea>

        <button type='submit'> send message</button>
    </form>
  )
}

export default Formtest