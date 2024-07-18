import React from "react";
import { WorkList } from "../../../data/ProjectData";
import { Card, CardLeft, CardRight, Stack } from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {WorkList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack </span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            {list.time}
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
