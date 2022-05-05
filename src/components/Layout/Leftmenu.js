import React from 'react';
import { Link } from 'react-router-dom';

const Leftmenu = () => {
    return (
        <div id="left-sidebar" class="sidebar">
            <div class="navbar-brand">
                <a href="index.html">
                    <img src="/assets/images/icon-light.svg" alt="HexaBit Logo" class="img-fluid logo"/>
                    <span>HexaBit</span>
                </a>
                <button type="button" class="btn-toggle-offcanvas btn btn-sm btn-default float-right"><i class="lnr lnr-menu fa fa-chevron-circle-left"></i></button>
            </div>
            <div class="sidebar-scroll">
                <div class="user-account">
                    <div class="user_div">
                        <img src="/assets/images/user.png" class="user-photo" alt="User Profile Picture"/>
                    </div>
                    <div class="dropdown">
                        <span>Welcome,</span>
                        <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Christy Wert</strong></a>
                        <ul class="dropdown-menu dropdown-menu-right account">
                            <li>
                                <a href="page-profile.html"><i class="icon-user"></i>My Profile</a>
                            </li>
                            <li>
                                <a href="app-inbox.html"><i class="icon-envelope-open"></i>Messages</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i class="icon-settings"></i>Settings</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="page-login.html"><i class="icon-power"></i>Logout</a></li>
                        </ul>
                    </div>
                </div>  
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">
                        <li class="active"><Link to="/"><i class="icon-home"></i><span>Dashboard</span></Link></li>
                        <li class=""><Link to="/explore"><i class="icon-home"></i><span>Explore</span></Link></li>
                        {/* <li>
                            <a href="#uiElements" class="has-arrow"><i class="icon-diamond"></i><span>UI Elements</span></a>
                            <ul>
                                <li><a href="ui-card.html">Explore</a></li>
                                <li><a href="ui-helper-class.html">Helper Classes</a></li>
                                
                            </ul>
                        </li> */}
                    </ul>
                </nav>     
            </div>
        </div>
    )
}

export default Leftmenu;