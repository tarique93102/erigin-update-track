import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import menu from './assets/icons/menu.png';
import arrow from './assets/icons/arrow-back.png';
import './App.css';

// components to be routed
import MasterHome from './components/master/home/home';
import ClientHome from './components/client/home/home';
import ServiceHome from './components/service/home/home';
import Dummy from './dummy';

// material-ui component
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolTitle: 'Welcome',
      open: false,
      showBack: false
    };
  }

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  handleToolbarTitle = (title) => {
    console.log(title);
    this.setState({
      toolTitle: title
    });
  }

  showBack = () => {
    this.setState({
      showBack: true
    });
  }

  hideBack = () => {
    this.setState({
      showBack: false
    });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <div className='toolbar-common'>
          <p className='toolbar-title'>{this.state.toolTitle}</p>
          <img style={(this.state.showBack) ? { display: 'block' } : { display: 'none' }} src={arrow} alt='go-back' className='back-button' onClick={this.goBack} />
          <img src={menu} style={(this.state.showBack) ? { display: 'block' } : { display: 'none' }} alt='menu' className='menu-back-button' onClick={this.handleToggle} />
          <img style={(this.state.showBack === false) ? { display: 'block' } : { display: 'none' }} src={menu} alt='menu' className='menu-button' onClick={this.handleToggle} />
        </div>

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          style={{background: "#F47580"}}>
          <div className="sidenav-main"></div>
        </Drawer>

        <Switch>
          <Route exact path={`${this.props.match.url}`} render={(props) => <Dummy {...props}/>} />
          <Route path={`${this.props.match.url}/master`} render={(props) => <MasterHome {...props} onShowBack={this.showBack} onHideBack={this.hideBack} onTitleChange={this.handleToolbarTitle} />} />
          <Route path={`${this.props.match.url}/service`} render={(props) => <ServiceHome {...props} onShowBack={this.showBack} onHideBack={this.hideBack} onTitleChange={this.handleToolbarTitle} />} />
          <Route path={`${this.props.match.url}/client`} render={(props) => <ClientHome {...props} />} />
        </Switch>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
