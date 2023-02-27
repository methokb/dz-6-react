import React from 'react'
import './Main.css'
import imgBackground from '../img/Group 150.svg'
import imgFashion from '../img/image 33.svg'
import imgInsQuare from '../img/image 34.svg'
import swapiRight from '../img/Polygon 1.svg'
import swapiLeft from '../img/Polygon 1 (2).svg'
import imgPopulary1 from '../img/image 40.svg'
import imgPopulary2 from '../img/image 38.svg'
import imgPopulary3 from '../img/image 39.svg'
import imgPopulary4 from '../img/image 37.svg'
import imgLine from '../img/Ellipse 6.svg'
import imgLine2 from '../img/Rectangle 7.svg'
import imgLine3 from '../img/image 25.svg'
const Main = () => {
  return (
      <div className='Main'>
  <div className='Main_part1'>
            <p className='line_ru'></p>
          <img src={imgBackground} alt="" className='img_background' />
      <div className='text_center_background'>
          <p className='text_brand'>бренд</p>
            <p className='text_A_V'>american vintage</p>
        <h1 className='text_subtitle'>Смотреть коллекцию</h1>
    </div>
          <p className='text_numbers'>
        <h2 className='text_numbers1'>01</h2>
          <h2 className='text_numbers2'>02 03 04</h2>
        </p>
    <div className='white_block'></div>
        </div>
            <div className='Main_part2'>
      <div className='left_part'>
            <img src={imgFashion} alt="" className='img_part2' />
        <h1 className='img_title'>new arrival</h1>
    <h2 className='img_subtitle'>
  Lorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipLorem ipsumLorem ip
  </h2>
      <h3 className='img_subtitle2'>Смотреть коллекцию</h3>
  </div>
      <div className='right_part'>
          <p className='text_right'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
      <img src={imgInsQuare} alt="" className='img_in_quare' />
    </div>
        </div>
      <div className='Main_part3'>
        <h1 className='text_center_populary'>ПОПУЛЯРНОЕ</h1>
    <div className='imgPopulary'>
      <p className='populary'>
  <img src={imgPopulary1} alt="" />
      <h2 className='replay'>REPLAY</h2>
  <h3 className='Classic'> Classic shoes</h3>
          <p className='p'>
  <h4 className='price'>6100 UAH</h4>
      <h5 className='sale'>3800 UAH</h5>
    </p>
  </p>
      <p className='populary'>
            <img src={imgPopulary2} alt="" />
      <h2 className='replay'>REPLAY</h2>
          <h3 className='Classic'> Classic shoes</h3>
        <p className='p'>
    <h4 className='price'>6100 UAH</h4>
          <h5 className='sale'>3800 UAH</h5>
        </p>
          </p>
        <p className='populary'>
            <img src={imgPopulary3} alt="" />
        <h2 className='replay '>REPLAY</h2>
    <h3 className='Classic'> Classic shoes</h3>
  <p className='p'>
      <h4 className='price'>6100 UAH</h4>
    <h5 className='sale'>3800 UAH</h5>
  </p>
        </p>
      <p className='populary'>
          <img src={imgPopulary4} alt="" />
            <h2 className='replay'>REPLAY</h2>
        <h3 className='Classic'> Classic shoes</h3>
            <p className='p'>
    <h4 className='price'>6100 UAH</h4>
        <h5 className='sale'>3800 UAH</h5>
    </p>
  </p>
      </div>
          <div className='swapi'>
      <p className='swapiRight'>
      <img src={swapiRight} alt="" className='strelkaRight'/>
    </p>
        <p className='swapiLeft'>
      <img src={swapiLeft} alt=""className='strelkaLeft' />
        </p>
    </div>
<div className='line'>
    <p className='line1'></p>
  <h3 className='line_text'>ALLEGRIA</h3>
        <p className='line1'></p>
    </div>
        </div>
            <div className='Main_part4'>
          <div className='Fon_blue'>
      <img src={imgLine} alt=""  className='imgLine'/>
              <img src={imgLine2} alt="" className='imgLine2' />
          <img src={imgLine3} alt="" className='imgLine3' />
        <div className='text_blueFon'>
          <p className='o'>O</p>
            <h1 className='nas'>НАС</h1>
        <h2 className='lorem'>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem 
                ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem
              ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem 
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </h2>
            </div>
                <p className='line_blue'></p>
            </div>
          </div>
      </div>
  )
}

export default Main