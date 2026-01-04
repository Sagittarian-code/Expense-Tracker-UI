import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './pages/View';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Error from './pages/Error';
import { ToastContainer, toast } from 'react-toastify';
// import './App.css'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Edit/:expensesid' element={<Edit />} />

          {/* not found page */}
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
