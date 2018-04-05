import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from '../../assets/icons/logo.png';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: '',
            password: ''
        };
    }

    onHandleUser(event) {
        this.setState({
            userID: event.target.value
        });
    }

    onHandlePass(event) {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit() {
        console.log(this.state);
        if (this.state.userID === 'HNDZ001' && (this.state.password).toLowerCase() === 'handz4u@serve') {
            sessionStorage.setItem('userType', 'service');
            sessionStorage.setItem('userID', 'HNDZ001');
            this.props.history.push('/home/service');
        } else if (this.state.userID === 'MSTR001' && (this.state.password).toLowerCase() === 'handz4u@master') {
            sessionStorage.setItem('userType', 'master');
            sessionStorage.setItem('userID', 'MSTR001');
            this.props.history.push('/home/master');
        } else if (this.state.userID === 'CLT001' && (this.state.password).toLowerCase() === 'handz4u@client') {
            sessionStorage.setItem('userType', 'client');
            sessionStorage.setItem('userID', 'CLT001');
            this.props.history.push('/home/client');
        }
    }

    render() {
        return (
            <Grid fluid className="login-main">
                <Row>
                    <Col xs={12}>
                        <img src={logo} alt="app-logo" className="main-logo" />
                    </Col>
                </Row>
                <Row>
                    <Col xsOffset={1} xs={10}>
                        <input className="login-input" onChange={(e) => this.onHandleUser(e)} placeholder="USER ID" />
                        <br />
                        <input className="login-input" onChange={(e) => this.onHandlePass(e)} type="password" placeholder="PASSWORD" />
                    </Col>
                </Row>
                <Row>
                    <Col xsOffset={1} xs={10} className="btn-group">
                        <button className="login-btn" onClick={() => this.onSubmit()}>LOGIN</button>
                        <button className="login-btn">FACE ID</button>
                    </Col>
                </Row>
                <Row>
                    <Col xsOffset={1} xs={10}>
                        <p className="bottom-text">SIGNUP | FORGOT PASSWORD</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;