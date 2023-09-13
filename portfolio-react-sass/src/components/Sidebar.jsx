import React from 'react'
import '../styles/components/sidebar.sass'

import avatar from '../img/profileLinkedin.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
  return (
    <aside id='sidebar'>
    <img src={avatar} alt='Josué Lobo' />
    <p className='title' >Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer />
    <a  href='' className='btn' >Dowload Curriculo</a>
  </aside>
  )
}

export default Sidebar