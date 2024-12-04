import React from "react";

const Footer = () => {
  return (
    <footer className="w-[80vw] bg-[#ffffff] text-[#8c8c8c] py-4 fixed bottom-0 pl-10 pr-10">
      <div className="container flex justify-between text-sm">
        <div className="text-start">
          Copyright © 2019, <span className="text-[#0275d8]">CRM</span> All rights reserved.
        </div>
        <div className="item-center">
          Designed & Developed <span className="text-[#0275d8]">By iAssure International Technologies Pvt. Ltd.</span>
          Version 1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;
