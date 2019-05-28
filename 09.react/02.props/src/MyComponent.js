import React from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends React.Component {

    static defaultProps = {
        name: 'no name'
    };

    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <div>
                안녕하세요 {this.props.name} 입니다.
            </div>
        );
    }
}
