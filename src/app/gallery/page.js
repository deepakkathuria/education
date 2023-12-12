"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Page = () => {
    const [tag, setTag] = useState("Current");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <div style={{background:"black"}}>

        <Navbar/>

        <ProjectsSection />
        <Footer/>
        </div>
    );
};

export default Page;
