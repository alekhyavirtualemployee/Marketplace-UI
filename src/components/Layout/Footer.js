import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return (
        <footer className='mt-auto footer-section'>
            
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3 address">
                        <h5>Address</h5>
                        <div className=''>
                            <p className=''>
                                <span>info@diversityproduction.pro</span>
                            </p>
                        </div>
                        <div className=''>
                            <p className=''>
                                <span>
                                777 South Figueroa Street
                                </span>
                                <span>
                                Suite 4600, DPT#2035
                                </span>
                                <span>
                                Los Angeles, CA 90017
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-0 mt-3 explore">
                        <h5>Explore</h5>
                        <div className=''>
                            <ul className=''>
                                <li className=''><Link to="/">Home</Link></li>
                                <li className=''><Link to="/">About</Link></li>
                                <li className=''><Link to="/">Why Us</Link></li>
                                <li className=''><Link to="/">Courses</Link></li>
                                <li className=''><Link to="/">Contact Us</Link></li>
                                <li className=''><Link to="/">Video</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-0 mt-3 quick-link">
                        <h5>Quick Link</h5>
                        <div className=''>
                            <ul className=''>
                                <li className=''><Link to="/">Report</Link></li>
                                <li className=''><Link to="/">Login</Link></li>
                                <li className=''><Link to="/">Privacy Policy</Link></li>
                                <li className=''><Link to="/">Copyright Policy</Link></li>
                                <li className=''><Link to="/">Terms of Use</Link></li>
                                <li className=''><Link to="/">Employer Register</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3 connect">
                        <h5>Get Connected - Follow us on social media</h5>
                        <div className=''>
                            <ul className=''>
                                <li className='p-2'><Link to="/"><i className='fa fa-facebook'></i></Link></li>
                                <li className='p-2'><Link to="/"><i className='fa fa-linkedin'></i></Link></li>
                                <li className='p-2'><Link to="/"><i className='fa fa-instagram'></i></Link></li>
                                <li className='p-2'><Link to="/"><i className='fa fa-twitter'></i></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{backgroundColor:"#f9f9f9",paddingTop:"10px"}}>
                <p>
                    <span>© Copyright Brought to you by Education Media, LLC, All rights reserved.</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;