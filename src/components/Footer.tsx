import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background py-1 shadow-sm fixed bottom-0 right-0">
      <div className="">
        Copyright © 2019, <span className="text-[#0275d8]">CRM</span> All rights
        reserved.
      </div>
      <div className="">
        Designed & Developed{" "}
        <span className="text-[#0275d8]">
          By iAssure International Technologies Pvt. Ltd.
        </span>
        Version 1.0.0
      </div>
    </footer>
  );
};

export default Footer;
