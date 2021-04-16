import React, {useState} from "react"
import 'react-bulma-components/dist/react-bulma-components.min.css';

import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import resume from "../images/resume.png"



export default function Footer(props){
return(
    <div style={{background:"#2a4574 "}} class="column is-two-fifths">
        <div class='tabs is-boxed is-justify-content-left '>
        <a href="https://github.com/pittmans1"><img src={github} width={50} height={50}/></a>
        <a href="https://linkedin.com/in/scott-pittman"><img src={linkedin} width={50} height={50}/></a>
        </div>
    </div>
)
}