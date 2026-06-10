import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import xIcon from "../assets/twitter.png";
import footerlogoImg from "../assets/KeenKeeper-f-logo.svg";
import { Link } from "react-router";

import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#244D3F] text-white/90 ">
      <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-16 flex flex-col items-center">
       
        <Link to="/" className="inline-block select-none cursor-pointer mb-6">
          <img 
            src={footerlogoImg} 
            alt="KeenKeeper Logo" 
            className="h-12 w-auto object-contain brightness-0 invert" 
          />
        </Link>

        <p className="text-sm md:text-base text-center  text-white/70 mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center mb-12">
          <span className="text-base md:text-lg font-medium text-white/80 mb-4">
            Social Links
          </span>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-[45px] h-[45px] object-contain" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="w-[45px] h-[45px] object-contain" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all"
              aria-label="Twitter X"
            >
              <img src={xIcon} alt="Twitter X" className="w-[45px] h-[45px] object-contain" />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 my-6"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">
          <div>
            © 2026 KeenKeeper. All rights reserved.
          </div>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer



