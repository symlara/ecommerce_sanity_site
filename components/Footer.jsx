import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Aaliyah's Store. 
        All right reserved
      </p>
      <p className='icons'>
        <a href="https://www.instagram.com/aaliyahsymlar/?hl=en" target="_blank"><AiFillInstagram /></a>
        <a href="https://twitter.com/asymlar" target="_blank"><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer