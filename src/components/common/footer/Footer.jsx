import "./footer.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaTiktok,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

// ...

const Footer = () => {
  const [blog, setBlog] = useState([]);
  const [subscrition, setSubscrition] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getBlog();
  }, []);

  const handleChage = (e) => {
    setEmail(e.target.value);
  };

  async function getBlog() {
    const response = await axios.get(
      "https://ogenduacademy.com/api/blog/blog-posts"
    );
    console.log(response.data);
    setBlog(response.data);
  }

  const subScription = async () => {
    const response = await axios.post(
      "https://ogenduacademy.com/api/sub/subscription",
      { email }
    );
    console.log(response);
    setSubscrition(response.data);
    setEmail("");
  };

  return (
    <>
      <section className="newletter">
        <div className="container">
          <div className="left row">
            <h1>
              Subscribe with your email to receive the latest news and updates.
            </h1>
            <p>{subscrition}</p>
          </div>

          <div className="right row">
            <input
              type="email"
              placeholder="Enter email address"
              onChange={handleChage}
              required
            />
            <Button
              variant="outlined"
              color="inherit"
              onClick={subScription}
              startIcon={<SendOutlinedIcon />}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Ogendu Academy and E-learning (OAE) are committed to providing
              exceptional educational content and resources
            </p>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li>
                <a href="/Pricing">Pricing</a>
              </li>

              <li>
                <a href="/courses">Courses</a>
              </li>

              <li>
                <a href="#">Instructors</a>
              </li>
              <li>
                <a href="/AffiliateProgram">Affiliate Program</a>
              </li>
              <li>
                <a href="/BecomeInstructor">Become an Instructor</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help & Support</h3>
            <ul className="footer-links">
              <li>
                <a href="/faq">FAQs</a>
              </li>

              <li>
                <a href="/blog">our blog</a>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/studentssupport">Student Support</a>
              </li>
              <li>
                <a href="/instructorSupport">Instructor Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow us</h3>
            <div className="social-icons">
              <a href="#" className="icon-link" style={{ color: "#1877f2" }}>
                <FaFacebook />
              </a>
              <a href="#" className="icon-link" style={{ color: "#ff0000" }}>
                <FaYoutube />
              </a>
              <a href="#" className="icon-link" style={{ color: "#bc2a8d" }}>
                <FaInstagram />
              </a>
              <a href="#" className="icon-link" style={{ color: "darkgreen" }}>
                <FaWhatsapp />
              </a>
              <a href="#" className="icon-link" style={{ color: "#000000" }}>
                <FaTiktok />
              </a>
              <a href="#" className="icon-link" style={{ color: "#0088cc" }}>
                <FaTelegramPlane />
              </a>
              <a href="#" className="icon-link" style={{ color: "#0077b5" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="ogendu5.png" alt="ogenduacademy logo" />
          </div>
          <ul className="footer-policy-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/service">Other Services</a>
            </li>
            <li>
              <a href="/RefundPolicy">Refund Policy</a>
            </li>
            <li>
              <a href="/Accessibility">Accessibility</a>
            </li>
          </ul>
        </div>
        <legend>&copy; 2023 Ogenduacademy.com All rights reserved. </legend>
      </footer>
    </>
  );
};

export default Footer;
