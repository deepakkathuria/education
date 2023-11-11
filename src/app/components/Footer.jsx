import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[rgb(51,53,63)] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      {/* <Image
              src="/images/Logo123.svg"
              alt="logo"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={170}
              height={100}
            /> */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
