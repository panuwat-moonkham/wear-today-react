import React from 'react'
import {Title, Container, Content } from './styles'
import BackgroundBlock from '../BackgroundBlock'
import image from '../../assets/img2.jpg'

function AboutContent() {
  return (
    <>
      <BackgroundBlock src={image} height="40" overlay="overlay">
        <Title>About</Title>
      </BackgroundBlock>{' '}
      <Container>
        <Content id="content">
          <h1>ABOUT WearToday</h1>
          <p>
            WearToday เป็นเว็บบล็อคสำหรับแลกเปลี่ยนสไตล์
            เทคนิคและความเหมาะสมในการแต่งตัว
            ที่ถูกสร้างมาโดนสองนักศึกษาสุดเท่เก้ากับฟิวส์ พวกเราชอบร้องเพลง
            ยายมอยเลี้ยงหมี และยายมีเลี้ยงหอย ส่วนนางลีขายหอย และนางมอยขายหมี
            ยานัดของหมอมีแก้ฝีแก้หิด แต่การแพทย์ของหมอชิดแก้หิดแก้ฝี
            เอาหูหมีมาใส่ในหูหมู หนูจะเอาหูหมูมาใส่หูหมี หูหมู หูหนี
            เอาหูหมีมาใส่หูหมู แต่ถ้าเธอเอาไปผัดเห็ดมันจะเป็นเห็ดหูหนู
            พลทหารถือปืน แบกปูน ไปโบกตึก ตกบึก หมู หมึก กุ้ง หุง อุ่น นึ่ง
            หมึกหกเลอะมุ้ง มุ้งเลอะหมดครึ่ง หมู หมึก กุ้ง หุง อุ่น หุง ต้ม ตุ๋น
            อุ่น นึ่ง กินมันติดเหงือก กินเผือกติดฟัน กินทั้งมันกินทั้งเผือก
            ติดทั้งเหงือกติดทั้งฟัน เช้าฟาดผัดฟัก เย็นฟาดฟักผัก
          </p>
        </Content>
      </Container>
    </>
  )
}

export default AboutContent
