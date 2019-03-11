import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

// import App from './Views/App';
import { Routers } from './Routers';
import { DataStore } from './Store/DataStore';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const APP = () => {
    return (
        <LocaleProvider locale={zhCN}>
            <Provider
                dataStore={new DataStore()}
            >
                <Routers />
            </Provider>
        </LocaleProvider>
    );
};

ReactDOM.render(<APP />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
