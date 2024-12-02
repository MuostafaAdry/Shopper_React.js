import React from 'react'
import {   Container } from 'react-bootstrap'
import NewsLetterclass from './NewsLetter.module.css'
const NewsLetter = () => {
  return (
    <div >
      <Container className={NewsLetterclass.news_main}>
        <h1 className={NewsLetterclass.NewsTitle}>Get Exclusivr Offers From On Email</h1>
        <p className={NewsLetterclass.subscribe_title}>Subscribe To Our Website and Stay Updated</p>
       
        <div className={NewsLetterclass.input_btn}>
          <input className={NewsLetterclass._input} type="text" placeholder='Your Email Id ' />
          <button className={NewsLetterclass._btn}>Subscribe</button>
        </div>

      </Container>
    </div>
  )
}

export default NewsLetter
