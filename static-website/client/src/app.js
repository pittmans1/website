import React, {useState} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css';

import About from "./components/About"
import Submission from "./components/Submission.js"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function  App(props){
  
    return(
        <div class="has-background-dark">
            <About />

            <Submission />

            <Footer/>
        </div>
    )
}