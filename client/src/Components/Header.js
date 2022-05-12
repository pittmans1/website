import React from 'react'
import './header.css'
import Logo from "../assets/SP digital-logos_white.png"
import searchIcon from "../assets/search.png"
import Swtich from "../assets/theme-switch.png"


const Header = () => {
  return (
    <div className="header">
    <div className="logoContainer">
      <img src={Logo} alt='' className='logo'/>
    </div>

    <div className="seachBar">
        <div className='searchIconContainer'>
            <img src={searchIcon}/>
        </div>
        <input  className='searchInput' placeholder='Search projects'/>
    </div>

    <div className='headerItems'>
        <p><a style={{'textDecoration':'none', 'color':'#a1a5b0'}} href='/create'>Create</a></p>
        <p><a style={{'textDecoration':'none', 'color':'#a1a5b0'}} href='/bio'>Bio </a></p>
        <p><a style={{'textDecoration':'none', 'color':'#a1a5b0'}} href='/project'>Project Ideas</a></p>
        <p><a style={{'textDecoration':'none', 'color':'#a1a5b0'}} href='/projects'>Completed Projects</a></p>
    </div>
    <div className='headerActions'>
        <div className='themeSwitchContainer'>
            <img src={Swtich}/>
        </div>
    </div>
    <div className='LoginContainer'>
        <a style={{'textDecoration':'none', 'color':'#a1a5b0'}} href='/login'>Log In </a>
    </div>
</div>
  )
}

export default Header