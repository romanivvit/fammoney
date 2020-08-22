import React, { Component } from 'react';
import { Tabs } from 'antd';
import MainContent from '../../../templates/MainContent';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import './WelcomePage.css';

const { TabPane } = Tabs;

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            activeTab: '1',
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(key) {
        this.setState({
            // eslint-disable-next-line react/no-unused-state
            activeTab: key,
        });
    }

    render() {
        const {
            activeTab, signup, login,
        } = this.props;

        return (
            <MainContent>
                <div className="authWrapper">
                    <div className="authImgWrapper">
                        <img
                            src="../../../../auth.png"
                            alt=""
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                            }}
                        />
                    </div>
                    <div className="authFormWrapper">
                        <div className="authForm">
                            <Tabs defaultActiveKey={activeTab} onChange={this.changeTab}>
                                <TabPane tab="Login" key="1">
                                    <h2>Login</h2>
                                    <LoginForm onSubmit={login} />
                                </TabPane>
                                <TabPane tab="Register" key="2">
                                    <RegisterForm onSubmit={signup} />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </MainContent>
        );
    }
}

export default WelcomePage;
