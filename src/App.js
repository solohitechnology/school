import React, { useState, useEffect } from 'react';
import './App.css';
import jwt_decode from 'jwt-decode';
import Home from './components/home/Home';
import Faq from './components/common/faq/Faq';
import Team from './components/team/Team';
import About from './components/about/About';
import Accessibility from './components/common/Accessibility/Accessibility'
import Dashboard from './components/dashboard';
import Book from './components/allcourses/Book';
import CookieConsent from 'react-cookie-consent';
import OtherService from './components/common/ortherService/OtherService';
import AffiliateSignup from './components/common/Affilate/AffiliateSignup'
import InstructorSupport from './components/common/instructorSupport/InstructorSupport'
import TranslationButton from './TranslationButton';
import BlogCard from './components/blog/BlogCard';
import Privacy from './components/policy/Privacy';
import PostBlog from './components/blog/PostBlog';
import Contact from './components/contact/Contact';
import LoginPage from './components/login/LoginPage';
import AboutContainer from './components/about/AboutContainer';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import  ApplyInstructor from './components/common/becomeAnInstructor/ApplyInstructor'
import Myemail from './components/certificate/Myemail';
import Philosophy from './components/allcourses/Philosophy';
import PostSeminar from './components/seminar/PostSeminar';
import RegisterPage from './components/register/RegisterPage';
import UploadVideo from './components/allcourses/UploadVideo';
import Certificate from './components/certificate/Certificate';
import Pricing from "./components/common/pricing/Pricing"
import VideoGallery from './components/allcourses/VideoGallery';
import Testimonial from './components/home/testimonal/Testimonal';
import OnlineCourses from './components/allcourses/OnlineCourses';
import UploadFiles from './components/common/getallbook/UploadFiles';
import StudentSupport from './components/common/studentSupport/StudentSupport';
import BrowseCourses from './components/common/browse-course/BrowseCourses';
import RegistrationPage from './components/seminar/RegistrationPage';
import RefundPolicy from './components/common/RefundPolicy/RefundPolicy';
import Course from './components/common/course/Course';
import CheckoutPage from './components/common/checkout/CheckoutPage';
import TestimonialForm from './components/testimonial/TestimonialForm';
import BecomeInstructor from "./components/common/becomeAnInstructor/BecomeInstructor"
import AffiliateProgram from './components/common/Affilate/AffiliateProgram'
import Library from './components/common/books/Library';
import { IoIosArrowUp } from 'react-icons/io';
import GetCertification from './components/certificate/GetCetification';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

const handleLogin = (setIsAuthenticated) => {
  setIsAuthenticated(true);
};

function PrivateRoute({ element: Element, ...rest }) {
  const routeLocation = useLocation();
  const isAuthenticated = !!localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: routeLocation.pathname }} />;
  }

  return <Element {...rest} />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // console.log(accessToken)

    if (accessToken) {
      const decodedToken = jwt_decode(accessToken);
      // console.log(a)
      const isAdmin = decodedToken.isAdmin;
      setIsAuthenticated(true);
      setIsAdmin(isAdmin);
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      if (expirationTime < currentTime) {
        setIsAuthenticated(false);
        localStorage.removeItem('accessToken');
      }
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      
        <TranslationButton  />
        {showScrollToTop && (
        <>
          <div className='scrollTop_container'>
            <div className="scroll-to-top" onClick={scrollToTop}>
               <IoIosArrowUp />
            </div>
          </div>
        </>
      )}
      <Routes>

        <Route path="/" element={<Home />} />
        {isAdmin ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route to="/unauthorized" replace state={{ from: '/login' }} />
        )}


          
          <Route path='/library' element={<Library /> } />
          <Route path='/browse-courses' element={< BrowseCourses/>} />
         <Route path='/about' element={<AboutContainer/>} />
         <Route path='/applyinstructor' element={<ApplyInstructor/>} />
         <Route path='/affiliatesignup' element={< AffiliateSignup/>} />
         <Route path='/Accessibility' element={<Accessibility/>} />
         <Route path='/video-courses' element={< VideoGallery/>} />
         <Route path="/service" element={<OtherService />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/RefundPolicy" element={<RefundPolicy />} />
         <Route path="/Pricing" element={<Pricing />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/blog" element={<BlogCard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/studentssupport' element={<StudentSupport />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/videogallery" element={<VideoGallery />} />
        <Route path="/seminar/:id" element={<RegistrationPage />} />
        <Route path="/testimonialform" element={<TestimonialForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cert" element={<Myemail />} />
        <Route path="/allbooks"  element={<Book />} />
        <Route path='/instructorSupport' element={< InstructorSupport/>} />
        <Route path="/courses" element={<OnlineCourses />} />
        <Route path="/user/checkout" element={<CheckoutPage />} />
        <Route path="/getcertification" element={<GetCertification />} />
        <Route path="/AffiliateProgram" element={<AffiliateProgram />} />
        <Route path="/BecomeInstructor" element={ <BecomeInstructor />} />
        

   
   
          <Route path="/postseminar" element={<PostSeminar />} />
     
      
          {/* <Route path="/uploadvideo" element={<UploadVideo />} /> */}
   
  
          <Route path="/uploadbook" element={<UploadFiles />} />
          <Route path="/philosohy" element={<Philosophy />} />
 
   

          <Route pah="/postblog" element={<PostBlog />} />
    
         <Route path="/uploadvideo" element={<Course/>} />

      </Routes>

      {/* <p onClick={handleLogout}>Logout</p> */}
      {/* {isAdmin && (
        <a href="/dashboard">
          <button style={{ color: 'gold' }}>post</button>
        </a>
      )} */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookieConsent"
        style={{ background: '#333', color: '#fff' }}
        buttonStyle={{ background: '#f5f5f5', color: '#333', fontSize: '13px' }}
        expires={150}
      >
        We use cookies on our website to personalize your experience and improve our efforts. By continuing, you agree to the terms of our Privacy Policy. <a style={{ color: 'white' }} href='/privacy'>learn more</a>
      </CookieConsent>
      <Footer />
    </Router>
  );
}

export default App;
