import React from 'react'
import NavBar from '.././components/clientComponents/NavBar'
import Footer from "../components/clientComponents/Footer";
import Home from './Home';

function ClientHome() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <Footer />

        </div>
    )
}

export default ClientHome
