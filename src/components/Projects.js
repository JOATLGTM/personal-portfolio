import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import nailsalon from "../assets/img/nailsalon.png";
import stripe from "../assets/img/ecommerce-stripe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import remixProject from '../assets/img/remix-project.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Remix Expense Project",
      description: "An Expense list with CRUD abilities using Remix.js",
      imgUrl: remixProject,
      urlLink: 'https://remix-project-silk.vercel.app/'
    },
    {
      title: "Ecommerce project selling products",
      description: "Selling music electronics using Next.js, sanity.io and Stripe API",
      imgUrl: stripe,
      urlLink: 'https://ecommerce-stripe-dun.vercel.app/'
    },
    {
      title: "Amelia Nail Salon",
      description: "Nail website using React.js",
      imgUrl: nailsalon,
      urlLink: 'https://amelia-nail-salon.vercel.app/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are my projects showcasing my proficiency in HTML5, CSS3, and JavaScript for a responsive front-end using React.js, Remix.js, Vue.js and Redux. The robust back-end, built on Node.js and Express.js, integrates MongoDB for scalable database management.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>{`Soon :)`}</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>{`Soon :)`}</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
