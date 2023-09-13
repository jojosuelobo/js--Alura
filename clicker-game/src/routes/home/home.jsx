import React, { useState } from 'react'
import "./home.sass"

import { Link } from 'react-router-dom'

import { GiPunch } from 'react-icons/gi'

export default function home() {

  const [count, setCount] = useState(0)

  return (
    <section className='home-section'>
      <div className='main-content'>
        <div className='game-content'>
          <div className='pointer'>
            <h1>Você queimou</h1>
            <p>{count}</p>
            <h2>calorias</h2>
          </div>
          <div className='clicker'>
            <GiPunch 
              className='icon'
              onClick={() => setCount(count+1)}
            />
          </div>
        </div>
        <div className='upgrade-content'>
          <div className='upgrade detox'>

          </div>
          <div className='upgrade whey'>

          </div>
        </div>

      </div>

      <aside className='aside-content'>
        <div className='character'>
          <h1>character</h1>
        </div>
        <button className='btn customize'>Customize</button>
        <button className='btn achievements'> <Link to={'/achievements'}>Achievements</Link> </button>
      </aside>
    </section>
  )
}
