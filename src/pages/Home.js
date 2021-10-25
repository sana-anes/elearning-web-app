import React from 'react'

import Cover from '../components/clientComponents/Cover'
import CountSection from '../components/clientComponents/CountSection'
import About from '../components/clientComponents/About'
import Courses2 from '../components/Courses2'


function Home() {
    return (
      <>
        <Cover />
        <About />
        <CountSection />
        <Courses2/>

      </>
    );
}

export default Home
