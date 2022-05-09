import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">

                <div className='navbar-left'>
                    <div className="navbar-btn">
                        <Link to="/">
                            <img src="/assets/images/dpp-logo.png" alt="HexaBit Logo" className="img-fluid logo"/>
                        </Link>
                        <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars"></i></button>
                    </div>
                </div>  
                
                <div className="navbar-right">
                    {/* <form id="navbar-search" className="navbar-form search-form">
                        <input value="" className="form-control" placeholder="Search here..." type="text"/>
                        <button type="button" className="btn btn-default"><i className="icon-magnifier"></i></button>
                    </form>                 */}

                    <div id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li className='p-2'><Link to="/">Home</Link></li>
                            <li className='p-2'><Link to="/">About</Link></li>
                            <li className='p-2'><Link to="/">Courses</Link></li>
                            <li className='p-2'><Link to="/">Job Board</Link></li>
                            <li className='p-2'><Link to="/">Shop</Link></li>
                            <li className='p-2'><Link to="/">Report</Link></li>
                            <li className='p-2'><Link to="/">Contact Us</Link></li>
                            <li className='p-2'><Link to="/">Dashboard</Link></li>
                            <li><Link to="/explore">Explore</Link></li>
                            <li className="dropdown dropdown-animated scale-left">
                                <a href="javascript:void(0);" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="notification-dot"></span>
                                </a>
                                <ul className="dropdown-menu right_chat email">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">James Wert <small className="float-right">Just now</small></span>
                                                    <span className="message">Lorem ipsum Veniam aliquip culpa laboris minim tempor</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Folisise Chosielie <small className="float-right">12min ago</small></span>
                                                    <span className="message">There are many variations of Lorem Ipsum available, but the majority</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Ava Alexander <small className="float-right">38min ago</small></span>
                                                    <span className="message">Many desktop publishing packages and web page editors</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media mb-0">
                                                <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Debra Stewart <small className="float-right">2hr ago</small></span>
                                                    <span className="message">Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-animated scale-left">
                                <a href="javascript:void(0);" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i className="fa fa-user"></i>
                                    <span className="notification-dot"></span>
                                </a>
                                <ul className="dropdown-menu feeds_widget">
                                    <li className="header">You have 5 new Notifications</li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="feeds-left"><i className="fa fa-thumbs-o-up text-success"></i></div>
                                            <div className="feeds-body">
                                                <h4 className="title text-success">7 New Feedback <small className="float-right text-muted">Today</small></h4>
                                                <small>It will give a smart finishing to your site</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="feeds-left"><i className="fa fa-user"></i></div>
                                            <div className="feeds-body">
                                                <h4 className="title">New User <small className="float-right text-muted">10:45</small></h4>
                                                <small>I feel great! Thanks team</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="feeds-left"><i className="fa fa-question-circle text-warning"></i></div>
                                            <div className="feeds-body">
                                                <h4 className="title text-warning">Server Warning <small className="float-right text-muted">10:50</small></h4>
                                                <small>Your connection is not private</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="feeds-left"><i className="fa fa-check text-danger"></i></div>
                                            <div className="feeds-body">
                                                <h4 className="title text-danger">Issue Fixed <small className="float-right text-muted">11:05</small></h4>
                                                <small>WE have fix all Design bug with Responsive</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="feeds-left"><i className="fa fa-shopping-basket"></i></div>
                                            <div className="feeds-body">
                                                <h4 className="title">7 New Orders <small className="float-right text-muted">11:35</small></h4>
                                                <small>You received a new oder from Tina.</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li><a href="javascript:void(0);" className="right_toggle icon-menu" title="Right Menu"><i className="icon-settings"></i></a></li>
                            <li><a href="page-login.html" className="icon-menu"><i className="icon-power"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;