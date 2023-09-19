import React from "react";
import ProjectItem from "./reusable/ProjectItem";

import talentsImage from "../public/assets/generic.png";
import sapLogo from "../public/assets/sap.png"

const projectItems = [
  {
    key: 0,
    title: "Talents Mobile",
    subTitle: "Ionic Framework",
    background: talentsImage,
    projectUrl: "/talents",
  },
  {
    key: 1,
    title: "SAP ABAP HR Module",
    subTitle: "SAP ABAP",
    background: sapLogo,
    projectUrl: "/nhmsap",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-violet-700">
          All My Working Experience
        </p>
        <h2 className="py-4">What I've Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectItems.map((projectItem, key) => (
            <ProjectItem
              key={key}
              title={projectItem.title}
              subTitle={projectItem.subTitle}
              background={projectItem.background}
              projectUrl={projectItem.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
