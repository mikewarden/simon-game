import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
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
        <Box id={1} bColor="#FF2E0B" bRadius="64px 0px 0px 0px"/>
        <Box id={2} bColor="#0DFF1D" bRadius="0px 64px 0px 0px"/>
        <Box id={3} bColor="#E8B900" bRadius="0px 0px 0px 64px"/>
        <Box id={4} bColor="#007AE8" bRadius="0px 0px 64px 0px"/>
        </div>
      </div>
    )
  }
}

const Box = (props) => {
  return (
    <div onClick={() => console.log("trigger")} className="boxStyles" style={{backgroundColor: props.bColor, borderRadius: props.bRadius}}> <div className="id-div">{props.id}</div>
    </div>

  )
}

export default App;
