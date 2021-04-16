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
        <div class="column is-two-fifths " style={{display:"flex-box", background:"#2a4574 "}} >
            <div class="is-justify-content is-centered">
            <h3 style={{fontSize:"200%", color:"white", fontWeight:"bolder"}}>Contact Form</h3>
            <form className="contactForm" id="contactForm" onSubmit={sendEmail}>
                <input  type="hidden" name="contact_number"/>
                <input type="text" class="input" placeholder="Name" required="true" name="name"  />
                <br/>
                <input type="text" class="input" placeholder="Company" name="company"   />
                <br/>
                <input type="email" class="input" placeholder="Contact Email" name="email"   />
                <Icon align="left" class="fas fa-email"/>
                <br/>
                <p style={{opacity:"0%"}}>fsalknfnflkasnflaksnfla</p>
                <textarea class="textarea" name="message"  placeholder="Start typing..." ></textarea>
                <br/>
                <Button color="success" value="Send">Send</Button>
            </form>

            </div>
        </div>
    )
}