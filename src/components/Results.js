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
      aUtil: 0,
      aAction: 0,
      aKnown: 0,
      aPedestrians: 0
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    axios.get('http://localhost:5000/summary')
      .then(res => {
        //Fetch Summary Data
        this.setState({ aUtil: res.util });
        this.setState({ aAction: res.action });
        this.setState({ aKnown: res.known });
        this.setState({ aPedestrians: res.pedestrians });
        this.setState({ fetched: true })

        //Create Radar Chart
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
          type: "radar",
          data: {
            labels: ["Saving More", "Saving Less", "Action", "Inaction", "Known", "Unknown", "Pedestrians", "Passengers"],
            datasets: [
              {
                label: "You",
                data: [.7, .6, .3, .3, .6, .9, .5, .5],
                backgroundColor: 'rgb(255, 103, 135, .3)',
                borderColor: 'rgb(255, 103, 135)',
                pointBackgroundColor: 'rgb(255,103,135)',
                pointBorderColor: '#FFFFFF'
              },
              {
                label: "Average",
                data: [.4, .4, .6, .5, .3, .8, .4, .6],
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

  parseData(pref, prefNum) {
    let util1 = 0;
    let util2 = 0;
    let action1 = 0;
    let action2 = 0;
    let inaction1 = 0;
    let inaction2 = 0;
    let known1 = 0;
    let known2 = 0;
    let pedestrians1 = 0;
    let pedestrians2 = 0;
    if (pref > 0) {
      for (let i = 0; i < Totals[prefNum][1]; i++) {
        
      }
    }

    return {
      
    }
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