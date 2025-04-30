import React from 'react'
import Section1 from '../../componets/section1/Section1'
import Navbar from '../../componets/navbar/Navbar'
import MobileNavbar from '../../componets/mobileNavbar/MobileNavbar'
import Section2 from '../../componets/section2/Section2'
import Section3 from '../../componets/section3/Section3'
import Section4 from '../../componets/section4/Section4'
import Section5 from '../../componets/section5/Section5'
import Section6 from '../../componets/section6/Section6'
import Footer from '../../componets/footer/Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
    <MobileNavbar/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
  <Section5/>
  <Section6/>
  <Footer/>
  

  
   </>
  )
}

export default Home