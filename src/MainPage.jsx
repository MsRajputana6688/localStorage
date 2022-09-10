import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Form/Form'
import Navbar from './Navbar/Navbar'
const MainPage = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/'  />
                    <Route path='/Form/Form' element={<Form />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainPage