"use client";
import React from "react";
import { useButtonContext } from "@/context/ButtonContext";

const Footer = () => {
  const { isClicked } = useButtonContext();
  return (
    <footer
      className={`flex justify-between items-center p-5 bg-background h-[8vh] fixed bottom-0 right-0 ${isClicked ? `left-[80px]` : `left-[250px]`} duration-300`}>
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
