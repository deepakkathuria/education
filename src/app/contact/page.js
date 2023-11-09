"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import EmailSection from "../components/EmailSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Page = () => {
    const [tag, setTag] = useState("Current");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <>
        <Navbar/>
        <EmailSection />
        <Footer/>
        </>
    );
};

export default Page;
