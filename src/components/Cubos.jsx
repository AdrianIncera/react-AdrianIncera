import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCubos, DatosTablaCubos } from '../data/DatosCubos';
class Cubos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-site">
        <h1>Cubos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaCubos.id}</th>
                    <th>{TitulosTablaCubos.field1}</th>
                    <th>{TitulosTablaCubos.field2}</th>
                    <th>{TitulosTablaCubos.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaCubos.map((item) => {
                    return (
                      <tr>
                        <td>{item.Tipos}</td>
                        <td>{item.Marca}</td>

                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaCubos[2].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaCubos[2].marca} {DatosTablaCubos[2].modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {DatosTablaCubos[2].matricula}
                    <p />
                    {DatosTablaCubos[2].descripción}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cubos;
