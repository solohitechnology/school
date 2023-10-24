import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import './book.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { accordionSummaryClasses } from '@mui/material';


const ProductList = () => {
  
  useEffect(()=> {
    AOS.init({duration: 2000})
  }, [])

  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookFound, setBookFound] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    fetchFiles();
  
  }, [searchQuery]);


  useEffect(() => {
    getallbook()
  },[])

  const getallbook = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/books/book1');
      setFiles(response.data.files);
      console.log(response.data.files.name);
      
        setIsLoading(false);
      
    } catch (e) {
      console.log(e);
    }
  };
  
  
  
  const fetchFiles = async () => {
    try {
      const response = await axios.get('/api/books/book1', {
        params: {
          search: searchQuery
        }
      });
      setFiles(response.data.files); // Set the files data array
      setBookFound(response.data.files.length > 0);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item._id === product._id
    );
  
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // Pass the amount in USD
      updatedCartItems.push({ ...product, quantity: 1, amount: product.price });
    }
  
    setCartItems(updatedCartItems);
  };
  

  

  const handleRemoveFromCart = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item._id !== product._id)
    );
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item._id === product._id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleToggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    navigate(`/user/checkout?amount=${totalPrice}`);
  };

  return (
    <>
      <Helmet>
      <title>Ogendu Academy Library</title>
        {/* Add other head elements like meta tags here */}
      </Helmet>
    <div style={{marginTop:"100px"}} className='books'>

      <div className="search-container">
        <h2>Our Academy Library</h2>
        <br />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by book name"
        />
      </div>
      
      
      <div className="container1">
      {isLoading ? ( // Check if loading is true
      <>
      <div className='search-container'>
      <h2>Loading please wait...</h2>

      </div>
      
      </>
        )
        : files.length === 0 && !isBookFound ? (
          <p className="file-not-found-message">Book not found.</p>
        ) : (
          files
            .filter((file) =>
              file.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((file) => (
              <>
              
           
              <div data-aos='fade-left' style={{ marginTop:'100px', borderRadius:'20px'}} className="items1" key={file._id}>
                <p style={{ fontSize: 'bolder' }} >{file.name}</p>
                {file.coverPhoto && (
                  <img
                   src={`/uploads/${file.coverPhoto}`}
                    alt={file.name}
                    style={{padding:'20px', borderRadius:'20px'}}
                  />
                )}
                
                <div className="star-rating">
               
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span  className="star">&#9734;</span>
          
              </div>
                
                <p style={{textAlign:"justify"}} className='description' >{file.description}</p>
                <b style={{color:'navy'}} >${file.price}</b>
                <button
                  style={{ color: 'gold' }}
                  onClick={() => handleAddToCart(file)}
                >
                  Add to Cart
                </button>
              </div>
              </>
            ))
        )}
      </div>

      <div className="cart-icon" onClick={handleToggleCart}>
        <span className="cart-count">{cartItemCount}</span>
        <ShoppingCart />
      </div>

      {isCartVisible && (
        <div className="cart-container">
          <div className="cart-content">
            <h2>Cart</h2>
            <p>Total Price: ${getTotalPrice()}</p>
            <button
              onClick={handleCheckout}
              style={{ color: 'white' }}
              className="checkout-button"
            >
              Checkout
            </button>
            <button style={{ color: 'white' }} onClick={handleClearCart}>
              Clear Cart
            </button>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div className='mobilecart' key={item._id}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    {item.coverPhoto && (
                      <img
                      src={`https://ogenduacademy.com/uploads/${item.coverPhoto}`}
                        alt={item.name}
                      />
                    )}

                    <div>

                      <button
                        style={{ color: 'white' }}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Remove Item from Cart
                      </button>
                      <button
                        style={{ color: 'white' }}
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        style={{ color: 'white' }}
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ProductList;
