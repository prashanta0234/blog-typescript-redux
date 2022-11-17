import React, { lazy } from "react";
import Nav from "../component/shared/header/Nav";
// const Nav = lazy(() => import("../component/shared/header/Nav"));

const AddBlog: React.FC = () => {
  return (
    <>
      <Nav />
      <div>AddBlog</div>
    </>
  );
};
export default AddBlog;
