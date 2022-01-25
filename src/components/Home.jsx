import { bottom } from '@popperjs/core/lib/enums';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.valorTextInput = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPassword.current.value,
    });

    localStorage.setItem('user', this.inputUser.current.value);
    localStorage.setItem('password', this.inputPassword.current.value);
  }

  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido! {this.state.user}</h1>
        </div>
      );
    }
    return (
      <div className="main-site">
        <h1>Bienvenido!</h1>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                ref={this.inputUser}
                type="email"
                placeholder="Introducir email"
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                ref2={this.inputPassword}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.login}>
              Logearse
            </Button>
          </Form>
        </Container>
      </div>
    );
  }

  componentDidUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}

export default Home;
