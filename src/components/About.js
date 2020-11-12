import Text from './data/Text';
import Container from 'react-bootstrap/Container';

//Basic About Page
function About() {
  return (
    <div className="about-container">
      <Container>
        <h3>{Text["English"].About.Headings.EthicsEngine}</h3>
        <p>{Text["English"].About.Paragraphs.EthicsEngine}</p>
        <h3>{Text["English"].About.Headings.Motivation}</h3>
        <p>{Text["English"].About.Paragraphs.Motivation}</p>
        <h3>{Text["English"].About.Headings.Development}</h3>
        <p>{Text["English"].About.Paragraphs.Development}</p>
        <p>{Text["English"].About.Paragraphs.Frontend}</p>
        <p>{Text["English"].About.Paragraphs.Backend}</p>
        <h3>{Text["English"].About.Headings.AboutMe}</h3>
        <p>{Text["English"].About.Paragraphs.AboutMe}</p>
        <p className="repo-link"><a href="https://github.com/bsitenga/EthicsEngine" target="_blank">{Text["English"].About.Paragraphs.Repository}</a></p>
      </Container>
    </div>
  );
}

export default About;