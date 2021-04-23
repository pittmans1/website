import React, {useState} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Dapp from "../src/Donations/src/Dapp" 
import "./styles.css"
import About from "./components/About"
import Submission from "./components/Submission.js"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import galaxy from "./images/galaxy.jpg"
import Home from "./components/Home"

export default function  App(props){
  
    return(
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
<Navbar/>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/checkout" component={Dapp}/>
           </Switch>
            
        </div>
    )
}