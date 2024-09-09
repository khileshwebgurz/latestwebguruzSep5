"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/images/header-logo-one.svg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(""); // To track active service
  const dropdownRef = useRef(null); // Reference for dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set active service based on the current pathname
    if (pathname && pathname.includes("/services")) {
      setActiveService(pathname);
    } else {
      setActiveService("");
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the dropdown is open and the clicked target is not inside the dropdown, close it
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
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
              <li className="px-3 py-2 mx-2" onClick={toggleDropdown}>
                <Link href="#" onClick={(e)=>e.preventDefault()}>Services</Link>
                {isDropdownOpen && (
                  <ul ref={dropdownRef} className="">
                    <div className="row">
                      <div className="col">
                        <li
                          onClick={closeDropdown}
                          className={
                            activeService === "/services/digital-marketing"
                              ? "active-service"
                              : ""
                          }
                        >
                          <Link href="/services/digital-marketing">
                            Digital Marketing
                          </Link>
                        </li>
                        <li
                          onClick={closeDropdown}
                          className={
                            activeService === "/services/web-development"
                              ? "active-service"
                              : ""
                          }
                        >
                          <Link href="/services/web-development">
                            Web Development
                          </Link>
                        </li>
                        <li
                          onClick={closeDropdown}
                          className={
                            activeService === "/services/hubspot-development"
                              ? "active-service"
                              : ""
                          }
                        >
                          <Link href="/services/hubspot-development">
                            Hubspot Development
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
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
