import React from 'react'
import './App.css';
// import Division from './components/Division';
// import First from './components/First';
// import Second from './components/Second';
// import Form from './components/Form';
// import Bootstrap from './components/Bootstrap';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Menu from './components/Menu';
// import About from './components/About';
// import Prop from './components/Prop';
import PrintData from './components/PrintData';

function App() {
  return (
    <>
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Form /> */}
      {/* <Division /> */}
      {/* <Bootstrap /> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Menu />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </Router> */}
      {/* <div className='title'>
          <h1 className='text-center'>All Netflix Series Download From Here</h1>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Prop />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Prop />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Prop />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Prop />
              </div>
          </div>
      </div> */}
      <PrintData />
    </>
  )
}


export default App
