import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// components for service to be routed
import LandingPage from '../landing-page/landing-page';
import EmployeeDetail from '../employee-detail/employee-detail';
import './home.css';

class MasterHome extends Component {
    render() {
        return (
            <div style={{ marginTop: '62px' }}>
                <Switch>
                    <Route exact path={`${this.props.match.url}`} render={(props) => <LandingPage {...props} onHideBack={this.props.onHideBack} onTitleChange={this.props.onTitleChange} />}/>
                    <Route path={`${this.props.match.url}/schedule`} render={(props) => <EmployeeDetail onShowBack={this.props.onShowBack} onTitleChange={this.props.onTitleChange} {...props} />}/>
                    <Redirect from="**" to={`${this.props.match.url}`} />
                </Switch>
            </div>
        );
    }
}

export default MasterHome;