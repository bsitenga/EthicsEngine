import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quiz() {
  const [questionCount, setQuestionCount] = useState(0);

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
                  Sadly, it's unable to stop due to the low visibility and slippery roads. It must make a choice between staying its course or swerving into the other
                  group of pedestrians. The scenario may also involve choosing between saving the pedestrians or the passengers. Either way,
                  the AV must decide between two unfortunate outcomes. The purpose of this quiz is to gather your opinion on which outcomes the AV should choose.
                </p>
                <h4>Instructions</h4>
                <p>
                  You will first answer each question as an impartial judge. Imagine the scenario as if you're watching safely from a nearby sidewalk, and can control the car's decision.
                  Next, you'll indicate whether or not your decision would change if you were a passenger of the car. After answering ten questions, you'll
                  receive an analytics report that compares your decisions to those of all other participants.
                </p>
                <button onClick={() => setQuestionCount(1)} >Start Quiz</button>
              </div>
              :
              <div>
                Question {questionCount} / 10
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