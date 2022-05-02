import React from 'react';
import { Alert } from 'antd';

const Alerts = (message, description, type) => {
    return(
        <Alert
            message={message}
            description={description}
            type={type}
            showIcon
            closable
        />
    )
}

export default Alerts