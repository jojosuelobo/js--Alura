import React from 'react'
import '../styles/components/informationcontainer.sass'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const infoCard = [
    {name: "Telefone", icon: <AiFillPhone/>, id: "phone-icon", content: "(27) 988486353"},
    {name: "E-mail", icon: <AiOutlineMail/>, id: "email-icon", content: "josuelobo2000@gmail.com"},
    {name: "Localização", icon: <AiFillEnvironment/>, id: "pin-icon", content: "Vila Velha / ES"}
 ]

export default function InformationContainer() {
  return (
    <section id='information'>

        {infoCard.map((info) => (
            <div className='info-card'>
                <div id={info.id} key={info.name}>
                    {info.icon}
                </div>
                <div>
                    <h3>{info.name}</h3>
                    <p>{info.content}</p>
                </div>
            </div>
        ))}
        
        {/* <div className="info-card">
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(27)988486353</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>josuelobo2000@gmail</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Vila Velha / ES</p>
            </div>
        </div> */}
    </section>
  )
}
