import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  //event parameter is accepting props.id as an argument below:
  handleClick = (id, event) => {
    console.log(id);
  }

  render() {
    //lightred: #FF8866
    //lightgreen #70FF8A
    //light yellow #E8D25A
    //lightblue #5A96E8
    return(
      <div id="App">
        <h1>Simon</h1>
        <div id="container">
        <Box handleClick={this.handleClick} id={1} bColor="#FF2E0B" bRadius="64px 0px 0px 0px"/>
        <Box handleClick={this.handleClick} id={2} bColor="#0DFF1D" bRadius="0px 64px 0px 0px"/>
        <Box handleClick={this.handleClick} id={3} bColor="#E8B900" bRadius="0px 0px 0px 64px"/>
        <Box handleClick={this.handleClick} id={4} bColor="#007AE8" bRadius="0px 0px 64px 0px"/>
        </div>
      </div>
    )
  }
}

//anonymous function is required to trigger handleClick.
//handleClick accepts props.id as an event argument above.
const Box = (props) => {
  return (
    <div onClick={(event)=> props.handleClick(props.id)} className="boxStyles" style={{backgroundColor: props.bColor, borderRadius: props.bRadius}}> <div className="id-div">{props.id}</div>
    </div>

  )
}

export default App;
