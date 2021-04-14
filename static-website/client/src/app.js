import React, {useState} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import About from "./components/About"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function  App(props){
  
    return(
        <div className="bodys">
            <About />

            <Form/>

            <Footer/>
        </div>
    )
}