import Text from './data/Text';
import Container from 'react-bootstrap/Container';

//Basic About Page
function About(props) {
  return (
    <div className="about-container">
      <Container>
        <h3>{Text[props.language].About.Headings.EthicsEngine}</h3>
        <p>{Text[props.language].About.Paragraphs.EthicsEngine}</p>
        <h3>{Text[props.language].About.Headings.Motivation}</h3>
        <p>{Text[props.language].About.Paragraphs.Motivation}</p>
        <h3>{Text[props.language].About.Headings.Development}</h3>
        <p>{Text[props.language].About.Paragraphs.Development}</p>
        <p>{Text[props.language].About.Paragraphs.Frontend}</p>
        <p>{Text[props.language].About.Paragraphs.Backend}</p>
        <h3>{Text[props.language].About.Headings.AboutMe}</h3>
        <img src="ProfilePhoto.jpg" className="profile-photo" />
        <p>{Text[props.language].About.Paragraphs.AboutMe}</p>
        <p className="repo-link"><a href="https://github.com/bsitenga/EthicsEngine" target="_blank">{Text[props.language].About.Paragraphs.Repository}</a></p>
      </Container>
    </div>
  );
}

export default About;