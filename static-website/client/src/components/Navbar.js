import React from "react"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Dapp from "../Donations/src/Dapp"
import {Link} from "react-router-dom"

export default function Navbar(){

    return(
        <div className="navbar">
            <Link to="/checkout" >Donations project</Link>
        </div>
    )
}