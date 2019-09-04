import React from "react";
import App from './App';

import { BrowserRouter as Router, Route, Link, Redirect  } from "react-router-dom";

export default class InstagramApp extends React.Component {
    constructor(props) {
        super(props);
        console.log("Starting app");
    }

    render() {
        return (
        <Router>
            {/* <DefualtRoute component={App} /> */}
            <Redirect from="/" to="/instagram" />
            {/* <Route path="/" component={App} /> */}
            <Route path="/:username" component={App} />
        </Router>
        );
    }
}