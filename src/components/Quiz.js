import React, { useState } from 'react';
import Results from './Results';
import Text from './data/Text';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

//Quiz Page and generates user results upon completion of quiz
function Quiz(props) {
  const [questionCount, setQuestionCount] = useState(0);
  const [allAnswers, setAllAnswers] = useState({ more: 0, less: 0, action: 0, inaction: 0, known: 0, unknown: 0, pedestrians: 0, passengers: 0 });
  const [answers, setAnswers] = useState([0, 0]);
  const [finished, setFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  //import scenario and normalization information
  const scenarios = require('./data/Scenarios.js');
  const measurements = require('./data/Measurements.js');

  //Selects answer and sets state for direction
  const chooseAnswer = (numQuestion, side) => {
    let answerCopy = answers.slice();
    if (side === 'left') {
      answerCopy[numQuestion - 1] = 1;
    } else {
      answerCopy[numQuestion - 1] = 2;
    }
    setAnswers(answerCopy);
  }

  //adds answers to state and goes to next question
  const nextQuestion = () => {
    let answerCopy = answers.slice();
    if (answerCopy[0] === 0 || answerCopy[1] === 0) {
      setErrorMessage(Text[props.language].Quiz.Paragraphs.error);
    } else {
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

      //If last question, send user preferences to mongodb
      if (questionCount === 10) {
        axios.post('https://ethicsenginebackend.herokuapp.com/preferences', allAnswerCopy)
          .then(res => console.log(res.data))
        axios.post('https://ethicsenginebackend.herokuapp.com/summary', allAnswerCopy)
          .then(res => console.log(res.data))
        setFinished(true);
      }
      setAllAnswers(allAnswerCopy);
      setAnswers([0, 0]);
      setQuestionCount(questionCount + 1);
      setErrorMessage("");
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="quiz-container">
      {finished ? <Results userPrefs={allAnswers} language={props.language} /> : <Container>
        <Row>
          <Col>
            {questionCount === 0 ?
              <div className="instructions" >
                <h4>{Text[props.language].Quiz.Headings.scenario}</h4>
                <p>{Text[props.language].Quiz.Paragraphs.scenario}</p>
                <h4>{Text[props.language].Quiz.Headings.instructions}</h4>
                <p>{Text[props.language].Quiz.Paragraphs.instructions}</p>
                <h4>{Text[props.language].Quiz.Headings.measured}</h4>
                <p>{Text[props.language].Quiz.Paragraphs.measured1}</p>
                <p>{Text[props.language].Quiz.Paragraphs.measured2}</p>
                <p>{Text[props.language].Quiz.Paragraphs.measured3}</p>
                <p>{Text[props.language].Quiz.Paragraphs.measured4}</p>
                <button onClick={() => setQuestionCount(1)} >{Text[props.language].Quiz.Buttons.start}</button>
              </div>
              :
              <div className="question">
                <h4>{Text[props.language].Quiz.Headings.question} {questionCount}/10</h4>
                <p className="extra-info" onClick={handleShow} >{Text[props.language].Quiz.Headings.info}</p>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{Text[props.language].Quiz.Headings.info}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{Text[props.language].Quiz.Paragraphs.sceneInfo}</Modal.Body>
                  <Modal.Footer>
                    <button className="modal-button" onClick={handleClose}>
                      {Text[props.language].Quiz.Buttons.close}
                    </button>
                  </Modal.Footer>
                </Modal>
                <p>{errorMessage}</p>
                <Row>
                  <Col>
                    <h6>{Text[props.language].Quiz.Paragraphs.impartial}</h6>
                  </Col>
                </Row>
                <Row className="first-question" >
                  <Col onClick={() => chooseAnswer(1, "left")} xs={5} className={answers[0] === 1 ? "active answer" : "answer"} >
                    <p>{scenarios[props.language][questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>{Text[props.language].Quiz.Paragraphs.or}</p>
                  </Col>
                  <Col onClick={() => chooseAnswer(1, "right")} xs={5} className={answers[0] === 2 ? "active answer" : "answer"} >
                    <p>{scenarios[props.language][questionCount - 1].Right}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>{Text[props.language].Quiz.Paragraphs.passenger}</h6>
                  </Col>
                </Row>
                <Row className="second-question">
                  <Col onClick={() => chooseAnswer(2, "left")} xs={5} className={answers[1] === 1 ? "active answer" : "answer"} >
                    <p>{scenarios[props.language][questionCount - 1].Left}</p>
                  </Col>
                  <Col xs={2} >
                    <p>{Text[props.language].Quiz.Paragraphs.or}</p>
                  </Col>
                  <Col onClick={() => chooseAnswer(2, "right")} xs={5} className={answers[1] === 2 ? "active answer" : "answer"} >
                    <p>{scenarios[props.language][questionCount - 1].Right}</p>
                  </Col>
                </Row>
                {questionCount !== 10 ?
                  <button onClick={() => nextQuestion()} >{Text[props.language].Quiz.Buttons.next}</button>
                  :
                  <button onClick={() => nextQuestion()}>{Text[props.language].Quiz.Buttons.results}</button>}
              </div>}
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default Quiz;