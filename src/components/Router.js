import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav"
import App from "./App";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import BuyIt from "./BuyIt";
import DesignPad from "./DesignPad";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/buyit" component={BuyIt}/>
            <Route exact path="/projects/designpad" component={DesignPad}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
