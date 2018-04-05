import React, { Component } from 'react';
import calendar from '../../../assets/icons/calendar.png';
import './employee-detail.css';

class EmployeeDetail extends Component {
    constructor(props) {
        super(props);

        this.props.onShowBack();
        this.props.onTitleChange('SCHEDULE');
    }

    render() {
        return (
            <div className="schedule-component-main">
                <div style={{ position: "relative" }}>
                    <p className="mainTitle">SCHEDULE OF THE DAY</p>
                    <img src={calendar} alt="calendar" className="schedule-calendar" />
                </div>
                <div className="schedule-service-section">
                    <div className="status-box-employee" style={{ background: 'red' }}></div>
                    <p className="schedule-client-name">RAVI KISHAN</p>
                    <p className="schedule-client-time">9:30 AM</p>
                    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <p className="schedule-client-data">SERVICED BY: RAJAN</p>
                        <p className="schedule-client-data">SERVICE TYPE: B2C</p>
                    </div>
                    <p className="schedule-client-data">23 CROSS, 5TH MAIN ROAD, 6TH STAGE</p>
                    <p className="schedule-client-data">KSRTC BUS STAND, JAYANAGAR</p>
                    <p className="schedule-client-data">BANGALORE - 500005</p>
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;