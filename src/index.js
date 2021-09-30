import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import App from './App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Switch>                    
                    <Route exact path="/" component={App} />
                </Switch>
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));