import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Text from './data/Text';
import { Radar } from 'react-chartjs-2';
import axios from 'axios'
import Totals from './data/Totals'

// Homepage with basic information and example radar graph
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //randomly generated graph data
            rData: {
                more: this.rNum(),
                less: this.rNum(),
                action: this.rNum(),
                inaction: this.rNum(),
                known: this.rNum(),
                unknown: this.rNum(),
                pedestrians: this.rNum(),
                passengers: this.rNum()
            },
            //global average graph data
            aData: {
                more: this.rNum(),
                less: this.rNum(),
                action: this.rNum(),
                inaction: this.rNum(),
                known: this.rNum(),
                unknown: this.rNum(),
                pedestrians: this.rNum(),
                passengers: this.rNum()
            }
        }
    }

    componentDidMount() {
        //Fetch summary data for radar graph
        axios.get('https://ethicsenginebackend.herokuapp.com/summary')
            .then(res => {
                const aPrefs = res.data[0];
                this.setState({
                    aData: {
                        more: aPrefs.more,
                        less: aPrefs.less,
                        action: aPrefs.action,
                        inaction: aPrefs.inaction,
                        known: aPrefs.known,
                        unknown: aPrefs.unknown,
                        pedestrians: aPrefs.pedestrians,
                        passengers: aPrefs.passengers
                    }
                })
            })

        //Set values between .15 and .85 for user data every 2 seconds
        this.interval = setInterval(() => this.setState({
            rData: {
                more: this.rNum(),
                less: this.rNum(),
                action: this.rNum(),
                inaction: this.rNum(),
                known: this.rNum(),
                unknown: this.rNum(),
                pedestrians: this.rNum(),
                passengers: this.rNum()
            }
        }), 2500);
    }

    //Clears interval with random number generation
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //returns random number between .15 and .85
    rNum() {
        return Math.floor(Math.random() * (61) + 15) / 100;
    }

    render() {
        return <div className="home-container">
            <Container fluid id="home-fluid">
                <Row>
                    <Col lg={6} >
                        <h1>{Text[this.props.language].Home.Headings.main}</h1>
                        <h6>{Text[this.props.language].Home.Headings.sub}</h6>
                        <p>{Text[this.props.language].Home.Paragraphs.main}</p>
                        <Link to="/quiz"><button>{Text[this.props.language].Home.Buttons.start}</button></Link>
                    </Col>
                    <Col lg={6} >
                        <Radar data={{
                            labels: [Text[this.props.language].Radar.Labels.more, Text[this.props.language].Radar.Labels.less, Text[this.props.language].Radar.Labels.action, Text[this.props.language].Radar.Labels.inaction, Text[this.props.language].Radar.Labels.known, Text[this.props.language].Radar.Labels.unknown, Text[this.props.language].Radar.Labels.pedestrians, Text[this.props.language].Radar.Labels.passengers],
                            datasets: [
                                {
                                    label: Text[this.props.language].Radar.Headings.you,
                                    data: [this.state.rData.more, this.state.rData.less, this.state.rData.action, this.state.rData.inaction,
                                    this.state.rData.known, this.state.rData.unknown, this.state.rData.pedestrians, this.state.rData.passengers],
                                    backgroundColor: 'rgb(255, 103, 135, .3)',
                                    borderColor: 'rgb(255, 103, 135)',
                                    pointBackgroundColor: 'rgb(255,103,135)',
                                    pointBorderColor: '#FFFFFF'
                                },
                                {
                                    label: Text[this.props.language].Radar.Headings.average,
                                    data: [(this.state.aData.more / Totals.more).toFixed(2), (this.state.aData.less / Totals.less).toFixed(2), (this.state.aData.action / Totals.action).toFixed(2), (this.state.aData.inaction / Totals.inaction).toFixed(2),
                                    (this.state.aData.known / Totals.known).toFixed(2), (this.state.aData.unknown / Totals.unknown).toFixed(2), (this.state.aData.pedestrians / Totals.pedestrians).toFixed(2), (this.state.aData.passengers / Totals.passengers).toFixed(2)],
                                    backgroundColor: 'rgb(54, 162, 235, .3)',
                                    borderColor: 'rgb(54, 162, 235)',
                                    pointBackgroundColor: 'rgb(54, 162, 235)',
                                    pointBorderColor: '#FFFFFF'
                                }
                            ]
                        }}
                            options={{
                                scale: {
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 1.
                                    }
                                }
                            }} />
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default Home;
