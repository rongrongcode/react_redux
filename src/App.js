import React, { Component } from 'react'
import store from './redux/store.js'
import Count from './containers/count'
import Persons from './containers/person'

export default class App extends Component{
  render(){
   
    return (
      <div>
        <Count store={store}/>
        <Persons store={store} />
      </div> 
    )
  }
}