import { Col } from "react-bootstrap";

// const imgCustomStyle = {
//   width: '416px',
//   height: '268px'
// }

export const ProjectCard = ({ title, description, imgUrl, urlLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="proj-card-links" href={urlLink} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Project" style={{}} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
