import React, {useState} from "react"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import resume from "../images/resume.png"



export default function Footer(props){
return(
    <div className="footer">
        <a href="https://github.com/pittmans1"><img src={github} width={50} height={50}/></a>
        <a href="https://linkedin.com/in/scott-pittman"><img src={linkedin} width={50} height={50}/></a>
        <a className="resume" href="https://docs.google.com/document/d/e/2PACX-1vRNU1YWOLR-bDHUc1eIE-J-hy0jVoI6g5bkwIqaSbthPbpsuTszfwbsoPFRDa_Bag/pub" download><img src={resume} width={50} height={50}/></a>
    </div>
)
}