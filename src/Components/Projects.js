import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/mailboxwebsite.png";
import projImg3 from "../assets/img/expensedemo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import certificate1 from "../assets/img/Coursera dataexplore.jpg"
import certificate2 from "../assets/img/Coursera Share Data.jpg"
import certificate3 from "../assets/img/coursera-Rpgm.jpg"
import certificate4 from "../assets/img/Coursera Clean Data.jpg"



import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce-App",
      description: "A simple E-commerce platform to buy products .",
      imgUrl: projImg1,
      site:"https://reactdemo-ecommerceapp.netlify.app",
    },
    {
      title: "MailBoxClient",
      description: "A dummy mailbox client website in which user can receive and send mail to another registered users.",
      imgUrl: projImg2,
      site:"https://reactdemo-mailbox.netlify.app",

    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
    {
      title: "Expense-Tracker",
      description: "Developed an expense tracker app in which user can add, delete and update expense",
      imgUrl: projImg3,
      site:"https://reactdemo-expense.netlify.app",

    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //  },
  ];

  const certifications=[{title:"Data Analysis with R Programming",
                         imgUrl:certificate3,
                         description:"",
                         site:null
                          
                       },
                       {title:"Share Data Through the Art of Visualization",
                       imgUrl:certificate2,
                       description:"",
                         site:null
                          
                        
                     },
                     {title:"Prepare Data for Exploration",
                     imgUrl:certificate1,
                     description:"",
                         site:null
                          
                      
                   },
                   {title:"Process Data from Dirty to Clean",
                         imgUrl:certificate4,
                         description:"",
                         site:null
                          
                          
                       }
                  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Certifications</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certifications</Nav.Link>
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
                    <Row>
                        {
                          certifications.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
