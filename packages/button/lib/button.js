'use strict';
import React from 'react';

class Button extends React.Component {

    render() {
        const { children } = this.props;
        return <div > {children} < /div>
    }
}

export default Button;
