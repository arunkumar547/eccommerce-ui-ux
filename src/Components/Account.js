import React,{useState} from 'react'
import Dudeme_Logo from "../IMAGES/Dudeme_Logo.png";
import image1 from "../IMAGES/image1.png";
import image2 from "../IMAGES/image2.png";
import cart from "../IMAGES/cart.png";  //category-1
import category1 from "../IMAGES/category1.png";
import product1 from "../IMAGES/product1.jpg";
import watch from "../IMAGES/watch.png";
import user from "../IMAGES/user.png";
import brands from "../IMAGES/brands.png";
import menu from "../IMAGES/menu.png";
import './Header.css';

const Account = () => {
    const [open,setOpen] = useState(true)
    // const toggle

    // js for toggle menu
    const menuToggle=()=>{
        let menuItems=document.getElementById("MenuItems");
        open ? menuItems.style.maxHeight="200px"  : menuItems.style.maxHeight="0px";
        setOpen(!open)
    }

    // js for toogle form
    // const toggleForm=(form)=>{
    //     let toggle=form
    //     console.log(toggle)
    //     let loginForm=document.getElementById("LoginForm");
    //     let regForm=document.getElementById("RegForm");
    //     let indicator=document.getElementById("indicator");

    //     if(toggle=="login"){
    //         regForm.style.transform="translateX(0px)",
    //         loginForm.style.transform="translateX(0px)",
    //         indicator.style.transform="translateX(100px)"
    //     }
    //     else{
    //         regForm.style.transform="translateX(300px)",
    //         loginForm.style.transform="translateX(300px)",
    //         indicator.style.transform="translateX(0px)"
    //     }

    //     // toggle=="login" ? (
    //     //     regForm.style.transform="translateX(0px)",
    //     //     loginForm.style.transform="translateX(0px)",
    //     //     indicator.style.transform="translateX(100px)" )
    //     // : (
    //     //     regForm.style.transform="translateX(300px)",
    //     //     loginForm.style.transform="translateX(300px)",
    //     //     indicator.style.transform="translateX(0px)" )

    // }

    const register=()=>{
        let loginForm=document.getElementById("LoginForm");
        let regForm=document.getElementById("RegForm");
        let indicator=document.getElementById("indicator");

        regForm.style.transform="translateX(0px)"
        loginForm.style.transform="translateX(0px)"
        indicator.style.transform="translateX(100px)"
    }

    const login=()=>{
        let loginForm=document.getElementById("LoginForm");
        let regForm=document.getElementById("RegForm");
        let indicator=document.getElementById("indicator");

        regForm.style.transform="translateX(300px)"
        loginForm.style.transform="translateX(300px)"
        indicator.style.transform="translateX(0px)"
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




{/* ---------------account page ie login and register----------------------- */}

        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={image2} alt="" />
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={login}>Login</span>
                                <span onClick={register}>Register</span>
                                <hr id="indicator"></hr>
                            </div>
                            <form id="LoginForm">
                                <input type="text" placeholder="UserName" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Login</button>
                                <a href="">Forgot Password</a>
                            </form>

                            <form id="RegForm">
                                <input type="text" placeholder="UserName" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Register</button>
                            </form>
                        </div>
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

export default Account
