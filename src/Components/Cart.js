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


const Cart = () => {
    const [open,setOpen] = useState(true)

    // js for toggle menu
    const menuToggle=()=>{
        let menuItems=document.getElementById("MenuItems");
        open ? menuItems.style.maxHeight="200px"  : menuItems.style.maxHeight="0px";
        setOpen(!open)
    }


    return (
        <div>
            
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
                </div>




{/* --------------------cart item details------------------------ */}

            <div className="small-container cart-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={product1} alt="" />
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price:rs.50.00</small>
                                    <br></br>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>Rs50.00/-</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={product1} alt="" />
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price:rs.50.00</small>
                                    <br></br>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>Rs50.00/-</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={product1} alt="" />
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price:rs.50.00</small>
                                    <br></br>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>Rs50.00/-</td>
                    </tr><tr>
                        <td>
                            <div className="cart-info">
                                <img src={product1} alt="" />
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price:rs.50.00</small>
                                    <br></br>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1"></input></td>
                        <td>Rs50.00/-</td>
                    </tr>                    
                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>Rs.200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>Rs35.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>Rs.235.00</td>
                        </tr>
                    </table>
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

export default Cart
