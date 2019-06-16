class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange (e) {
    this.setState ({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" autoComplete="off" onChange={this.textChange}></input>
        <h3>Your current input: {this.state.input}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));