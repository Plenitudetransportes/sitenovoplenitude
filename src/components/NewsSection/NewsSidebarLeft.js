import React from "react";
import BlogPagination from "./BlogPagination";

const NewsSidebarLeft = ({ newses = [] }) => {
  return (
    <div className="news-sidebar__left">
      <div className="news-sidebar__content">
        {newses.map((news) => (
          <NewsSidebarSingle news={news} key={news.id} />
        ))}
        <BlogPagination />
      </div>
    </div>
  );
};


