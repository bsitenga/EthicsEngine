import React, { useState } from 'react';
import Instructions from './Instructions.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quiz() {
  const [questionCount, setQuestionCount] = useState(0);

  const arry = ["hi", 'hello'];

  return (
    <div className="quiz-container">
      <Container>
        <Row>
          <Col>
            {questionCount === 0 ? <div>
              Instructions
              <button onClick={() => setQuestionCount(1)} >Ready</button>
            </div> : <div>
              Question {arry[questionCount - 1]}
              <button onClick={() => setQuestionCount(questionCount + 1)} >Next</button>
              </div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quiz;