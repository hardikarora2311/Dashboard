import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im';
import { ImGoogle2 } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';


const Signup = () => {
    return (
        <div>            
            <section className=" mx-10 vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    {<Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid" alt="Sample image" width="350px"
                    height="400px"layout='responsive' /> }
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{top: "50px"}}>
                        <form>
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="E-mail">Email address</label>
                                <input type="email" id="e-mail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>

                            <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="Passwrd">Password</label>
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
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
                            <div>
                                <p style={{paddingTop:"10px",paddingLeft: "240px"}}> <strong>Or</strong></p>
                            </div>
                            <div>
                                <p style={{paddingLeft: "210px"}}>Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating btn-block">
                                    <i className='mx-1'><ImFacebook2/></i>Continue with Facebook
                                </button>

                                <button type="button" className="btn btn-primary btn-floating  btn-block">
                                    <i className='mx-1'><ImGoogle2/></i>Continue with Google
                                </button>

                                <button type="button" className="btn btn-primary btn-floating  btn-block">
                                <i className='mx-2'><ImLinkedin2/></i>Continue with LinkedIn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )
}

export default Signup;
