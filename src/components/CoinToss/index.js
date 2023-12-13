import {Component} from 'react'
import './index.css'

// Write your code here

class CoinToss extends Component {
  state = {result: null, total: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({result: tossResult})
    console.log(tossResult)

    this.setState(prevState => ({
      total: prevState.total + 1,
    }))

    this.setState(prevState => ({
      heads:
        prevState.result === 0 && !(prevState.result === null)
          ? prevState.heads + 1
          : prevState.heads,
    }))

    this.setState(prevState => ({
      tails:
        prevState.result === 1 && !(prevState.result === null)
          ? prevState.tails + 1
          : prevState.tails,
    }))
  }

  render() {
    const {result, total, heads, tails} = this.state
    const imgUrl =
      result === 0 || result === null
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-card">
        <div className="coin-toss-game-card">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="coin-description">Heads (or) Tails</p>
          <img className="coin-img" src={imgUrl} alt="toss result" />
          <button onClick={this.tossCoin} className="coin-btn" type="button">
            Toss Coin
          </button>
          <div className="coin-result-card">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
