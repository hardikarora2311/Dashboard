import React from 'react'
import Image from "next/image"
import Link from 'next/link'
const Signup = () => {
    return (
        <div>            
            <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        {/* <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" /> */}
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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
                                <input type="email" id="e-mail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="E-mail">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="Passwrd">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="remeber" />
                                    <label className="form-check-label" htmlFor="Remeber-me">
                                        Remember me
                                    </label>
                                </div>
                                <a href="/forgetpass" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{paddingleft: "2.5rem" ,paddingright: "2.5rem"}}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="/Signup"
                                    className="link-danger">Register</Link></p>
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
        </div>

    )
}

export default Signup;