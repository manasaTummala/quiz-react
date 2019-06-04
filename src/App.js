import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Result } from './result';
import { Question } from './question';
import { Questions } from './questions';

var defaultQuestions = [
    {
        question: "Where are the three smallest bones in the human body?",
        choiceA: "middle ear",
        choiceB: "nose",
        choiceC: "toes",
        choiceD: "eyes",
        correct: "A"
    },
    {
        question: "What is the most abundant element in the Universe?",
        choiceA: "Helium",
        choiceB: "Oxygen",
        choiceC: "Lithium",
        choiceD: "Hydrogen",
        correct: "D"
    },
    {
        question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
        choiceA: "8 days",
        choiceB: "8 seconds",
        choiceC: "8 minutes",
        choiceD: "8 hours",
        correct: "C"
    },
    {
        question: "What is 10/2?",
        choiceA: "5",
        choiceB: "2",
        choiceC: "8",
        choiceD: "9",
        correct: "A"
    },
    {
        question: "Which planet has the most moons?",
        choiceA: "Saturn",
        choiceB: "Mars",
        choiceC: "Jupiter",
        choiceD: "Uranus",
        correct: "C"
    }
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultQuestions,
      answersArray: []
    }
  }
  updateResultArray = (id, result) => {
    this.setState(prevState => {
      let answersArray = [...prevState.answersArray];
      answersArray[id] = result;
      return {answersArray: answersArray};
    });
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/questions/:id" render={(props) =>
          <Questions {...props} defaultQuestions={this.state.defaultQuestions} updateResultArray={this.updateResultArray} answersArray={this.state.answersArray} />}
        />
        <Route path="/result" render={() => (
          <Result answersArray={this.state.answersArray}/>
        )} />
       <Route path="/question" render={() => (
          <Question />
       )} />
     </React.Fragment>
   );
 }

}
