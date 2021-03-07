
import react,{Component} from 'react'
import {connect} from 'react-redux'

import {createIncrement} from '../../redux/action'

class Count extends Component {

    handleState = () => {
      this.props.jia(100)
    }
    render() {
        console.log('Count',this.props)
      return (
        <div>
          <div>{this.props.count}</div>
          <h2>{this.props.rens.length}</h2>
          <button onClick={this.handleState}>click</button>
          <button onClick={this.handleasync}>async</button>
        </div>
      )
    }
}

const mapStateToProps = state => ({count:state.he,rens:state.rens})

const mapDispatchToProps = dispatch => ({jia:(data)=>{dispatch(createIncrement(data))}})

//創建並暴露一個Count組件
export default  connect(mapStateToProps,mapDispatchToProps)(Count)

