import React,{useState} from 'react'
import Dudeme_Logo from "../IMAGES/Dudeme_Logo.png";
import image1 from "../IMAGES/image1.png";
import cart from "../IMAGES/cart.png";  //category-1
import category1 from "../IMAGES/category1.png";
import product1 from "../IMAGES/product1.jpg";
import watch from "../IMAGES/watch.png";
import user from "../IMAGES/user.png";
import brands from "../IMAGES/brands.png";
import menu from "../IMAGES/menu.png";
import './Header.css';

const Header = () => {

    const [open,setOpen] = useState(true)

    // js for toggle menu
    const menuToggle=()=>{
        let menuItems=document.getElementById("MenuItems");
        open ? menuItems.style.maxHeight="200px"  : menuItems.style.maxHeight="0px";
        setOpen(!open)
    }

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src={Dudeme_Logo} alt="logo" width="125px" />
                        </div>
                        <nav>
                            <ul id="MenuItems">
                                <li><a href="">Home</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </nav>
                        <img src={cart} alt="cart" width="30px" height="30px" />
                        <img src={menu} alt="menu-icon" className="menu-icon" onClick={menuToggle} />
                    </div>


                    <div className="row">
                        <div className="col-2">
                            <h1>Give Your Workout<br></br> A New Style!</h1>
                            <p>Success isn't always about greatness. It"s about consistency.
                        Consistent<br></br> hard work gains success. Greatness will come.
                    </p>

                            <a href="" className="btn">Explore Now &#8594;</a>
                        </div>
                        <div className="col-2">
                            <img src={image1} alt="images1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------featured categories----------------- */}

            <div className="categories">
                <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src={category1} alt="" />
                    </div>
                    <div className="col-3">
                        <img src={category1} alt="" />
                    </div>
                    <div className="col-3">
                        <img src={category1} alt="" />
                    </div>
                </div>
                </div>
            </div>

            {/* -------------featured products----------------- */}

            
            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                </div>

                <h2 className="title">Latest Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                    <div className="col-4">
                        <img src={product1} alt="" />
                        <h4>Red Printed t shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500/-</p>
                    </div>
                </div>

            </div>

            {/* ------------offer----------------- */}
            <div className="offer" >
                <div className="small-container" >
                    <div className="row" >
                        <div className="col-2" >
                            <img className="offer-img" src={watch} alt="" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on RedStore</p>
                            <h1>Smart Band 4</h1>
                            <small>Choose from new collection of Watches Online in India.
                                 Buy Wrist Watches for men, women & kids at best price from Myntra Online store.
                            </small>
                            <a href="" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>



            {/* ---------------testimonial---------------- */}
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                            <p>
                            1,399 Free images of Avatar. Related Images: 
                            person woman female people face user man girl cartoon avatar · Social Media, 
                            Connections, Networking. 866 416.
                            </p>
                            <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            </div>
                            <img src={user} alt="" />
                            <h3>MAARI Boys</h3>
                        </div>
                        <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                            <p>
                            1,399 Free images of Avatar. Related Images: 
                            person woman female people face user man girl cartoon avatar · Social Media, 
                            Connections, Networking. 866 416.
                            </p>
                            <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            </div>
                            <img src={user} alt="" />
                            <h3>MAARI Boys</h3>
                        </div>
                        <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                            <p>
                            1,399 Free images of Avatar. Related Images: 
                            person woman female people face user man girl cartoon avatar · Social Media, 
                            Connections, Networking. 866 416.
                            </p>
                            <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            </div>
                            <img src={user} alt="" />
                            <h3>MAARI Boys</h3>
                        </div>
                    </div>
                </div>
            </div>




            {/* ----------------brands----------------------- */}
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={brands} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={brands} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={brands} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={brands} alt="" />
                        </div>
                        <div className="col-5">
                            <img src={brands} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            {/* -----------------footer--------------------------------- */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download our app</h3>
                            <p>download app for android and ios mobile phones</p>
                        </div>
                        <div className="footer-col-2">
                            <img src={Dudeme_Logo} alt="" />
                            <p>download app for android and ios mobes download app for 
                                android and ios mobile phones</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affilitate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <p className="copyright">Copyright 2021 - Maari bOYZ</p>
                </div>
            </div>

        </div>
    )
}

export default Header
