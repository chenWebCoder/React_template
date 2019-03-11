import { Button } from 'antd';
import React, { Component } from 'react';
import logo from '../../Statics/logo.svg';
import { inject, observer } from 'mobx-react';
import './Home.scss';

@inject('dataStore')
@observer
class Home extends Component {
    render() {
        const { dataStore } = this.props;
        return (
            <div styleName="App">
                <header styleName="App-header">
                    <img src={logo} styleName="App-logo" alt="logo" />
                    <p>Welcome to React-template.</p>

                    <p>value: {dataStore.number}</p>

                    <p>
                        <Button type="primary" styleName='btn' onClick={dataStore.decrease}>decrease</Button>
                        <Button type="primary" styleName='btn' onClick={dataStore.increase}>increase</Button>
                    </p>
                </header>
            </div>
        );
    }
}

export { Home };
