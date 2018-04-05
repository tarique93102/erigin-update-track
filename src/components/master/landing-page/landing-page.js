import React, { Component } from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, CartesianGrid, Tooltip } from 'recharts';
import calendar from '../../../assets/icons/calendar.png';
import arrow from '../../../assets/icons/arrow.png';
import { Link } from 'react-router-dom';
import './landing-page.css';

// sales mock data
var dataSales = [
    {
        name: 'MONDAY',
        value: 6
    },
    {
        name: 'TUESDAY',
        value: 7
    },
    {
        name: 'WEDNESDAY',
        value: 4
    },
    {
        name: 'THURSDAY',
        value: 3
    },
    {
        name: 'FRIDAY',
        value: 1
    },
    {
        name: 'SATURDAY',
        value: 6
    },
    {
        name: 'SUNDAY',
        value: 5
    }
];

// query mock data
var dataQueries = [
    {
        name: 'MONDAY',
        value: 20
    },
    {
        name: 'TUESDAY',
        value: 12
    },
    {
        name: 'WEDNESDAY',
        value: 30
    },
    {
        name: 'THURSDAY',
        value: 25
    },
    {
        name: 'FRIDAY',
        value: 40
    },
    {
        name: 'SATURDAY',
        value: 6
    },
    {
        name: 'SUNDAY',
        value: 11
    }
];

var data = dataSales;

class MasterLanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scheduleOpen: true,
            customerOpen: false,
            employeeOpen: false,
            activeSales: true
        };

        this.props.onTitleChange('WELCOME');
        this.props.onHideBack();
    }

    handleTabOpen(value) {
        switch (value) {
            case 1: this.setState({
                scheduleOpen: true,
                customerOpen: false,
                employeeOpen: false
            });
                break;
            case 2: this.setState({
                scheduleOpen: false,
                customerOpen: true,
                employeeOpen: false
            });
                break;
            case 3: this.setState({
                scheduleOpen: false,
                customerOpen: false,
                employeeOpen: true
            });
                break;
            default:
        }
    }

    handleMap(value) {
        if (value === 'sales') {
            this.setState({
                activeSales: true
            });

            data = dataSales;
        } else {
            this.setState({
                activeSales: false
            });

            data = dataQueries;
        }
    }

    render() {
        return (
            <div>
                <div className="master-home-main-div">
                    <p className="master-graph-title">INSIGHTS</p>
                    <ResponsiveContainer width="100%" height="60%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <XAxis axisLine={false} dataKey="name" />
                            <YAxis axisLine={false} dataKey="value" />
                            <CartesianGrid vertical={false} />
                            {/* <Tooltip /> */}
                            <Area type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={4} fill="#f2f2f2" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="map-toggle-group">
                        <button onClick={() => this.handleMap('sales')} style={(this.state.activeSales === true) ? { border: "2px solid white", fontSize: "20px" } : { border: "none", fontSize: "18px" }} className="map-toggle">SALES/WEEK</button>
                        <button onClick={() => this.handleMap('query')} style={(this.state.activeSales === false) ? { border: "2px solid white", fontSize: "20px" } : { border: "none", fontSize: "18px" }} className="map-toggle">QUERY/WEEK</button>
                    </div>
                </div>
                <div style={(this.state.scheduleOpen) ? { height: '210px' } : { height: '55px' }} className="schedule-board">
                    <p className="board-title" onClick={() => this.handleTabOpen(1)}>SCHEDULE OF THE DAY</p>
                    <img src={calendar} alt="calendar" className="master-landing-calendar" />
                    <div className="master-schedule-ul" style={(this.state.scheduleOpen === true) ? { display: 'block' } : { display: 'none' }}>
                        <div className="master-schedule-li">
                            <div className="status-box-master" style={{ background: 'red' }}></div>
                            <p className="schedule-master-name">RAVI KISHAN</p>
                            <p className="schedule-master-time">9:30 AM</p>
                            <Link to={`${this.props.match.url}/schedule`}>
                                <img src={arrow} alt="arrow" className="forward-arrow" />
                            </Link>
                        </div>
                        <div className="master-schedule-li">
                            <div className="status-box-master" style={{ background: 'green' }}></div>
                            <p className="schedule-master-name">GAURAV MOHANTY</p>
                            <p className="schedule-master-time">11:15 AM</p>
                            <Link to={`${this.props.match.url}/schedule`}>
                                <img src={arrow} alt="arrow" className="forward-arrow" />
                            </Link>
                        </div>
                        <div className="master-schedule-li">
                            <div className="status-box-master" style={{ background: 'yellow' }}></div>
                            <p className="schedule-master-name">JANPATH HOTEL</p>
                            <p className="schedule-master-time">5:00 PM</p>
                            <Link to={`${this.props.match.url}/schedule`}>
                                <img src={arrow} alt="arrow" className="forward-arrow" />
                            </Link>
                        </div>
                        <div className="master-schedule-li">
                            <div className="status-box-master" style={{ background: 'red' }}></div>
                            <p className="schedule-master-name">ESPIRITTO HOTEL</p>
                            <p className="schedule-master-time">7:00 PM</p>
                            <Link to={`${this.props.match.url}/schedule`}>
                                <img src={arrow} alt="arrow" className="forward-arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={(this.state.customerOpen) ? { height: '210px' } : { height: '55px' }} className="customer-board">
                    <p className="board-title" onClick={() => this.handleTabOpen(2)}>CUSTOMER PROFILE</p>
                </div>
                <div style={(this.state.employeeOpen) ? { height: '210px' } : { height: '55px' }} className="employee-board">
                    <p className="board-title" onClick={() => this.handleTabOpen(3)}>EMPLOYEE INFORMATION</p>
                </div>
            </div>
        );
    }
}

export default MasterLanding;