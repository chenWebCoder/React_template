/**
 * 下线提示 Modal
 */
import React from 'react';
import { Modal } from 'antd';

const expiredModal = () => {
    Modal.error({
        title: '下线提示',
        className: 'expired-modal-wrapper',
        maskClosable: false,
        okText: '确定',
        content: (
            <div>登录会话已过期，请重新登录...</div>
        ),
        onOk: () => {
            location.pathname = '/login';
        }
    });
};

export {
    expiredModal
};
