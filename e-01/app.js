class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0,
  }

  handleClick1 = () => {
    this.setState({
      number1: this.state.number1 + 1
    })
  } 
  handleClick3 = () => {
    this.setState(()=>{
      return {
      number3: this.state.number3 +3 
    }})
    this.setState((prevState)=>{
      return {
      number3: prevState.number3 +3 
    }})
  }


  render() {
    // console.log(this.state.number2 + "w render");
    return (
      <div>
        <button onClick={this.handleClick1}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick3}>Podbij o 6</button>
        <h1>{this.state.number3}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Clicker />, document.getElementById('root'))

