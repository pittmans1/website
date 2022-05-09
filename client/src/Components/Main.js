import React from 'react'
import './header.css'
import Peace from '../assets/10 (1).png'

const Main = () => {
  return (
      <div>
        <div class='mainContain'>
            <div class="CollectionCards">
                <img src={Peace}/>
            </div>
        </div>
            <div>
                <h4 class='Titles'>Peace</h4>
            </div>
            <div>
                <h4>
                    If you would like to share your art with this page please import below!
                </h4>
            </div>
      </div>
  )
}

export default Main