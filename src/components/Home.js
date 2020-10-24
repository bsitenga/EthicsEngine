import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div className="home-container">
            <Container>
                <Row>
                    <Col lg={8} >
                        <h1>Reframing the way autonomous vehicles are designed</h1>
                        <h6>Ethics Engine is a platform designed to measure public opinion of
                            the ethical challenges presented by automous driving</h6>
                        <p>The quiz will show you a series of moral dilemmas involving an 
                            autonomous vehicle. You will choose how the autonomous vehicle 
                            should act in each situation. Afterwards, you'll be shown your
                            responses compared to the average of all others.</p>
                    </Col>
                    <Col lg={4} >Column 2</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
