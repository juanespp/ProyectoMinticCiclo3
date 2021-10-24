import React, { Fragment} from 'react';
import img1 from "./img/bicycle-quote.png";
import img2 from "./img/Rocky-Mountain-bicycles-Logo.png"
import "./css/Normalize.css";
import "./css/Style.css";
import { useAuth0 } from "@auth0/auth0-react";


function LoginPage() {
    
    const { loginWithRedirect } = useAuth0();
    const {user, isAuthenticated} = useAuth0();


    return (
        <Fragment>
            
            <div className="container"/>
            
                    <body>
                        <div className="container">
                            <div className="img">
                                <img src={img1} alt="img1" />
                            </div>

                            <div className="login-content">

                                <form action="index.html" />
                                <img src={img2} alt="img2" />
                                <h2 className="title">Welcome Rocky Mountain Bikes</h2>
                                {/*<div className="input-div focus">
                                    <div className="i">
                                        <i className="user"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Username</h5>
                                        <input type="email" className="input" placeholder = "example@rockybikes.com" required />
                                    </div>
                                </div>
                                <div className="input-div focus">
                                    <div className="i">
                                        <i className="lock"></i>
                                    </div>

                                    <div className="div">
                                        <h5>Password</h5>
                                        <input type="password" className="input" maxlength="15" required />
                                    </div>
                                </div>

                                <div className="login__container--remember-me">
                                    <label>
                                        <input type="checkbox" name="Remember_me" id="cbox1" value="checkbox" />Remember me
                                    </label>
                                </div>*/}

                                
                               
                                <button className type="submit" className="btn-login" value="Login" onClick={() => loginWithRedirect()}>LOGIN</button>
                                

                                {/*<p className="login__container--register"> Don't have an account? <a href="*">Create an account</a></p>*/}
                                <form />
                            </div>
                        </div>

                    </body>

            <div />
            
                </Fragment>

                )
}

                export default LoginPage;