import React from "react";
import styled from "styled-components";

const Bookmark = () => {
  return (
    <BookmarkConatiner>
      <button className="btn btn-save">Save</button>
    </BookmarkConatiner>
  );
};

export default Bookmark;

const BookmarkConatiner = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  .btn {
    z-index: 99;
    margin-top: -90px;
    margin-left: 20px;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
