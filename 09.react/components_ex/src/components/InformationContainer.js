import React, {Component} from 'react'
import InformationArea from './InformationArea'
class InformationContainer extends Component {
    constructor(){
    super();
    this.state = {
        contacts: [        
            {
                tel:'1111-1111',
                mail:'taro@example.com',
                organization:'AAA Company',
                account:'taro@facebook'
            }
        ]
        }
    }

    render() {
        return (
            <InformationArea {...this.state.contacts[0]}></InformationArea>
        )
    }
}

export default InformationContainer