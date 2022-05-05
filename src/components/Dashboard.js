import React from "react";
import { Header, Rightmenu, Leftmenu } from "./Layout";

const Dashboard = () => {
    return (
        <>
            <Header />
            <Rightmenu />
            <Leftmenu />
            <div id="main-content">
                <div className="block-header">
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
                </div>

                <div className="container-fluid">

                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12">
                            <div className="card top_summary">
                                <div className="header">
                                    <h2>Summary</h2>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-4">
                                            <div id="Summary1" className="carousel vert slide" data-ride="carousel" data-interval="1700">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">$15K</h2>
                                                            <small>17% <i className="fa fa-level-up text-success"></i><br/>
                                                            Total Revenue</small>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">$95M</h2>
                                                            <small>23% <i className="fa fa-level-up text-success"></i><br/>
                                                            Wallet Ballance </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div id="Summary2" className="carousel vert slide" data-ride="carousel" data-interval="1200">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">$1200</h2>
                                                            <small>18% <i className="fa fa-level-down text-danger"></i><br/>
                                                            Current Month</small>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">$3489</h2>
                                                            <small>18% <i className="fa fa-level-up text-success"></i><br/>
                                                            This Year</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div id="Summary3" className="carousel vert slide" data-ride="carousel" data-interval="1000">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">432</h2>
                                                            <small>23% <i className="fa fa-level-up text-success"></i><br/>
                                                            Total User</small>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">56</h2>
                                                            <small>8% <i className="fa fa-level-up text-success"></i><br/>
                                                            New User</small>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">10K</h2>
                                                            <small>47% <i className="fa fa-level-up text-success"></i><br/>
                                                            Pageviews</small>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="p-10">
                                                            <h2 className="font700 float-left mr-2">17K</h2>
                                                            <small>28% <i className="fa fa-level-up text-success"></i><br/>
                                                            Visitors</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header bline">
                                    <h2>Sales Overview</h2>
                                    <ul className="header-dropdown dropdown dropdown-animated scale-left">                                
                                        <li><a className="btn btn-default btn-sm" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Monthly">Monthly</a></li>
                                        <li><a className="btn btn-outline-primary btn-sm" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Yearly">Yearly</a></li>
                                    </ul>
                                </div>
                                <div className="body">                            
                                    <div id="Sales_Overview"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2>Top Products</h2>
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
                                </div>
                                <div className="body">
                                    <div id="chart-top-products" className="chartist"></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
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
                                </div>
                                <div className="body">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-7">
                                            <h5 className="mb-0">Server</h5>
                                            <small className="info">of 1Tb</small>
                                        </div>
                                        <div className="col-5 text-right">
                                            <h2 className="m-b-0">62%</h2>
                                        </div>
                                        <div className="col-12">                                    
                                            <div className="progress progress-sm progress-transparent custom-color-blue mb-0 mt-3">
                                                <div className="progress-bar" data-transitiongoal="87"></div>
                                            </div>
                                            <small className="text-small">6% higher than last month</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-7">
                                            <h5 className="mb-0">Email</h5>
                                            <small className="info">of 31</small>
                                        </div>
                                        <div className="col-5 text-right">
                                            <h2 className="m-b-0">62%</h2>
                                        </div>
                                        <div className="col-12">                                    
                                            <div className="progress progress-sm progress-transparent custom-color-yellow mb-0 mt-3">
                                                <div className="progress-bar" data-transitiongoal="54"></div>
                                            </div>
                                            <small className="text-small">Total Registered email</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>      
                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-7">
                                            <h5 className="mb-0">Domians</h5>
                                            <small className="info">of 10</small>
                                        </div>
                                        <div className="col-5 text-right">
                                            <h2 className="m-b-0">2</h2>
                                        </div>
                                        <div className="col-12">                                    
                                            <div className="progress progress-sm progress-transparent custom-color-green mb-0 mt-3">
                                                <div className="progress-bar" data-transitiongoal="67"></div>
                                            </div>
                                            <small className="text-small">Total registered Domain</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="header bline">
                                    <h2>Resent Chat</h2>
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
                                </div>
                                <div className="body text-center">
                                    <div className="cwidget-scroll">
                                        <ul className="chat-widget m-r-5 clearfix">
                                            <li className="left float-left">
                                                <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt=""/>
                                                <div className="chat-info">       
                                                    <span className="message">Hello, John<br/>What is the update on Project X?</span>
                                                </div>
                                            </li>
                                            <li className="right">
                                                <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt=""/>
                                                <div className="chat-info">
                                                    <span className="message">Hi, Alizee<br/> It is almost completed. I will send you an email later today.</span>
                                                </div>
                                            </li>
                                            <li className="left float-left">
                                                <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt=""/>
                                                <div className="chat-info">
                                                    <span className="message">That's great. Will catch you in evening.</span>
                                                </div>
                                            </li>
                                            <li className="right">
                                                <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt=""/>
                                                <div className="chat-info">
                                                    <span className="message">Sure we'will have a blast today.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-group p-t-15">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" ><i className="icon-paper-plane"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter text here..."/>                                    
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2>Projects List</h2>
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
                                </div>
                                <div className="body">
                                    <div className="table-responsive">
                                        <table className="table m-b-0 table-hover table-custom">
                                            <thead>
                                                <tr> 
                                                    <th>Application</th>
                                                    <th>Team</th>
                                                    <th>Change</th>
                                                    <th>Sales</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Bootstrap 4x admin v1</h6>
                                                        <span>WrapTheme To By Again</span>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled team-info mb-0">
                                                            <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1.5" data-line-Color="#182973"
                                                        data-fill-Color="transparent">3,5,1,6,5,4,8,3</div>
                                                    </td>
                                                    <td>11,200</td>
                                                    <td>$83</td>
                                                    <td><strong>$22,520</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Agular 5 admin</h6>
                                                        <span>WrapTheme To By Again</span>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled team-info mb-0">
                                                            <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>                                                    
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1.5" data-line-Color="#f4516c"
                                                        data-fill-Color="transparent">4,6,3,2,5,6,5,4</div>
                                                    </td>
                                                    <td>11,200</td>
                                                    <td>$66</td>
                                                    <td><strong>$13,205</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Vue Dashboard</h6>
                                                        <span>WrapTheme To By Again</span>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled team-info mb-0">
                                                            <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>                                                
                                                            <li><img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1.5" data-line-Color="#29bd73"
                                                        data-fill-Color="transparent">7,3,2,1,5,4,6,8</div>
                                                    </td>
                                                    <td>12,080</td>
                                                    <td>$93</td>
                                                    <td><strong>$17,700</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Agular 5 dashboard</h6>
                                                        <span>Wraptheme To By Again</span>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled team-info mb-0">
                                                            <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                            <li><img src="../assets/images/xs/avatar9.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1.5" data-line-Color="#182973"
                                                        data-fill-Color="transparent">3,1,2,5,4,6,2,3</div>
                                                    </td>
                                                    <td>18,200</td>
                                                    <td>$178</td>
                                                    <td><strong>$17,700</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">DotNet Project</h6>
                                                        <span>WrapTheme To By Again</span>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled team-info mb-0">
                                                            <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>                                                
                                                            <li><img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1.5" data-line-Color="#29bd73"
                                                        data-fill-Color="transparent">7,3,2,1,5,4,6,8</div>
                                                    </td>
                                                    <td>12,080</td>
                                                    <td>$93</td>
                                                    <td><strong>$17,700</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                
                                    </div>
                                </div>
                            </div>
                        </div>                
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;
