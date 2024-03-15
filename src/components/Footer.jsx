"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5 ">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to work manager</h1>
          <p>
            We provide you an interface to manage your workload.
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <ul className="mt-5">
            <li className="">
            <Link className=""href={"#"}> <FaGithub /></Link>
            <strong>Github</strong>
            </li>
            
            <li>
             <Link href={"#"}> <FaLinkedin /></Link> 
              <strong>LinkedIn</strong>
            </li>
            <br />
          
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
