import React from 'react';
import axios from 'axios'
import Chart from 'chart.js';
import Totals from './data/Totals';
import Matters from './data/Matters';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Radar } from 'react-chartjs-2';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      aMore: 0,
      aLess: 0,
      aAction: 0,
      aInaction: 0,
      aKnown: 0,
      aUnknown: 0,
      aPedestrians: 0,
      aPassengers: 0,
      rankings: [{ more: 0 }, { less: 0 }, { action: 0 }, { inaction: 0 }, { known: 0 }, { unknown: 0 }, { pedestrians: 0 }, { passengers: 0 }]
    };
  }

  componentDidMount() {
    //Fetch Summary Data
    axios.get('https://ethicsenginebackend.herokuapp.com/summary')
      .then(res => {
        const uPrefs = this.props.userPrefs;
        const aPrefs = res.data[0];

        //Set user preference averages
        this.setState({ aMore: aPrefs.more });
        this.setState({ aLess: aPrefs.less });
        this.setState({ aAction: aPrefs.action });
        this.setState({ aInaction: aPrefs.inaction });
        this.setState({ aKnown: aPrefs.known });
        this.setState({ aUnknown: aPrefs.unknown });
        this.setState({ aPedestrians: aPrefs.pedestrians });
        this.setState({ aPassengers: aPrefs.passengers });
        this.setState({ fetched: true })

        //Create a list of user preferences ranked by deviation from average preferences
        let copyRankings = [{ type: "more", dev: this.findDeviation(aPrefs.more, uPrefs.more) }, { type: "less", dev: this.findDeviation(aPrefs.less, uPrefs.less) },
        { type: "action", dev: this.findDeviation(aPrefs.action, uPrefs.action) }, { type: "inaction", dev: this.findDeviation(aPrefs.inaction, uPrefs.inaction) },
        { type: "known", dev: this.findDeviation(aPrefs.known, uPrefs.known) }, { type: "unknown", dev: this.findDeviation(aPrefs.unknown, uPrefs.unknown) },
        { type: "pedestrians", dev: this.findDeviation(aPrefs.pedestrians, uPrefs.pedestrians) }, { type: "passengers", dev: this.findDeviation(aPrefs.passengers, uPrefs.passengers) }]
        copyRankings = copyRankings.sort((a, b) => {
          return b.dev - a.dev;
        })
        this.setState({ rankings: copyRankings })
      })
  }

  findDeviation(aValue, nValue) {
    return ((nValue - aValue) / aValue)
  }

  render() {
    return <div className="results-container">
      {this.state.fetched ?
        <div>
          <Container>
            <Row>
                <div className="radar-chart-container" id="results-radar" >
                  <Radar data={{
                    labels: ["Saving More", "Saving Less", "Action", "Inaction", "Known", "Unknown", "Pedestrians", "Passengers"],
                    datasets: [
                      {
                        label: "You",
                        data: [(this.props.userPrefs.more / Totals.more).toFixed(2), (this.props.userPrefs.less / Totals.less).toFixed(2), (this.props.userPrefs.action / Totals.action).toFixed(2), (this.props.userPrefs.inaction / Totals.inaction).toFixed(2),
                        (this.props.userPrefs.known / Totals.known).toFixed(2), (this.props.userPrefs.unknown / Totals.unknown).toFixed(2), (this.props.userPrefs.pedestrians / Totals.pedestrians).toFixed(2), (this.props.userPrefs.passengers / Totals.passengers).toFixed(2)],
                        backgroundColor: 'rgb(255, 103, 135, .3)',
                        borderColor: 'rgb(255, 103, 135)',
                        pointBackgroundColor: 'rgb(255,103,135)',
                        pointBorderColor: '#FFFFFF'
                      },
                      {
                        label: "Global Average",
                        data: [(this.state.aMore / Totals.more).toFixed(2), (this.state.aLess / Totals.less).toFixed(2), (this.state.aAction / Totals.action).toFixed(2), (this.state.aInaction / Totals.inaction).toFixed(2),
                        (this.state.aKnown / Totals.known).toFixed(2), (this.state.aUnknown / Totals.unknown).toFixed(2), (this.state.aPedestrians / Totals.pedestrians).toFixed(2), (this.state.aPassengers / Totals.passengers).toFixed(2)],
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
                </div>
                <div>
                  <h4>Issues that Mattered Most to You</h4>
                  <div>
                    <p>{Matters.most[this.state.rankings[0].type]}</p>
                    <p>{Matters.most[this.state.rankings[1].type]}</p>
                  </div>
                </div>
                <div>
                  <h4>How would your AV act?</h4>
                  <h4>How would the average AV act?</h4>
                </div>
            </Row>

          </Container>
        </div>
        : <div>Loading...</div>}
    </div>
  }
}

export default Results;