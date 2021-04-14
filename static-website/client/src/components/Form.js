import React, {useState} from "react"
import axios from "axios"
import emailjs from "emailjs-com"

export default function Form(props){
   
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_zx81yy5', 'template_rutcn6u', e.target, 'user_a1NgCKxgULaRjSSbvv1hW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <div>
            <p>Please provide feedback or if you would like me to reach out please provide a phone number with your availabe time and your contact email. Thank you!</p>
            <form classname="contactForm" id="contactForm" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number"/>
                <input type="text" placeholder="Name" required="true" name="name"/>
                <br/>
                <input type="text" placeholder="Company" name="company" />
                <br/>
                <input type="email" placeholder="Contact Email" name="email" />
                <br/>
                <p>Feedback Section</p>
                <textarea name="message"></textarea>
                <br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}