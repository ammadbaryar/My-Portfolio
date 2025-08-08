// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
// import "./ProjectCard.css"; // Assuming you have a CSS file for styling

// const ProjectCard = (props) => {
//   return (
//     <Card
//       className="project-card-view"
      
//     >
//       <div
//         style={{
//           flexShrink: 0,
//           height: "200px",
//           overflow: "hidden",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#f5f5f5",
//         }}
//       >
//         <img
//           src={props.imgPath}
//           alt="card-img"
//           style={{
//             maxHeight: "100%",
//             maxWidth: "100%",
//             objectFit: "contain",
//             borderRadius: "10px",
//           }}
//         />
//       </div>

//       <Card.Body
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flexGrow: 1,             // allow body to fill remaining space
//           justifyContent: "space-between",
//           padding: "1rem",
//         }}
//       >
//         <div>
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
//             {props.description}
//           </Card.Text>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             marginTop: "auto",
//           }}
//         >
//           <Button
//             variant="primary"
//             href={props.ghLink}
//             target="_blank"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <BsGithub /> &nbsp;
//             {props.isBlog ? "Blog" : "GitHub"}
//           </Button>

//           {!props.isBlog && props.demoLink && (
//             <Button
//               variant="primary"
//               href={props.demoLink}
//               target="_blank"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <CgWebsite /> &nbsp; Demo
//             </Button>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProjectCard;


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
        <img
          src={props.imgPath}
          alt="card-img"
          className="project-card-img"
        />
      </div>

      <Card.Body className="project-card-body">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {props.description}
          </Card.Text>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
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
