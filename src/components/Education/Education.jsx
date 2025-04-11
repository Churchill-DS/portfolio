import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work"; 
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

export const Education = () => {
  return (
    <div style={{ backgroundColor: "#04152d", color: "#fff", padding: "2rem 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#576cbc" }}>
        Education Timeline
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#123567", color: "#84eed7" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Machakos University.</h3>
          <h4 className="vertical-timeline-element-subtitle">Machakos, Kenya</h4>
          <p>BSc Statistics & Programming</p>
        </VerticalTimelineElement>
         <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "#062040", color: "#84eed7" }}
             contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
             date="Nov, 2024 - Apr, 2025"
             iconStyle={{ background: "#52f5e6 ", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">GoMyCode</h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h4>
          <p>Data Science Certification (SQL, Power BI, Python)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#123567", color: "#84eed7" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(85, 85, 220)" }}
            date="Jan, 2025 - Present "
            iconStyle={{ background: "#fe34eb ", color: "#fff" }}
            
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ALX Pathway
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h4>
          <p> Data Science (Excel, Professional Foundation, SQL, Python & Machine Learning)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "#0e2a4c", color: "#84eed7" }}
             contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
             date="October, 2024 - Present"
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            WorldQuant Ubiversity
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online course</h4>
          <p>Applied Data Science(Machine Learning, Predictive Modelling)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

