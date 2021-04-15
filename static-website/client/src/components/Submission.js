import React, {useState} from "react"
import { Form } from "react-bulma-components"

import {Icon} from "react-bulma-components"
import {Button} from "react-bulma-components"

import axios from "axios"
import emailjs from "emailjs-com"

export default function Submission(props){
 
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_zx81yy5', 'template_rutcn6u', e.target, 'user_a1NgCKxgULaRjSSbvv1hW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          document.getElementById("contactForm").reset();
      }

    return(
        <div class="container has-text-centered " >
            <div class="hero is-dark">
            <p>Please provide feedback or if you would like me to reach out please provide a phone number with your availabe time and your contact email. Thank you!</p>
            <form className="contactForm" id="contactForm" onSubmit={sendEmail}>
                <input  type="hidden" name="contact_number"/>
                <input type="text" class="input" placeholder="Name" required="true" name="name"  />
                <br/>
                <input type="text" class="input" placeholder="Company" name="company"   />
                <br/>
                <input type="email" class="input" placeholder="Contact Email" name="email"   />
                <Icon align="left" class="fas fa-email"/>
                <br/>
                <p>Feedback Section</p>
                <textarea class="textarea" name="message"   ></textarea>
                <br/>
                <Button color="success" value="Send">Send</Button>
            </form>

            </div>
        </div>
    )
}