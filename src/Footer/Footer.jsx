import React from 'react'
import './Footer.css'
import imgOrange from '../img/Group 295.svg'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer_text'>
            <h1 className='footer_title'>Будьте в курсе событий</h1>
            <h2 className='input_name'>
                <h3 className='Katyamry'>Katyamry |  </h3> 
                <img src={imgOrange} alt="" className='imgOrange' /></h2>

            <h2 className='footer_input'></h2>
            <div className='display_subtitle'>
                <h2 className='onas'>О нас</h2>
                    <h2 > Распространенные вопросы</h2> 
                    <h2 className='brend'>Бренды</h2>
            </div>
            <h3 className='footer_line'></h3>
            <div className='text_buttom'>
                <h2>Все права защищены  © 2020 Allegria.com</h2>
                <h2>Дизайн и разработка:</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer