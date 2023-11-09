"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";


const Page = () => {
    const [tag, setTag] = useState("Current");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <>
        <Navbar/>
        <br></br>

        <br></br>
        <Courses/>
        <Footer/>
        </>
    );
};

export default Page;
