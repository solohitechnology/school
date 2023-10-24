import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isMobileMenuOpen }) => {
  return (
    <ul className={`mobile-menu ${isMobileMenuOpen ? 'visible' : ''}`}>
      {/* Add your academy-specific navigation links here */}
      <li><a href="/courses">Courses</a></li>
      <li><a href="/support">Support</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/">Journals</a></li>
      <li><a href="/allbook">Library</a></li>
      <li><a href="/team">Team</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="#">My Profile</a></li>
    </ul>
  );
};

export default MobileMenu;
