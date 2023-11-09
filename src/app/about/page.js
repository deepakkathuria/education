"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";




const Page = () => {
    const [tag, setTag] = useState("Current");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <>
        <Navbar/>
        <br></br>

        <br></br>
        <AboutSection/>
        </>
    );
};

export default Page;
