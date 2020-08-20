const React = require('react');
const Jumbotron = require('react-bootstrap').Jumbotron;
const Container = require('react-bootstrap').Container;
const Form = require('react-bootstrap').Form;
const FormGroup = require('react-bootstrap').FormGroup;
const Button = require('react-bootstrap').Button;
const AuthorisedLayout = require('./Layouts/authorised');
import MusicServices from './Fragments/MusicServices';
class Generate extends React.Component {
  render() {
    const options = Object.keys(this.props.musicServices).map((id) => {
      return {id: id, label: this.props.musicServices[id].name }
    });
    console.log(options);

    return (
      <AuthorisedLayout title={this.props.title}>
        <Jumbotron>
          <Container>
            <h1 className="display-3">{this.props.title}</h1>
            <p>HI, this will generate a new key pair to be stored on the server.</p>
            <p>When the generation is complete, a zip file containing the key pair will download to your machine.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Form method='POST'>
            <MusicServices options={options}></MusicServices>
            <Button variant="primary" type="submit">
              Generate key pair
            </Button>
          </Form>
        </Container>
      </AuthorisedLayout>
    );
  }
}

module.exports = Generate;
