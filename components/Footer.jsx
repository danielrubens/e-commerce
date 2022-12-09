import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p className="flex flex-col text-xs items-center"> Developed by : </p>
      <div className='footer-container-icons'>
        <div style={{display: 'flex', 'flex-direction': 'column', alignContent: 'center', alignItems: 'center'}}>
          <p>- Daniel Rubens</p>
          <a href="https://github.com/danielrubens" target="blanck" name="gitm" id="gitm" >
            <AiFillGithub className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/daniel-rubens-556a7898/" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillLinkedin className='icons' />
          </a>
        </div>

        <div style={{display: 'flex', 'flex-direction': 'column', alignContent: 'center', alignItems: 'center'}}>
          <p>- Laura Lana</p>
          <a href="https://github.com/lauralana" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillGithub className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/laura-lana/" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillLinkedin className='icons' />
          </a>
        </div>

          <div style={{display: 'flex', 'flex-direction': 'column', alignContent: 'center', alignItems: 'center'}}>
          <p>- Marcos Souza </p>
          <a href="https://github.com/marcos2872" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillGithub className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/marcos-souza-a298a9209/" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillLinkedin className='icons' />
          </a>
          </div>

          <div style={{display: 'flex', 'flex-direction': 'column', alignContent: 'center', alignItems: 'center'}}>
          <p>- Raynara Santiago</p>
          <a href="https://github.com/raynarastg" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillGithub className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/raynarastg/" target="blanck" name="gitm" id="gitm" className="flex">
            <AiFillLinkedin className='icons' />
          </a>
          </div>
      </div>
    </div>
  )
}

export default Footer