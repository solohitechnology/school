import "./ebook.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Catigories from "./categories_books/Categories";

const Ebook = () => {
  return (
    <>
      
        <div className="book_container">
          <div className="book_search">
            <div>
              <img src="/s.jpg" alt="" />
            </div>
            <div>
              <input
                type="text"
                placeholder=" Search by title, author, ISBN or subject  "
              />
              <span className="search-icon">
                <SearchOutlinedIcon className="icon-search" />
              </span>
            </div>
            <div>
                <li>
              <a href="#"> Search</a>
                </li>
            </div>
          </div>
          <div className="book_photo"></div>

          <h1> (O-A-E) LIBRARY</h1>
        <div className="secound_book_container">
          <div className="button_container">
            <li>
            <a href="#">Top Shelf</a>
            </li>

            <li>
            <a href="#">New Book</a>
            </li>
            <li>
            <a href="#">Most Subscribed</a>
            </li>
            <li>
            <a href="#" >Trending</a> 
            </li>
          </div>

          <div className="lower_book_container">
 
             <div className="image_book">
                <img src="/book.jpg" alt="" />
                <div className="container_details">
                    <div className="book_details">
                        <div className="details" >
                            <p>Pages :</p>
                            <span>150</span>
                        </div>
                        <div className="details" >
                            <p> Year :</p>
                            <span>2023</span>
                        </div>
                        <div className="details" >
                            <p>Size :</p>
                            <span>59Mb</span>
                        </div>
                    </div>
                    <div className="view_button">
                        <button>View</button>
                    </div>
                </div>
             </div>
             <div className="image_book">
             <img src="/book1.jpg" alt="" />
                <div className="container_details">
                    <div className="book_details">
                        <div className="details" >
                            <p>Pages :</p>
                            <span>150</span>
                        </div>
                        <div className="details" >
                            <p> Year :</p>
                            <span>2023</span>
                        </div>
                        <div className="details" >
                            <p>Size :</p>
                            <span>59Mb</span>
                        </div>
                    </div>
                    <div className="view_button">
                        <button>View</button>
                    </div>
                </div>
             </div>
             <div className="image_book">
             <img src="/david.jpg" alt="" />
                <div className="container_details">
                    <div className="book_details">
                        <div className="details" >
                            <p>Pages :</p>
                            <span>150</span>
                        </div>
                        <div className="details" >
                            <p> Year :</p>
                            <span>2023</span>
                        </div>
                        <div className="details" >
                            <p>Size :</p>
                            <span>59Mb</span>
                        </div>
                    </div>
                    <div className="view_button">
                        <button>View</button>
                    </div>
                </div>
             </div>
             <div className="image_book">
             <img src="/js.jpg" alt="" />
                <div className="container_details">
                    <div className="book_details">
                        <div className="details" >
                            <p>Pages :</p>
                            <span>150</span>
                        </div>
                        <div className="details" >
                            <p> Year :</p>
                            <span>2023</span>
                        </div>
                        <div className="details" >
                            <p>Size :</p>
                            <span>59Mb</span>
                        </div>
                    </div>
                    <div className="view_button">
                        <button>View</button>
                    </div>
                </div>
             </div>
          </div>
        </div>
        <Catigories />
        </div>







      
    </>
  );
};

export default Ebook;
