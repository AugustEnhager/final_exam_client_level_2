import React from "react";
import { courses } from "../data/courses";

const Body = () => {
  const courseTitle = courses.map((course) => {
    return <h2>{course.title}</h2>;
  });

  return <div>{courseTitle}</div>;
};

export default Body;
