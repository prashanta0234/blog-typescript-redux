import React, { lazy, Suspense } from "react";
// import Filter from '../component/filter/Filter'
const Filter = lazy(() => import("../component/filter/Filter"));

const Nav = lazy(() => import("../component/shared/header/Nav"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Filter />
      </Suspense>
    </>
  );
}
