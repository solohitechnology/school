import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaThumbsUp,
  FaComment,
} from 'react-icons/fa';
import './blog.css';

const BlogCard = ({ limit, updateBlogPosts }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // console.log(blogPosts);

  useEffect(() => {
    fetchBlogPosts();
    checkCurrentUser();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('https://ogenduacademy.com/api/blog/blog-posts');
      setBlogPosts(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const checkCurrentUser = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const headers = {
        Authorization: accessToken,
      };

      const response = await axios.get('https://ogenduacadmy.com/api/auth/current-user', {
        headers,
      });

      setCurrentUser(response.data.user);
    } catch (error) {
      console.error('Error checking current user:', error);
    }
  };

  const handleCommentSubmit = async (postId, commentData) => {
    try {
      const response = await axios.post(
        `https://ogenduacademy.com/api/blog/blog-posts/${postId}/comments`,
        commentData
      );
      const { newComment } = response.data;

      console.log(newComment);
      fetchBlogPosts();
      setShowCommentForm(false);
      setCurrentPostId(null);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleThumbUp = async (postId) => {
    try {
      const response = await axios.post(
        `https://ogenduacademy.com/api/blog/blog-posts/${postId}/thumbs-up`
      );
      const { thumbsUpCount } = response.data;

      setBlogPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
              ...post,
              thumbsUp: post.liked ? post.thumbsUp - 1 : post.thumbsUp + 1,
              liked: !post.liked,
            }
            : post
        )
      );
    } catch (error) {
      console.error('Error updating thumbs-up:', error);
    }
  };

  const shareOnFacebook = (url) => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnInstagram = (url) => {
    window.open(
      `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnTwitter = (url, text) => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const shareOnWhatsApp = (text) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleToggleContent = (postId) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, expanded: !post.expanded } : post
      )
    );
  };

  const handleToggleSeeLess = (postId) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, expanded: false } : post
      )
    );
  };

  const handleCommentIconClick = (postId) => {
    setShowCommentForm(true);
    setCurrentPostId(postId);
  };

  const handleCommentFormCancel = () => {
    setShowCommentForm(false);
    setCurrentPostId(null);
  };

  const handleViewAllComments = (postId) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, showAllComments: true } : post
      )
    );
  };

  const handleFormSubmit = (e, postId) => {
    e.preventDefault();
    const commentData = {
      content: e.target.content.value,
      author: e.target.author.value,
    };

    handleCommentSubmit(postId, commentData);
  };

  const displayedPosts = blogPosts.slice(0, limit);

  return (
    <>
      <Helmet>
      <title>Ogendu Academy Blog</title>
        {/* Add other head elements like meta tags here */}
      </Helmet>
    <div style={{marginTop:"150px"}} className="parentBlog">
    
      {displayedPosts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <br />
          <strong>Date: {new Date(post.date).toLocaleDateString()}</strong>
          <h3>Author: {post.author}</h3>
          <br />
          {post.picture && (
            <img
              className="image_blog"
              src={`https://ogenduacademy.com/${post.picture.path}`}
              alt="Blog Post"
            />
          )}
          <div className="feedback-icons">
            {/* <span onClick={() => handleThumbUp(post._id)}>
              <FaThumbsUp
                style={{ color: 'gold', fontSize: '15px' }}
                className="main_icon"
              />
              <span className="feedback-count">
                {post.liked ? post.thumbsUp + 1 : post.thumbsUp}
              </span>
            </span> */}
            <span onClick={() => handleCommentIconClick(post._id)}>
              <FaComment style={{ color: 'gold', fontSize: '15px' }} className="main_icon" />
              <span className="feedback-count">{post.comments.length}</span>
            </span>
            <span onClick={() => shareOnFacebook(window.location.href)}>
              <FaFacebook style={{ color: 'royalblue' }} />
            </span>
            <span onClick={() => shareOnInstagram(window.location.href)}>
              <FaInstagram style={{ color: 'rgb(190, 78, 134)' }} />
            </span>
            <span
              onClick={() =>
                shareOnTwitter(window.location.href, post.title)
              }
            >
              <FaTwitter style={{ color: '#007bff' }} />
            </span>
            <span
              onClick={() =>
                shareOnWhatsApp(`${window.location.href}: ${post.title}`)
              }
            >
              <FaWhatsapp style={{ color: 'green' }} />
            </span>
          </div>
          <br />
          {post.expanded ? (
            <div className="content_container" style={{ position: 'relative' }}>
              <div className="para">
                {post.content.split('\n').map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      fontFamily: 'Courier New',
                      fontSize: '20px',
                      padding: '10px',
                      textAlign:"justify"
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <br />
              <h1>Comments:</h1>
              <br />
              {post.showAllComments ? (
                <div>
                  {post.comments.map((comment) => (
                    <div key={comment._id} className="comment">
                      <br />
                      <img
                        style={{
                          width: "50px",
                          height: '50px',
                          borderRadius: "50%"
                        }}
                        src="blank.jpg"
                        alt="deptresearch.com"
                      />
                      <p className="comment-author">{comment.author}</p>
                      <p className="comment-content">{comment.content}</p>
                      <label style={{ display: 'flex', justifyContent: 'space-between', }} htmlFor="">
                        <a href="#">Reply</a>
                        < FaThumbsUp />
                      </label>
                      <br />
                      <br />
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {post.comments.slice(0, 2).map((comment) => (
                    <div key={comment._id} className="comment">

                      <img
                        style={{
                          width: "50px",
                          height: '50px',
                          borderRadius: "50%"
                        }}
                        src="blank.jpg"
                        alt="deptresearch.com"
                      />
                      <p className="comment-author">{comment.author}</p>
                      <p className="comment-content">{comment.content}</p>
                      <label style={{ display: 'flex', justifyContent: 'space-between', }} htmlFor="">
                        <a href="#">Reply</a>
                        < FaThumbsUp />
                      </label>
                      <br />
                      <br />
                    </div>
                  ))}
                  {post.comments.length > 2 && (
                    <button
                      style={{ color: 'gold' }}
                      className="view-comments-btn"
                      onClick={() => handleViewAllComments(post._id)}
                    >
                      View all comments
                    </button>
                  )}
                </div>
              )}
              <form
                className="comment_form"
                onSubmit={(e) => handleFormSubmit(e, post._id)}
              >
                <div className="author_div">
                  <label htmlFor="author">Author:</label>
                  <br />
                  <input
                    style={{
                      width: "200px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    type="text"
                    id="author"
                    required
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="content">Comment:</label>
                  <br />
                  <textarea
                    style={{
                      marginLeft: "20px",
                      width: "250px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    id="content"
                    rows="4"
                    cols="50"
                    required
                  />
                </div>
                <br />
                <div>
                  <button style={{ color: 'gold' }} type="submit">
                    Submit Comment
                  </button>
                </div>
              </form>
              <br />
              <button
                style={{ color: 'gold' }}
                onClick={() => handleToggleSeeLess(post._id)}
              >
                See Less
              </button>
            </div>
          ) : (
            <button
              style={{ color: 'black', background:"skyblue" }}
              onClick={() => handleToggleContent(post._id)}
            >
              See More
            </button>
          )}
         
        </div>
      ))}
      {showCommentForm && (
        <div>
          <form
            className="comment_form"
            onSubmit={(e) => handleFormSubmit(e, currentPostId)}
          >
            <div className="author_div">
              <label htmlFor="author">Author:</label>
              <br />
              <input
                style={{
                  width: "200px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
                type="text"
                id="author"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="content">Comment:</label>
              <br />
              <textarea
                style={{
                  marginLeft: "20px",
                  width: "250px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
                id="content"
                rows="4"
                cols="50"
                required
              />
            </div>
            <br />
            <div>
              <button style={{ color: 'gold' }} type="submit">
                Submit Comment
              </button>
              <button
                style={{ color: 'gold' }}
                onClick={handleCommentFormCancel}
              >
                Cancel
              </button>
            </div>
          </form>
          <br />
          <hr />
        </div>
      )}
    </div>
    </>
  );
};

export default BlogCard;
