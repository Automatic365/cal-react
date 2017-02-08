import {Component} from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }


    increment() {
      this.setState({count: this.state.count + this.props.increment});
    }

    render() {
        return <button onClick={this.increment.bind(this)}>{this.state.count}</button>
    }


}

export default Counter;
