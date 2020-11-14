import Text from './data/Text';
import Container from 'react-bootstrap/Container';

//Methodology/Documentation
function Methodology(props) {
  return (
    <div className="methodology-container">
      <Container>
        <h3>{Text[props.language].Methodology.Headings.Recording}</h3>
        <p>{Text[props.language].Methodology.Paragraphs.Recording1}</p>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Recording2}</p>
        <p>{"{ “more”: 2, “less”: 4, “action”: 18, “inaction”: 2, “known”: 2, “unknown”: 6, “pedestrians”: 4, “passengers”: 4 }"}</p>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Recording3}</p>
        <p>{"{ “more”: 2 / 6, “less”: 4 / 6, “action”: 18 / 20, “inaction”: 2 / 20, “known”: 2 / 8, “unknown”: 6 / 8, “pedestrians”: 4 / 8, “passengers”: 4 / 8 }"}</p>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Recording4}</p>
        <p>{"{ “total”: 10, “more”: 2.7, “less”: 3, “action”: 11.1, “inaction”: 7.7, “known”: 3.3, “unknown”: 4.4, “pedestrians”: 3.1, “passengers”: 3.4 }"}</p>
        <h3>{Text[props.language].Methodology.Headings.Calculations}</h3>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Calculations1}</p>
        <p>{"(raw preference score) / (total preference score in that category)"}</p>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Calculations2}</p>
        <p>{"A user’s preferences are ranked by their deviation from the average results."}</p>
        <p className="methodology-subtitle" >{Text[props.language].Methodology.Paragraphs.Calculations3}</p>
        <p>{"[(normalized user preference) - (normalized average preference)] / (normalized average preference)"}</p>
      </Container>
    </div>
  );
}

export default Methodology;