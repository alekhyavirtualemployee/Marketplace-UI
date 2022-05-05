import React from "react";
import { Route } from 'react-router-dom';

import Dashboard from "../components/Dashboard";

const routes = () => {
  
    return (
        <Route exact path="/" component={Dashboard} />      
    );
};
  
export default routes;