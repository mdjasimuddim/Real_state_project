import React from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import './App.css'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App