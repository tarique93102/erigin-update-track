import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import calendar from '../../../assets/icons/calendar.png';
import './landing-page.css';

import { connect } from 'react-redux';
import { fetchClientData } from '../../../actions';

class ServiceLanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentOpen: true,
            secondOpen: false,
            thirdOpen: false,
            fourthOpen: false,
            fifthOpen: false
        };

        this.props.onTitleChange('WELCOME');
        this.props.onHideBack();
    }

    componentDidMount() {
        this.props.fetchClientData();
    }

    navigateToDetails(id) {
        this.props.history.push(`${this.props.match.url}/detail/${id}`);
    }

    renderCurrentClientList(item) {
        let color;
        let backgroundList = "#EC9D7E";

        if (item.serviceStatus === "ongoing") {
            color = "yellow";
        } else if (item.serviceStatus === "completed") {
            color = "green";
        } else {
            color = "red";
        }

        return (
            <div onClick={() => this.navigateToDetails(item._id)} key={item._id} className="client-data-li" style={{ background: backgroundList }}>
                <div className="status-box" style={{ background: color }}></div>
                <p className="client-name">{item.name}</p>
                <p className="client-locale">{item.shortLocale}</p>
                <p className="service-time">{item.serviceTime}</p>
            </div>
        );
    }

    renderSecondClientList(item) {
        let color;
        let backgroundList = "#de5a65";

        if (item.serviceStatus === "ongoing") {
            color = "yellow";
        } else if (item.serviceStatus === "completed") {
            color = "green";
        } else {
            color = "red";
        }

        return (
            <div onClick={() => this.navigateToDetails(item._id)} key={item._id} className="client-data-li" style={{ background: backgroundList }}>
                <div className="status-box" style={{ background: color }}></div>
                <p className="client-name">{item.name}</p>
                <p className="client-locale">{item.shortLocale}</p>
                <p className="service-time">{item.serviceTime}</p>
            </div>
        );
    }

    renderThirdClientList(item) {
        let color;
        let backgroundList = "#B35A7B";

        if (item.serviceStatus === "ongoing") {
            color = "yellow";
        } else if (item.serviceStatus === "completed") {
            color = "green";
        } else {
            color = "red";
        }

        return (
            <div onClick={() => this.navigateToDetails(item._id)} key={item._id} className="client-data-li" style={{ background: backgroundList }}>
                <div className="status-box" style={{ background: color }}></div>
                <p className="client-name">{item.name}</p>
                <p className="client-locale">{item.shortLocale}</p>
                <p className="service-time">{item.serviceTime}</p>
            </div>
        );
    }

    renderFourthClientList(item) {
        let color;
        let backgroundList = "#655373";

        if (item.serviceStatus === "ongoing") {
            color = "yellow";
        } else if (item.serviceStatus === "completed") {
            color = "green";
        } else {
            color = "red";
        }

        return (
            <div onClick={() => this.navigateToDetails(item._id)} key={item._id} className="client-data-li" style={{ background: backgroundList }}>
                <div className="status-box" style={{ background: color }}></div>
                <p className="client-name">{item.name}</p>
                <p className="client-locale">{item.shortLocale}</p>
                <p className="service-time">{item.serviceTime}</p>
            </div>
        );
    }

    renderFifthClientList(item) {
        let color;
        let backgroundList = "#2E5270";

        if (item.serviceStatus === "ongoing") {
            color = "yellow";
        } else if (item.serviceStatus === "completed") {
            color = "green";
        } else {
            color = "red";
        }

        return (
            <div onClick={() => this.navigateToDetails(item._id)} key={item._id} className="client-data-li" style={{ background: backgroundList }}>
                <div className="status-box" style={{ background: color }}></div>
                <p className="client-name">{item.name}</p>
                <p className="client-locale">{item.shortLocale}</p>
                <p className="service-time">{item.serviceTime}</p>
            </div>
        );
    }

    showHideTasks(tabNumber) {
        switch (tabNumber) {
            case 1: this.setState({
                currentOpen: true,
                secondOpen: false,
                thirdOpen: false,
                fourthOpen: false,
                fifthOpen: false
            });
                break;
            case 2: this.setState({
                currentOpen: false,
                secondOpen: true,
                thirdOpen: false,
                fourthOpen: false,
                fifthOpen: false
            });
                break;
            case 3: this.setState({
                currentOpen: false,
                secondOpen: false,
                thirdOpen: true,
                fourthOpen: false,
                fifthOpen: false
            });
                break;
            case 4: this.setState({
                currentOpen: false,
                secondOpen: false,
                thirdOpen: false,
                fourthOpen: true,
                fifthOpen: false
            });
                break;
            case 5: this.setState({
                currentOpen: false,
                secondOpen: false,
                thirdOpen: false,
                fourthOpen: false,
                fifthOpen: true
            });
                break;
            default:
        }
    }

    render() {
        // waiting for the data to load
        if (!this.props.client) {
            return <p>Loading...</p>;
        }

        return (
            <div className="service-main" style={{ marginTop: '62px' }}>
                <div className="tasks-title-div" style={(this.state.currentOpen === true) ? { height: '456px' } : { height: '148px' }}>
                    <h3 className="tasks-home-title">MY TASKS</h3>
                    <img src={calendar} alt="calendar-icon" className="service-calendar" />
                    <div className="notification">1</div>
                    <p onClick={() => this.showHideTasks(1)} className="date-tag current-date">27 JUNE, 2018</p>
                    {/* client data */}
                    <div className="client-data-ul" style={(this.state.currentOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        {this.props.client.map((item) => this.renderCurrentClientList(item))}
                    </div>
                </div>
                {/* second tab */}
                <div className="second date-tasks" style={(this.state.secondOpen === true) ? { height: '379px' } : { height: '70px' }}>
                    <p onClick={() => this.showHideTasks(2)} className="date-tag">28 JUNE, 2018</p>
                    <div className="client-data-ul-general" style={(this.state.secondOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        {this.props.client.map((item) => this.renderSecondClientList(item))}
                    </div>
                </div>
                {/* third tab */}
                <div className="third date-tasks" style={(this.state.thirdOpen === true) ? { height: '379px' } : { height: '70px' }}>
                    <p onClick={() => this.showHideTasks(3)} className="date-tag">29 JUNE, 2018</p>
                    <div className="client-data-ul-general" style={(this.state.thirdOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        {this.props.client.map((item) => this.renderThirdClientList(item))}
                    </div>
                </div>
                {/* fourth tab */}
                <div className="fourth date-tasks" style={(this.state.fourthOpen === true) ? { height: '379px' } : { height: '70px' }}>
                    <p onClick={() => this.showHideTasks(4)} className="date-tag">30 JUNE, 2018</p>
                    <div className="client-data-ul-general" style={(this.state.fourthOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        {this.props.client.map((item) => this.renderFourthClientList(item))}
                    </div>
                </div>
                {/* fifth tab */}
                <div className="fifth date-tasks" style={(this.state.fifthOpen === true) ? { height: '379px' } : { height: '70px' }}>
                    <p onClick={() => this.showHideTasks(5)} className="date-tag">1 JULY, 2018</p>
                    <div className="client-data-ul-general" style={(this.state.fifthOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        {this.props.client.map((item) => this.renderFifthClientList(item))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        client: state.client.clientData
    };
}

export default connect(mapStateToProps, { fetchClientData })(ServiceLanding);