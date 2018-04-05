/* global google */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// material-ui components
import Snackbar from 'material-ui/Snackbar';

import calendar from '../../../assets/icons/calendar.png';
import contact from '../../../assets/icons/contact.png';
import cancel from '../../../assets/icons/cancel.png';
import direction from '../../../assets/icons/direction.png';
import './service-detail.css';

import { connect } from 'react-redux';
import { fetchSpecificClient } from '../../../actions';

var currentLat;
var currentLong;
var address;
var currentClientID;

// geo success function
function geoSuccess(position) {
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;

    // storing the current latitude and longitude on session
    sessionStorage.setItem('currentCoords', position.coords);

    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(currentLat, currentLong);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                //formatted address
                address = results[0].formatted_address;

                let userID = sessionStorage.getItem('userID');
                let timeStamp = new Date();
                let date = timeStamp.getDate() + "/" + (timeStamp.getMonth() + 1) + "/" + timeStamp.getFullYear();
                let currentTime = timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds();

                let clientServiceObj = {
                    employeeID: userID,
                    address: address,
                    clientID: currentClientID,
                    date: date,
                    timeStamp: currentTime
                };

                // storing current location locally
                sessionStorage.setItem('serviceSpecificObj', JSON.stringify(clientServiceObj));

                console.log(sessionStorage.getItem('serviceSpecificObj'))
            } else {
                alert("Geodetection failed. Try refreshing");
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    });
}

// geo error function
function geoError() {
    alert('Geolocation failed');
}

class ServiceDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceStarted: false,
            openSnack: false,
            reduceStopOpacity: false
        };

        this.props.onShowBack();
        this.props.onTitleChange('CLIENT DETAILS');
    }

    componentDidMount() {
        this.props.fetchSpecificClient(this.props.match.params.id);
        currentClientID = this.props.match.params.id;
    }

    startService() {
        // getting current location of user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            alert('Geolocation is not supported')
        }

        this.setState({
            serviceStarted: true
        });
    }

    stopService() {
        console.log("service stopped");
        this.setState({
            openSnack: true,
            reduceStopOpacity: true,
        });

        setTimeout(() => {
            this.props.history.push('/home/service');
        }, 2000);
    }

    handleRequestClose = () => {
        this.setState({
            openSnack: false
        });
    };

    render() {
        if (!this.props.singleClient) {
            return <p>Loading...</p>
        }

        let { serviceStatus } = this.props.singleClient;
        let statusColor;

        if (serviceStatus === "ongoing") {
            statusColor = "yellow";
        } else if (serviceStatus === "completed") {
            statusColor = "green";
        } else {
            statusColor = "red";
        }

        return (
            <div className="service-detail-main-div" style={{ marginTop: '62px' }}>
                <div className="tasks-title-div" style={{ height: '104px' }}>
                    <h3 className="tasks-home-title">MY TASKS</h3>
                    <img src={calendar} alt="calendar-icon" className="service-calendar" />
                    <div className="notification">1</div>
                </div>
                <div className="detail-page">
                    <div className="status-box" style={{ background: statusColor, top: '-19px' }}></div>
                    <p className="client-main-name">{this.props.singleClient.name}</p>
                    <span className="client-main-time">{this.props.singleClient.serviceTime}</span>
                    <p className="general-data-client" style={{ marginTop: '13px', marginBottom: '13px' }}>SERVICE TYPE: {this.props.singleClient.serviceType}</p>
                    <p className="general-data-client">{this.props.singleClient.address1}</p>
                    <p className="general-data-client">{this.props.singleClient.address2}</p>
                    <p className="general-data-client">{this.props.singleClient.city}</p>
                </div>

                <Snackbar
                    open={this.state.openSnack}
                    message={`${this.props.singleClient.name} - Service Completed`}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                    style={{ textAlign: 'center' }}
                />

                <Grid className="action-buttons" style={(this.state.serviceStarted === false) ? { display: 'block' } : { display: 'none' }}>
                    <Row>
                        <Col xs={4}>
                            <img src={cancel} alt="cancel-button" className="service-icons" />
                            <p className="service-icon-label">CANCEL</p>
                        </Col>
                        <Col xs={4}>
                            <a href={`tel://${this.props.singleClient.contact}`} style={{ textDecoration: 'none', outline: 'none' }}>
                                <img src={contact} alt="contact-button" className="service-icons" />
                            </a>
                            <p className="service-icon-label">CALL</p>
                        </Col>
                        <Col xs={4}>
                            <a href="https://map.google.com">
                                <img src={direction} alt="direction-button" className="service-icons" />
                            </a>
                            <p className="service-icon-label">DIRECTION</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <button onClick={() => this.startService()} className="service-status-btn">START SERVICE</button>
                        </Col>
                    </Row>
                </Grid>
                <Grid className="action-buttons" style={(this.state.serviceStarted) ? { display: 'block' } : { display: 'none' }}>
                    <Row>
                        <Col xs={12} style={(this.state.reduceStopOpacity) ? { opacity: 0.3 } : { opacity: 1 }}>
                            <img onClick={() => this.stopService()} src={cancel} alt="cancel-button" className="stop-service-icon" />
                            <p className="service-icon-label">STOP SERVICE</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        singleClient: state.singleClient.singleClient
    };
}

export default (connect(mapStateToProps, { fetchSpecificClient })((ServiceDetail)));