import React, { Component } from 'react';
import MainContent from '../../../templates/MainTemplate';
import LoginForm from './LoginForm';
import '../WelcomePage/WelcomePage.css';

class Login extends Component {
    render() {
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
                        <h2>Login</h2>
                        <LoginForm />
                    </div>
                </div>
            </MainContent>
        );
    }
}

export default Login;
