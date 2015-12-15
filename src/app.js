import './app.css!';

import React from 'react';
import {transform as transformService} from './shorter-service';

export default class Root extends React.Component {

  state = {
    max: 140,
    input: 'Imagine you want to write a tweet.  Unfortunately, one hundred and forty characters is too little.  Here is one very stupid way to shorten your tweets. High five #angular2',
    output: ''
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.setState({output: transformService(this.state.input, this.state.max)});
  }

  onInputChange (e) {
    this.setState({
      input: e.target.value,
      output: transformService(e.target.value, this.state.max)
    });
  }

  onMaxChange (e) {
    this.setState({
      max: e.target.value,
      output: transformService(this.state.input, e.target.value)
    });
  }

  render () {
    return (
      <div>
        <h1>{transformService('Shorten your too large tweets')}</h1>
        <h2>Max</h2>
        <input type='number' className='form-control' onChange={this.onMaxChange.bind(this)} value={this.state.max} />
        <h2>Input {this.state.input.length}</h2>
        <textarea className='form-control' rows='10' onChange={this.onInputChange.bind(this)} value={this.state.input}></textarea>
        <h2>Output {this.state.output.length}</h2>
        <textarea className='form-control' readOnly rows='10' value={this.state.output}></textarea>
      </div>
    );
  }
}
