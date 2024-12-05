import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#ffffff] text-[#8c8c8c] py-4 fixed bottom-0 left-0 right-0">
      <div className="flex justify-between items-center w-full px-10 text-sm">
        <div className="flex-1 text-center">
          Copyright © 2019, <span className="text-[#0275d8]">CRM</span> All rights reserved.
        </div>
        <div className="mr-20">
          Designed & Developed <span className="text-[#0275d8]">By iAssure International Technologies Pvt. Ltd.</span>
          Version 1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;
