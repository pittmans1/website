import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const LoginPage = () => {
  return (
    <div class="loginContainer">
        <h2>Welcome Please choose a login method</h2>
       <div>
        <FontAwesomeIcon icon="fa-brands fa-discord" ><a href="/discord"></a></FontAwesomeIcon>
        <FontAwesomeIcon icon="fa-brands fa-google" ><a href='/google'></a></FontAwesomeIcon>
       </div>
    </div>
  )
}

export default LoginPage