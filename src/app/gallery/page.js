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
        <>
        <Navbar/>

        <ProjectsSection />
        <Footer/>
        </>
    );
};

export default Page;
