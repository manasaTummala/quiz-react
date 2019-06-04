import React from 'react';
import './App.css';

export class Questions extends React.Component {
  handleClick = () => {
    let selectedElement = document.querySelector('input[name = choices]:checked');
    let currentQuestion = parseInt(this.props.match.params.id);
    this.props.updateResultArray(currentQuestion, selectedElement.value === this.props.defaultQuestions[currentQuestion].correct);
    // answersArray[currentQuestion] = (selectedElement.value === this.props.defaultQuestions[currentQuestion].correct);
    selectedElement.checked = false; // clear sselection
    // move to next question
    if (currentQuestion >= this.props.defaultQuestions.length - 1) {
      this.props.history.push('/result');
    } else {
      this.props.history.push(`/questions/${currentQuestion+1}`);
    }
  }

  render() {
    const currentQuestion = parseInt(this.props.match.params.id);
    return (
      <div>
        <h1>What Do You Know?</h1>
        <div id="quiz">
            <h2 id="question">{this.props.defaultQuestions[currentQuestion].question}</h2>
            <div>
              <input type="radio" name="choices" value="A" />
              <span id="choiceA">{this.props.defaultQuestions[currentQuestion].choiceA}</span>
            </div>
            <div>
              <input type="radio" name="choices" value="B" />
              <span id="choiceB">{this.props.defaultQuestions[currentQuestion].choiceB}</span>
            </div>
            <div>
              <input type="radio" name="choices" value="C" />
              <span id="choiceC">{this.props.defaultQuestions[currentQuestion].choiceC}</span>
            </div>
            <div>
              <input type="radio" name="choices" value="D" />
              <span id="choiceD">{this.props.defaultQuestions[currentQuestion].choiceD}</span>
            </div>
            <button id="submit" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
};
