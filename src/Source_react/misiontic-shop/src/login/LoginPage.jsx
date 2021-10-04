import React, { Fragment } from 'react';
import img1 from "./img/bicycle-quote.png";
import img2 from "./img/Rocky-Mountain-bicycles-Logo.png"
import "./css/Normalize.css";
import "./css/Style.css";

function LoginPage() {

    return (
        <Fragment>
            
            <div class="container"/>
            
                    <body>
                        <div class="container">
                            <div class="img">
                                <img src={img1} alt="img1" />
                            </div>

                            <div class="login-content">

                                <form action="index.html" />
                                <img src={img2} alt="img2" />
                                <h2 class="title">Welcome Rocky Mountain Bikes</h2>
                                <div class="input-div focus">
                                    <div class="i">
                                        <i class="user"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Username</h5>
                                        <input type="email" className="input" placeholder = "example@rockybikes.com" required />
                                    </div>
                                </div>
                                <div className="input-div focus">
                                    <div class="i">
                                        <i class="lock"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Password</h5>
                                        <input type="password" className="input" maxlength="15" required />
                                    </div>
                                </div>

                                <div class="login__container--remember-me">
                                    <label>
                                        <input type="checkbox" name="Remember_me" id="cbox1" value="checkbox" />Remember me
                                    </label>
                                </div>

                               

                                <input type="submit" class="btn-login" value="Login" />


                                <p class="login__container--register"> Don't have an account? <a href="*">Create an account</a></p>
                                <form />
                            </div>
                        </div>

                    </body>

            <div />
            
                </Fragment>

                )
}

                export default LoginPage;