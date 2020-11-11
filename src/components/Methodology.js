import Text from './data/Text';
import Container from 'react-bootstrap/Container';

function Methodology() {
  return (
    <div className="methodology-container">
      <Container>
        <h3>{Text["English"].Methodology.Headings.Recording}</h3>
        <p>{Text["English"].Methodology.Paragraphs.Recording1}</p>
        <p>{Text["English"].Methodology.Paragraphs.Recording2}</p>
        <p>{Text["English"].Methodology.Paragraphs.Recording3}</p>
        <p>{Text["English"].Methodology.Paragraphs.Recording4}</p>
        <h3>{Text["English"].Methodology.Headings.Calculations}</h3>
        <p>{Text["English"].Methodology.Paragraphs.Calculations1}</p>
        <p>{Text["English"].Methodology.Paragraphs.Calculations2}</p>
        <p>{Text["English"].Methodology.Paragraphs.Calculations3}</p>
      </Container>
    </div>
  );
}

export default Methodology;