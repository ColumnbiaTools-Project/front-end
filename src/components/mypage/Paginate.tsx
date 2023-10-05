"use client";
import React from "react";
import Pagination from "react-js-pagination";
import "./Paginate.css";

export default function Paginate({ page, count, setPage }: any) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      hideFirstLastPages={true}
      onChange={setPage}
    />
  );
}
