import React, {Component} from 'react';

class Profile extends Component {
    constructor() {
    super();
    this.state = {
        name: 'Taro',
        data: {
            height: 170,
            weight: 65
        }
    };
    }

    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
            <dl>
            <dt>HEIGHT</dt>
                <dd>{this.state.data.height}</dd>
            <dt>WEIGHT</dt>
                <dd>{this.state.data.weight}</dd>
            </dl>
        </div>
        );
    }
}

export default Profile 
