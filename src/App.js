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
        <Box id={1} bColor="#FF2E0B"/>
        <Box id={2} bColor="#0DFF1D"/>
        <Box id={3} bColor="#E8B900"/>
        <Box id={4} bColor="#007AE8"/>
      </div>
    )
  }
}

const Box = (props) => {
  return (
    <div style={{backgroundColor: props.bColor}}>box {props.id}</div>
  )
}

export default App;
