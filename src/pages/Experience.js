import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#191919">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2021 - Present"
          iconStyle={{ background: "#f9004d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Optic Power | Code Power
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unreal | Unity Developer
          </h4>
          <p>Software Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2021 - August 2021"
          iconStyle={{ background: "#f9004d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Nediar</h3>
          <h4 className="vertical-timeline-element-subtitle">
            AR Unity Developer
          </h4>
          <p>AR Hololens Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - October 2021"
          iconStyle={{ background: "#f9004d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Developer at Dream House Studios
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unreal | Unity Developer
          </h4>
          <p>VR Experiences Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2021"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineering In Digital Entertainment Design
          </h3>
          <h4>Universidad Pontificia Bolivariana | UPB</h4>
          <p>Medellín - Antioquia</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2018 - 2019"
          iconStyle={{ background: "#f9004d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Developer at Dream House Studios
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unity Developer
          </h4>
          <p>Unity Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            English, THRESHOLD
          </h3>
          <h4>Universidad Pontificia Bolivariana | UPB</h4>
          <p>Medellín - Antioquia</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            English, Upper-Intermediate.
          </h3>
          <h4>Oxford English Institute</h4>
          <p>Ibagué - Tolima</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical In Computer Maintenance.
          </h3>
          <h4>Redecomputo</h4>
          <p>Ibagué - Tolima</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Programmer.
          </h3>
          <h4>Redecomputo</h4>
          <p>Ibagué - Tolima</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
