import React from "react"
import About from "./About"
import Submission from "./Submission"
import Footer from "./Footer"
import galaxy from "../images/galaxy.jpg"

export default function Home(){
    return (
        <div style={{backgroundImage:`url(${galaxy})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'right ',
        width:"100%",
        height:"100%",
        textAlign:'center',
        margin:'auto',
        padding:'0', 
         fontFamily:"Roboto, sans-serif"}}>
            <About/>
            <Submission/>
            <Footer/>
            <div class="MagicScroll" data-options="mode: carousel; height:275px; width: auto">
    <a><img src="../images/donation" /></a>
    <a><img src=""/></a>
    ...
    </div>
        </div>
    )
}