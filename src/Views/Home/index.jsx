import React, { Component } from 'react';
import logo from '../../Statics/logo.svg';
import { Button } from 'antd';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div styleName="App">
                <header styleName="App-header">
                    <img src={logo} styleName="App-logo" alt="logo" />
                    <p>Welcome to React-template.</p>

                    <p>value: 0</p>

                    <p>
                        <Button type="primary" styleName='btn'>decrease</Button>
                        <Button type="primary" styleName='btn'>increase</Button>
                    </p>
                </header>
            </div>
        );
    }
}

export { Home };
