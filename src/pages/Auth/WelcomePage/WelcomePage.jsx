import React, { useState } from 'react';
import { Tabs } from 'antd';
import { func } from 'prop-types';
import MainContent from '../../../templates/MainTemplate';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import './WelcomePage.css';

const { TabPane } = Tabs;

function WelcomePage({ signup, login }) {
    const [activeTab, setActiveTab] = useState('1');

    const changeTab = (key) => {
        setActiveTab(key);
    };

    return (
        <MainContent footer={false}>
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
                        <Tabs defaultActiveKey={activeTab} onChange={changeTab}>
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

WelcomePage.propTypes = {
    signup: func.isRequired,
    login: func.isRequired,
};

export default WelcomePage;
