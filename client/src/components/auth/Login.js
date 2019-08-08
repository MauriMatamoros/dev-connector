import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log('SUCCESS')
    }
    return (
        <>
            <h1 className="large text-primary">
                Sign In
            </h1>
            <p className="lead"><s className="fas fa-user"></s>
                Sign Into Your Account
            </p>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        minLength="6" 
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            <p className="my-1">
                Don't have an account?
                <Link to="/register"> Sign Up</Link>
            </p>
        </>
    )
}

export default Login
