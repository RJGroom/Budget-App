import React from 'react';

const Login = () => {
    return (
        <div className="login-component">
            <h3>Log In Here</h3>
            <form className="login-form">
                <label>Username</label> <br />
                <input type="text" name="username" placeholder="Username" size="27" className="login-input" /> <br />
                <label>Password</label> <br />
                <input type="password" name="password" placeholder="Password" size="27" className="login-input" /> <br />
                <input type="submit" value="Login" className="login-submit" />
            </form>
            <p>Forgot your password?</p>
            <a href="#">Click Here</a>
        </div>
    )
}

export default Login