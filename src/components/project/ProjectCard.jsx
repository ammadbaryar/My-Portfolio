import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-container">
        <img src={props.imgPath} alt="card-img" className="project-card-img" />
      </div>

      <Card.Body className="project-card-body">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {props.description}
          </Card.Text>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "auto",
          }}
        >
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-card-btn"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-btn"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
