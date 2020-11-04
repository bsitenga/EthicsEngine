import React, { useState } from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quiz() {
  const [questionCount, setQuestionCount] = useState(0);
  const [allAnswers, setAllAnswers] = useState({ util: 0, action: 0, known: 0, pedestrians: 0 });
  const [answers, setAnswers] = useState([0, 0]);
  const [finished, setFinished] = useState(false);

  const scenarios = require('./data/Scenarios.js');
  const measurements = require('./data/Measurements.js');

  const chooseAnswer = (numQuestion, side) => {
    let answerCopy = answers.slice();
    if (side === 'left') {
      answerCopy[numQuestion - 1] = 1;
    } else {
      answerCopy[numQuestion - 1] = 2;
    }
    setAnswers(answerCopy);
  }

  const nextQuestion = () => {
    let answerCopy = answers.slice();
    let allAnswerCopy = Object.assign({}, allAnswers)

    for (let key in allAnswerCopy) {
      if (answerCopy[0] === 1) {
        allAnswerCopy[key] += measurements[questionCount - 1].Left[key];
      } else {
        allAnswerCopy[key] += measurements[questionCount - 1].Right[key];
      }
      if (answerCopy[1] === 1) {
        allAnswerCopy[key] += measurements[questionCount - 1].Left[key];
      } else {
        allAnswerCopy[key] += measurements[questionCount - 1].Right[key];
      }
    }

    if (questionCount === 10) {
      setFinished(true);
      console.log("submitted");
    }

    setAllAnswers(allAnswerCopy);
    setAnswers([0, 0]);
    setQuestionCount(questionCount + 1)
  }

  return (
    <div className="quiz-container">
      {finished ? <Results /> :<Container>
        <Row>
          <Col>
            {questionCount === 0 ?
              <div className="instructions" >
                <h4>Scenario</h4>
                <p>
                  Suppose that an autonomous vehicle (AV) is driving in heavy rain when the AV suddenly detects two groups of pedestrians in its path.
                  Sadly, it's unable to stop in time due to the low visibility and slippery roads. It must make a choice between staying its course or swerving into the other
                  group of pedestrians. The scenario may also involve choosing between saving the pedestrians or the passengers. Either way,
                  the AV must decide between two unfortunate outcomes. The purpose of this quiz is to gather your opinion on which outcomes the AV should choose.
                </p>
                <h4>Instructions</h4>
                <p>
                  You will first answer each question as an impartial judge. Imagine the scenario as if you're watching safely from a nearby sidewalk, and can control what decision the car will make.
                  Next, you'll indicate whether or not your decision would change if you were a passenger of the car. After answering ten questions, you'll
                  receive an analytics report that compares your decisions to those of all other participants.
                </p>
                <h4>What's Being Measured?</h4>
                <p>
                  Action vs. Inaction - It's important to make the distinction between staying the course and swerving. By swerving, you're taking action by driving into the other pedestrians.
                  By staying in your lane, you're choosing inaction by driving into the pedestrians already in your way.
                </p>
                <p>
                  Saving More vs. Saving Less - This will measure how heavily you prefer saving more lives over all else.
                </p>
                <p>
                  Pedestrians vs. Passengers - Some scenarios will feature a choice between hitting a group of pedestrians or sacrificing the passengers by hitting a barrier. These scenarios will
                  measure your preference for which group you'd rather save.
                </p>
                <p>
                  Known vs. Unknown - Other scenarios will feature a choice between hitting a known number of pedestrians, or moving into an opposite lane with an unknown number of pedestrians, if any.
                </p>
                <button onClick={() => setQuestionCount(1)} >Start Quiz</button>
              </div>
              :
              <div className="question">
                <h4>Question {questionCount}/10</h4>
                <p className="extra-info" >Scenario Info</p>
                <Row>
                  <Col>
                    <h6>As an impartial observer, should the car</h6>
                  </Col>
                </Row>
                <Row className="first-question" >
                  <Col onClick={() => chooseAnswer(1, "left")} xs={5} className={answers[0] === 1 ? "active answer" : "answer"} >
                    <p>{scenarios[questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>or</p>
                  </Col>
                  <Col onClick={() => chooseAnswer(1, "right")} xs={5} className={answers[0] === 2 ? "active answer" : "answer"} >
                    <p>{scenarios[questionCount - 1].Right}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>As a passenger, should the car</h6>
                  </Col>
                </Row>
                <Row className="second-question">
                  <Col onClick={() => chooseAnswer(2, "left")} xs={5} className={answers[1] === 1 ? "active answer" : "answer"} >
                    <p>{scenarios[questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>or</p>
                  </Col>
                  <Col onClick={() => chooseAnswer(2, "right")} xs={5} className={answers[1] === 2 ? "active answer" : "answer"} >
                    <p>{scenarios[questionCount - 1].Right}</p>
                  </Col>
                </Row>
                {questionCount !== 10 ?
                  <button onClick={() => nextQuestion()} >Next</button>
                  :
                  <button onClick={() => nextQuestion()}>See Results</button>}
              </div>}
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default Quiz;