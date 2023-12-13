import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer borhder z-10 bordenr-t-[rgb(51,53,63)] bordehr-l-transparent bornder-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Left side: Instagram Icon */}
        <div className="flex items-center">
         
          <p className="text-slate-600 ml-4">All rights reserved.</p>
        </div>
        
        {/* Add any other elements you want on the right side here */}
        {/* <div>Right side content</div> */}
      </div>
    </footer>
  );
};

export default Footer;
