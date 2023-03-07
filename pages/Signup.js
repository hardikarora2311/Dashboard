import React, { useState } from 'react'
const Signup = () => {
    const [Name, setname] = useState();
    const [Email, setEmail] = useState();
    const [pass, setpass] = useState();

    const handleChange = (e) => {
        if (e.target.name === 'Name') {
            setname(e.target.value);
            console.log(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
            console.log(e.target.value)
        }
        else if (e.target.name === 'pass') {
            setpass(e.target.value)
            console.log(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.Name.value);
        const data = { Name, Email, pass }
        let res = await fetch("http://localhost:3000/Signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response)
        setEmail('');
        setname('');
        setpass('');
    }
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            {/* <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid" alt="Sample image" /> */}
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit} method='POST'>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input value={Name} onChange={handleChange} type="text" id="name" className="form-control form-control-lg"
                                        placeholder="Enter your Name" />
                                    <label className="form-label" htmlFor="name">Name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input value={Email} onChange={handleChange} type="email" id="email" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="email">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input value={pass} onChange={handleChange} type="password" id="pass" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" htmlFor="pass">Password</label>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}>Signup</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Signup;
