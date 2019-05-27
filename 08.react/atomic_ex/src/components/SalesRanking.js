// import React,{Component} from 'react'
// import SectionTitle from './SectionTitle'
// import ProductList from './ProductList'

// class SalesRanking extends Component {
//     render() {
//         return (
//             <div>
//                 <SectionTitle label="매출 순위"/>
//                 <ProductList items={this.props.items}/>
//             </div>
//         )
//     }
// }

// export default SalesRanking


import React,{Component} from 'react'
import ProductList from './ProductList'
import UserList from './UserList'
import RegionList from './RegionList'
import TabPanel from './TabPanel'

class SalesRanking extends Component {

    constructor(props) {
        super(props);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.state = {
            index: 0
        }
        console.log(this.props)
    }

    handleChangeIndex(index) {
    //console.log(index)
        this.setState({ index })
    }

    render() {
        return (
        <div>
            <TabPanel changeIndex={this.handleChangeIndex} current={this.state.index}>
                <ProductList items={this.props.items}/>
                <UserList users = {this.props.users}/>
                <RegionList regions= {this.props.regions}/>
            </TabPanel>
        </div>
        )
    }
}

export default SalesRanking