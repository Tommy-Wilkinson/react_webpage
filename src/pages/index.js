import React, {useState} from 'react'
import { HomeObjOne} from '../Components/InfoSection/Data'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle}/>
            <HeroSection />
            <InfoSection {...HomeObjOne}/>
        </>
    )
}

export default Home
