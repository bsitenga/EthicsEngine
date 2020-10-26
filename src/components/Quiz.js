import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quiz() {
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState([-1, -1]);
  const [util, setUtil] = useState([0, 0]);
  const [action, setAction] = useState([0, 0]);
  const [known, setKnown] = useState([0, 0]);
  const [pedestrians, setPedestrians] = useState([0, 0]);

  const scenarios = require('./data/Scenarios.js')

  const chooseAnswer = (numQuestion, side) => {
    
  }

  return (
    <div className="quiz-container">
      <Container>
        <Row>
          <Col>
            {questionCount === 0 ?
              <div className="instructions" >
                <h4>Scenario</h4>
                <p>
                  Suppose that an automous vehicle (AV) is driving in heavy rain when the AV suddenly detects two groups of pedestrians in its path.
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
                  Action vs. Inaction - It's important to make the distinction between staying the course and swerving. By swerving, you're taking action by driving into the other pedestirans.
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
                  Known vs. Unknown - Other scenarios will feature a choice between hitting a known number of pedestrians, or moving into an opposite lane with an unkown number of pedestrians, if any.
                </p>
                <button onClick={() => setQuestionCount(1)} >Start Quiz</button>
              </div>
              :
              <div className="question">
                <h4>Question {questionCount}/10</h4>
                <p className="extra-info" >Scenario Info</p>
                <Row>
                  <Col>
                    <h6>As a bystander, should the car</h6>
                  </Col>
                </Row>
                <Row className="first-question" >
                  <Col xs={5} className="answer" >
                    <p>{scenarios[questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>or</p>
                  </Col>
                  <Col xs={5} className="answer" >
                    <p>{scenarios[questionCount - 1].Right}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>As a passenger, should the car</h6>
                  </Col>
                </Row>
                <Row className="second-question">
                  <Col xs={5} className="answer" >
                    <p>{scenarios[questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>or</p>
                  </Col>
                  <Col xs={5} className="answer" >
                    <p>{scenarios[questionCount - 1].Right}</p>
                  </Col>
                </Row>
                {questionCount !== 10 ?
                  <button onClick={() => setQuestionCount(questionCount + 1)} >Next</button>
                  :
                  <Link to="/results"><button onClick={() => console.log("submitted!")}>See Results</button></Link>}
              </div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quiz;