import logo from './logo.svg';
import './App.css';
import Bulbasaur from './components/Bulbasaur/Bulbasaur';
import Charmander from './components/Charmander/Charmander';
import { Component } from 'react';

class App extends Component {

  state = {
    chp: 100,
    bhp: 100,
    status: 'Ready to fight...'
  }

  // Charmander Attacks
  handleScratch = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 9) {
      let damage = Math.floor(Math.random() * (20 - 5) + 5)
      if (this.state.bhp > damage) {
        this.setState({
          bhp: this.state.bhp - damage,
          status: `Bulbasaur lost ${damage} hp!`
        })
      } else {
        this.setState({
          bhp: 0,
          status: "Bulbasaur fainted"
        })
      }
    } else {
      this.setState({
        status: "Charmander's attack missed!"
      })
    }
  }
  handleEmber = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 8) {
      let damage = Math.floor(Math.random() * (25 - 5) + 5)
      if (this.state.bhp > damage) {
        this.setState({
          bhp: this.state.bhp - damage,
          status: `Bulbasaur lost ${damage} hp!`
        })
      } else {
        this.setState({
          bhp: 0,
          status: "Bulbasaur fainted"
        })
      }
    } else {
      this.setState({
        status: "Charmander's attack missed!"
      })
    }
  }
  handleFlamethrower = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 4) {
      let damage = Math.floor(Math.random() * (50 - 25) + 25)
      if (this.state.bhp > damage) {
        this.setState({
          bhp: this.state.bhp - damage,
          status: `Bulbasaur lost ${damage} hp!`
        })
      } else {
        this.setState({
          bhp: 0,
          status: "Bulbasaur fainted"
        })
      }
    } else {
      this.setState({
        status: "Charmander's attack missed!"
      })
    }
  }
  handleSlash = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 6) {
      let damage = Math.floor(Math.random() * (30 - 10) + 10)
      if (this.state.bhp > damage) {
        this.setState({
          bhp: this.state.bhp - damage,
          status: `Bulbasaur lost ${damage} hp!`
        })
      } else {
        this.setState({
          bhp: 0,
          status: "Bulbasaur fainted"
        })
      }
    } else {
      this.setState({
        status: "Charmander's attack missed!"
      })
    }
  }

  // Bulbasaur Attacks
  handleTackle = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 9) {
      console.log(hit)
      let damage = Math.floor(Math.random() * (20 - 5) + 5)
      if (this.state.chp > damage) {
        this.setState({
          chp: this.state.chp - damage,
          status: `Charmander lost ${damage} hp!`
        })
      } else {
        console.log(damage)
        this.setState({
          chp: 0,
          status: "Charmander fainted"
        })
      }
    } else {
      this.setState({
        status: "Bulbasaur's attack missed!"
      })
    }
  }
  handleVineWhip = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 8) {
      let damage = Math.floor(Math.random() * (25 - 5) + 5)
      if (this.state.chp > damage) {
        this.setState({
          chp: this.state.chp - damage,
          status: `Charmander lost ${damage} hp!`
        })
      } else {
        this.setState({
          chp: 0,
          status: "Charmander fainted"
        })
      }
    } else {
      this.setState({
        status: "Bulbasaur's attack missed!"
      })
    }
  }
  handleSeedBomb = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 4) {
      let damage = Math.floor(Math.random() * (50 - 25) + 25)
      if (this.state.chp > damage) {
        this.setState({
          chp: this.state.chp - damage,
          status: `Charmander lost ${damage} hp!`
        })
      } else {
        this.setState({
          chp: 0,
          status: "Charmander fainted"
        })
      }
    } else {
      this.setState({
        status: "Bulbasaur's attack missed!"
      })
    }
  }
  handleSludgeBomb = () => {
    let hit = Math.floor(Math.random() * 11)
    if (hit <= 6) {
      let damage = Math.floor(Math.random() * (30 - 10) + 10)
      if (this.state.chp > damage) {
        this.setState({
          chp: this.state.chp - damage,
          status: `Charmander lost ${damage} hp!`
        })
      } else {
        this.setState({
          chp: 0,
          status: "Charmander fainted"
        })
      }
    } else {
      this.setState({
        status: "Bulbasaur's attack missed!"
      })
    }
  }
  handleReset = () => {
    this.setState({
      bhp: 100,
      chp: 100,
      status: 'Ready to fight...'
    })
  }


  render() {
    return (
      <div className="App">
        <Charmander 
        chp={this.state.chp}
        handleScratch={this.handleScratch}
        handleEmber={this.handleEmber}
        handleFlamethrower={this.handleFlamethrower}
        handleSlash={this.handleSlash}/>
        <div className="break">
        <h1>{this.state.status}</h1>
        <button className='reset' onClick={this.handleReset}>Reset</button>
        </div>
        <Bulbasaur 
        bhp={this.state.bhp}
        handleTackle={this.handleTackle}
        handleVineWhip={this.handleVineWhip}
        handleSeedBomb={this.handleSeedBomb}
        handleSludgeBomb={this.handleSludgeBomb}/>
        <p>Each attack has a different chance of hitting with a higher upside. Highest chance to hit is top left, highest damage is bottom left</p>
      </div>
    );
  }
}

export default App;
