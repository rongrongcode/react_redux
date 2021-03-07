import {Component} from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'

// 創建一個action
const addPerson = personObj => ({type:'addPerson',data:personObj})
//創建reducers
const init = [{id:'001',name:'小明',age:18}];
export function personfn(preState=init,action){
    const {type,data} = action;
    switch (type){
        case 'addPerson':
            return [data,...preState]
        default:
            return preState
    }
}
class Persons extends Component {
    addPerson = () => {
        if(this.nameNode.value.trim !== '' && this.ageNode.value !==""){
            const personObj = {id:nanoid(),name:this.nameNode.value,age:this.ageNode.value}
            this.props.jia(personObj)
            this.nameNode.value=""
            this.ageNode.value=""
        }
    }
    render() {
      return (
        <div>
          <h2>我是person組件</h2>
          <h2>{ this.props.persons.length}</h2>
          <h2>{ this.props.he}</h2>
          <input ref={c=>this.nameNode = c} type="text"/>
          <input ref={c=>this.ageNode = c} type="text"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
               {
                this.props.persons.map((n)=>{
                    return <li key={n.id}>{n.name}--{n.age}</li>
                })
               } 
          </ul>
        </div>
      )
    }
}
const mapStateToProps = state => ({persons:state.rens,he:state.he})
const mapDispatchToProps = dispatch => ({jia:(data)=>{dispatch(addPerson(data))}})
//創建並暴露一個Count容器
export default connect(mapStateToProps,mapDispatchToProps)(Persons)