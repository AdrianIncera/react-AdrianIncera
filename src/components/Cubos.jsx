import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCubos, DatosTablaCubos } from '../data/DatosCubos';


class Cubos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: DatosTablaCubos[0] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="main-site">
        <h1>Cubos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
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
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.Marca}</td>
                        <td>{item.Tipo}</td>
                        <td>{item.Tipos}</td>

                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.imagen} />
                <Card.Body>
                  
                  <Card.Text>
                    {this.state.selectedItem.imagen}
                    <p />
                    {this.state.selectedItem.descripcion}
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
