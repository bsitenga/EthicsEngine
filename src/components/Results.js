import React from 'react';
import axios from 'axios'
import Chart from 'chart.js';
import Totals from './data/Totals';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Measurements from './data/Measurements';

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
      aPassengers: 0
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    axios.get('http://localhost:5000/summary')
      .then(res => {
        //Fetch Summary Data
        this.setState({ aMore: res.more });
        this.setState({ aLess: res.less });
        this.setState({ aAction: res.action });
        this.setState({ aInaction: res.inaction });
        this.setState({ aKnown: res.known });
        this.setState({ aUnknown: res.unknown });
        this.setState({ aPedestrians: res.pedestrians });
        this.setState({ aPassengers: res.passengers });
        this.setState({ fetched: true })
  
        //Create Radar Chart
        const uPrefs = this.props.userPrefs;
        const aPrefs = res.data[0];
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
          type: "radar",
          data: {
            labels: ["Saving More", "Saving Less", "Action", "Inaction", "Known", "Unknown", "Pedestrians", "Passengers"],
            datasets: [
              {
                label: "You",
                data: [uPrefs.more / Totals.more, uPrefs.less / Totals.less, uPrefs.action / Totals.action, uPrefs.inaction / Totals.inaction,
                uPrefs.known / Totals.known, uPrefs.unknown / Totals.unknown, uPrefs.pedestrians / Totals.pedestrians, uPrefs.passengers / Totals.passengers],
                backgroundColor: 'rgb(255, 103, 135, .3)',
                borderColor: 'rgb(255, 103, 135)',
                pointBackgroundColor: 'rgb(255,103,135)',
                pointBorderColor: '#FFFFFF'
              },
              {
                label: "Average",
                data: [aPrefs.more / Totals.more, aPrefs.less / Totals.less, aPrefs.action / Totals.action, aPrefs.inaction / Totals.inaction,
                  aPrefs.known / Totals.known, aPrefs.unknown / Totals.unknown, aPrefs.pedestrians / Totals.pedestrians, aPrefs.passengers / Totals.passengers],
                backgroundColor: 'rgb(54, 162, 235, .3)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#FFFFFF'
              }
            ]
          },
          options: {
            scale: {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 1
              }
            }
          }
        });
      })
  }

  render() {
    return <div className="results-container">
      {this.state.fetched ?
        <div>
          <Container>
            <div className="radar-chart-container">
              <canvas id="radar-chart" ref={this.chartRef} />
            </div>
          </Container>
        </div>
        : <div>Loading...</div>}
    </div>
  }
}

export default Results;