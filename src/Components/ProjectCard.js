import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,site }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
        {description&&  <span>{description}</span>}
<br/>        {site &&< a href={site} style={{color:"white"}}>visit website</a>}
        </div>
      </div>
    </Col>
  )
}
