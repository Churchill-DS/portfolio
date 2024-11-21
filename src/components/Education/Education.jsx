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
          date="2012 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Xaverian Primary Sch.</h3>
          <h4 className="vertical-timeline-element-subtitle">Kisumu, Kenya</h4>
          <p>Kenya Certificate of Primary Education</p>
        </VerticalTimelineElement>
         <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "#062040", color: "#84eed7" }}
             contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
             date="2020 - 2023"
             iconStyle={{ background: "#52f5e6 ", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kapsabet High</h3>
          <h4 className="vertical-timeline-element-subtitle">Nandi, Kenya</h4>
          <p>Highschool Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#123567", color: "#84eed7" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(85, 85, 220)" }}
            date="Feb, 2024 - Aug,2024 "
            iconStyle={{ background: "#fe34eb ", color: "#fff" }}
            
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Moringa School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h4>
          <p>Software Engineering (Javascript, ReactJS, Python & Flask)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "#0e2a4c", color: "#84eed7" }}
             contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
             date="Sept, 2024 - Present"
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Power Learn Project Africa
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online course</h4>
          <p>Software development upskilling(Django, Dart & Flutter)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

