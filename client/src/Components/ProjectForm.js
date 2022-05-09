import React from 'react'

const ProjectForm = () => {
  return (
    <div classNmae='formContainer'>
        <form>
            <input type="text" className="Ideas" placeholder="Please share your Ideas with me"></input>
            <input type='image' className="imageInput" placeholder="Share an image of the idea"/>
            <textarea className="textarea" placeholder="a small description maybe?"/>
        </form>
    </div>
  )
}

export default ProjectForm