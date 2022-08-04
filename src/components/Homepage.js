import React from 'react'
import Fooditems from '../container/Fooditems'
// import Cards from '../container/Cards'
import Footer from '../container/Footer'
import Header from '../container/Header'

const Homepage = () => {
  return (
    <div>
        <Header/>
        {/* <Cards /> */}
        <Fooditems/>
        <Footer/>
    </div>
  )
}

export default Homepage