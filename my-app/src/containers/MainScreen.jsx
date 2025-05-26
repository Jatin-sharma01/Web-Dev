import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Aboutus from '../components/Aboutus'
import Browse from '../components/Browse'
import Footer from '../components/Footer'

function MainScreen() {
  return (
    <div>
        <Header/>
        <Home/>
        <Aboutus/>
        <Browse/>
        <Footer/>
        
    </div>
  )
}

export default MainScreen