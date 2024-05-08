import React, { Fragment } from "react";
import handleSubmit from "src/utils/handleSubmit";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import SidebarSinglePost from "./SidebarSinglePost";

const SidebarCommentsIcon = ({ icon = "" }) => {
  return (
    <div className="sidebar__comments-icon">
      <i className={icon}></i>
    </div>
  );
};

const NewsSidebarSide = ({
  posts = [],
  categories = [],
  tags = [],
  comments = [],
}) => {
  const onSubmit = (data) => console.log(data);

  
};

export default NewsSidebarSide;
