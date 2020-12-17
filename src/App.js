import logo from './logo.svg';
// import {React,useState} from 'react'
import './App.css';
import { Component } from 'react'
import Profile from './compoonent/profile/Profile'
import Bio from './compoonent/profile/Bio'
import Skill from './compoonent/profile/Skill';
// import Counter from './compoonent/Counter'


class App extends Component{
  state = {
    count: 4
 }
  
  intervalID = null;


  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }
  setTimer = () => {
    if (this.state.count > 0 && !this.intervalID) {
     this.intervalID= setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert('Timer finished')
            clearInterval(this.intervalID)
            this.intervalID = null;
          }
        });
      },1000)
    }
  }

  stopTimer = () => {
    if (this.intervalID) {
      clearInterval(this.intervalID)
      this.intervalID =null
    }
  }

  resettimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalID)
    this.intervalID=null
  }
  render() {
  
    return (
      <div className="App">
        <h1 className='Heading'>Simple timer</h1>
        <div className='container'>
          <button className='btn' onClick={this.decrease}>-</button>
          <span>{ this.state.count}</span>
          <button className='btn' onClick={this.increase}>+</button>
        </div>
        <div className="container">
          <button className='btn' onClick= {this.setTimer }>start</button>
          <button className='btn'onClick ={this.stopTimer}>stop</button>
          <button className='btn' onClick={this.resettimer}>reset</button>
          
        </div>
           
        </div>
    );
  
  }
}
export default App;

