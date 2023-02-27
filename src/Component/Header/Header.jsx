import React from 'react'
import './Header.css'
import iconBrand from '../../img/Group.svg'
import iconRight1 from '../../img/Group 32.svg'
import iconRight2 from '../../img/Vector 26 (Stroke).svg'
import iconRight3 from '../../img/Group 31.svg'
const Header = () => {
  return (
    <div className='Header'>
      <img src={iconBrand} alt="" className='img_icon'/>
        <ul className='section'>
          <li className='section_women'>ЖЕНЩИНЫ</li>
            <li className='section_men'>МУЖЧИНЫ</li>
          <li className='section_search'>ПОИСК</li>
        </ul>
      <p className='header_line'></p>
  <ul className='menu_language'>
    <li className='language_ru'>RU</li>
      <li>UA</li>
        <li>EN</li>
    </ul>
      <p className='icon_right'>
        <img src={iconRight1} alt="" />
          <img src={iconRight2} alt=""/>
            <img src={iconRight3} alt=""/>
          </p>
        </div>
       )
  }

export default Header