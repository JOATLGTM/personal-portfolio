import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved. <a href="https://github.com/judygab/web-dev-projects" style={{ 'color': 'transparent' }}><span style={{ 'textDecoration': 'none', 'color': '#B8B8B8' }}>Original porfolio by Judy</span></a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
