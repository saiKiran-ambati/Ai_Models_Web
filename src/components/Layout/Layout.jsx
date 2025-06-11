import React from 'react'
import Routers from '../Routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout() {
    return (
        <Router>
            <Header/>
            <Routers/>
            <Footer/>
        </Router>
    )
}

export default Layout