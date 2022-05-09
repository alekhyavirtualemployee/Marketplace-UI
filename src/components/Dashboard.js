import React from "react";
import { Header, Footer } from "./Layout";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div id="main-content">
                {/* <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Dashboard</h2>
                        </div>            
                        <div className="col-md-6 col-sm-12 text-right">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                            <a href="javascript:void(0);" className="btn btn-sm btn-primary" title="">Create New</a>
                        </div>
                    </div>
                </div> */}

                <div className="container-fluid">

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="header">
                                    {/* <h2>Top Products</h2> */}
                                </div>
                                <div className="body">
                                    <AwesomeSlider animation="cubeAnimation">
                                        <div data-src="/assets/images/nft1.png" />
                                        <div data-src="/assets/images/nft1.png" />
                                        <div data-src="/assets/images/nft1.png" />
                                    </AwesomeSlider>
                                </div>
                            </div>
                            <div className="card">
                                {/* <div className="header">
                                    <h2>My Wallets</h2>
                                    <ul className="header-dropdown dropdown dropdown-animated scale-left">
                                        <li> <a href="javascript:void(0);" data-toggle="cardloading" data-loading-effect="pulse"><i className="icon-refresh"></i></a></li>
                                        <li><a href="javascript:void(0);" className="full-screen"><i className="icon-size-fullscreen"></i></a></li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another Action</a></li>
                                                <li><a href="javascript:void(0);">Something else</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>*/}
                                {/* <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-5">
                                            <div className="sparkline-pie">6,4,8</div>
                                        </div>
                                        <div className="col-7">
                                            <h6 className="font700">$7,025.72</h6>
                                            <span>Wallet Ballance <span className="float-right">8920$</span></span><br/>
                                            <span>Travels <span className="float-right">920$</span></span><br/>
                                            <span>Foods & Drinks <span className="float-right">120$</span></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="container-fluid">   
                    <div className="row clearfix">
                        <div className="col-6">
                            
                                <div className="card">
                                    <img className="card-img-top" src="/assets/images/nft1.png" alt="Card image cap"/>
                                    <div className="card-body">
                                    <h5 className="card-title">Stars</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="btn btn-primary" type="button">Purchase</button>
                                    </div>
                                </div>
                                
                                
                            
                        </div>
                        <div className="col-6">
                            
                                
                                <div className="card">
                                    <img className="card-img-top" src="/assets/images/nft1.png" alt="Card image cap"/>
                                    <div className="card-body">
                                    <h5 className="card-title">FUND YOUR PROJECT</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="btn btn-primary" type="button">Submit Project</button>
                                    </div>
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
