"use client";
import React, { useState, useEffect } from "react";
import logo from "../../public/images/header-logo-one.svg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown open/close

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={`hdrtopsst ${isScrolled ? "onScroll" : ""}`}>
      <section className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-12"></div>
            <div className="col-sm-10 col-xs-12 contact-right">
              <ul>
                <li>
                  <Link href="tel:708 723 3361">
                    (+91) 708 723 3361 (Sales)
                  </Link>
                </li>
                <li>
                  <Link href="tel:(+91) 959 201 6444">
                    (+91) 959 201 6444 (Jobs)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navigation-main">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarScroll"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse menu ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarScroll"
          >
            <ul className="navbar-nav me-0 ms-auto navbar-nav-scroll d-flex align-items-center">
              <li className="px-3 py-2 mx-2">
                <Link href="/about">About</Link>
              </li>
              <li
                className="px-3 py-2 mx-2 "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/" className="">
                  Services
                </Link>
                {isDropdownOpen && (
                  <>
                    <ul className="">
                      <div className="row">
                        <div className="col">
                          <li>
                            <Link href="/services/digital-marketing">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/web-development">
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/marketing">Marketing</Link>
                          </li>
                        </div>
                        <div className="col">
                          <li>
                            <Link href="/services/digital-marketing">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/development">
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/marketing">Marketing</Link>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </>
                )}
              </li>
              <li className="px-3 py-2 mx-2">
                <Link href="/">Our Portfolio</Link>
              </li>
              <li className="px-3 py-2 mx-2">
                <Link href="/blogs">Resources</Link>
              </li>
              <li className="px-3 py-2 mx-2">
                <Link href="/">Join Us</Link>
              </li>
              <li className="contactMain px-4">
                <Link href="/contact-us">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
