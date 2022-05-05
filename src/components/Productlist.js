import React from "react";
import { Header, Rightmenu, Leftmenu } from "./Layout";

const Productlist = ()=>{
    return (
        <>
        <Header />
        <Rightmenu />
        <Leftmenu />
        <div id="main-content">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>Card Layout</h2>
                    </div>            
                    <div className="col-md-6 col-sm-12 text-right">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                            <li className="breadcrumb-item">UI</li>
                            <li className="breadcrumb-item active">Card Layout</li>
                        </ul>
                        <a href="javascript:void(0);" className="btn btn-sm btn-primary" title="">Create New</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid">   
                <div className="row clearfix">
                    <div className="col-12">
                        <div className="card-columns mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Productlist;