import React from 'react'

import { Brand,CTA,Navbar } from './components';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import './App.css'

export const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App

