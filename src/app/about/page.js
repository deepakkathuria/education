"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";



const Page = () => {
    const [tag, setTag] = useState("Current");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <div style={{background:"black",marginTop:"50px"}}>
        <Navbar/>
        <br></br>

        <br></br>
        <AboutSection/>
        <Footer/>
        </div>
    );
};

export default Page;
