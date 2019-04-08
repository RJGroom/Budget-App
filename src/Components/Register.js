import React from 'react';

const Register = () => {
    return (
        <div className="register-component">
            <h3>Create an Account</h3>
            <form className="registration-form">
                <label>First Name</label> <br />
                <input type="text" name="firstName" placeholder="First Name" size="27" className="register-input" /> <br />
                <label>Last Name</label> <br />
                <input type="text" name="lastName" placeholder="Last Name" size="27" className="register-input" /> <br />
                <label>Username</label> <br />
                <input type="text" name="username" placeholder="Username" size="27" className="register-input" /> <br />
                <label>Password</label> <br />
                <input type="password" name="password" placeholder="Password" size="27" className="register-input" /> <br />
                <label>Verify Password</label> <br />
                <input type="password" name="passwordVerification" placeholder="Password" size="27" className="register-input" /> <br />
                <input type="submit" value="Register" className="register-submit" />
            </form>
            <p>Already have an account?</p>
            <a href="#">Log in</a>
        </div>
    )
}

export default Register