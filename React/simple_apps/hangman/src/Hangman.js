import React, { Component } from "react";
import "./Hangman.css";
import {randomWord} from './words';
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";


class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    if(this.state.nWrong <= this.props.maxWrong){
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
          value={ltr}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr)}
          key={ltr}
        >
          {ltr}
        </button>
      ));
    }else return "You Lost. The correct word was " + this.state.answer;
  }
  //This will restart the game when clicked by setting the state
  restartGame = () => {
    this.setState({
      nWrong: 0, guessed: new Set(), answer: randomWord()
    })
  }

  /** render: render game */
  render() {
    let image = this.state.nWrong <= this.props.maxWrong ? (
       <img src={this.props.images[this.state.nWrong]} alt={`Wrong guesses:${this.state.nWrong}`}/>
    ) : (
        <img src={this.props.images[6]} alt={`Wrong guesses:${this.state.nWrong}`}/>
    )
    return (
      <div className='Hangman' >
         <h1 style={{marginTop:'1rem'}}>Hangman</h1>
         {/* <img src={this.props.images[this.state.nWrong]} alt={`Wrong guesses:${this.state.nWrong}`}/> */}
         {image}
         <br/>
         <p>Wrong guesses: {this.state.nWrong}</p>
         <p className='Hangman-word'>{this.guessedWord()}</p>
         <p className='Hangman-btns'>{this.generateButtons()}</p>
         <div className = 'Restart' onClick = {this.restartGame}>Restart</div>
      </div>
    );
  }
}

export default Hangman;
