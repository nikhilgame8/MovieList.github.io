import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg={props.mode} variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home" className={props.textmode}>Movies List</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="mx-auto">
      <Form.Check
        type="switch"
        id="custom-switch"
        label={props.darkMode}
        className={props.textmode}
        bg="dark" 
        onClick={props.toggleMode}
      />
    </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default NavBar
