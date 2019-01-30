import React, { Component } from 'react';
import BagelDisplay from './components/BagelDisplay/BagelDisplay';
import BagelForm from './components/BagelForm/BagelForm';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(params) {
    super(params);

    this.state= {
      bagels: []
    }

    this.updateBagels = this.updateBagels.bind(this);
    this.getBagels = this.getBagels.bind(this);
  }

  componentDidMount() {
    this.getBagels();
  }

  getBagels() {
    axios.get('/api/bagels')
    .then( response => {
      this.setState({
        bagels: response.data
      })
    })
  }

  updateBagels(newBagels) {
    this.setState({
      bagels: newBagels
    })
  }

  render() {
    const { bagels } = this.state;
    const allTheBagels = bagels.map((bagel,i) =>
        <BagelDisplay key={bagel.name+i} bagel={bagel}/>
      )

    return (
      <div className="App">
        
        <div className='container'>
          <h1>WpX10 Bagel Palooza</h1>
          <div className='bagelContainer'>
            {allTheBagels}
          </div>
        </div>
        
        <div className='container'>
          <h1>Add NEW Bagels</h1>
          <BagelForm updateBagels={this.updateBagels}/>
        </div>
      </div>
    );
  }
}

export default App;
